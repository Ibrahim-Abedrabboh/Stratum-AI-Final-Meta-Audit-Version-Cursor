import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { apiClient } from '@/api/client';
import FacebookLoginButton from './FacebookLoginButton';

vi.mock('@/api/client', () => ({
  apiClient: { get: vi.fn() },
}));

const mockedClient = apiClient as unknown as {
  get: ReturnType<typeof vi.fn>;
};

function renderButton(divider: 'before' | 'after' | 'none' = 'after') {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  return render(
    <FacebookLoginButton onCredential={vi.fn()} divider={divider} />,
    { wrapper }
  );
}

describe('FacebookLoginButton', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders nothing when Facebook Login is disabled', async () => {
    mockedClient.get.mockResolvedValue({
      data: { data: { enabled: false } },
    } as never);

    renderButton();

    await vi.waitFor(() => {
      expect(mockedClient.get).toHaveBeenCalled();
    });
    expect(screen.queryByTestId('facebook-login-button')).not.toBeInTheDocument();
  });

  it('renders Continue with Facebook when the API reports enabled', async () => {
    mockedClient.get.mockResolvedValue({
      data: {
        data: {
          enabled: true,
          app_id: '123',
          config_id: '1588782812791459',
          use_code_flow: false,
          scopes: ['public_profile', 'email'],
        },
      },
    } as never);

    renderButton('after');

    expect(await screen.findByTestId('facebook-login-button')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Continue with Facebook' })).toBeInTheDocument();
    expect(screen.getByRole('separator', { name: 'or' })).toBeInTheDocument();
  });
});
