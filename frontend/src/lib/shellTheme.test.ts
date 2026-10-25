import { describe, expect, it } from 'vitest';
import { darkShell, lightShell } from './shellTheme';

describe('shellTheme', () => {
  it('keeps dark as the midnight teal palette', () => {
    expect(darkShell.bgBase).toBe('#0b1215');
    expect(darkShell.textPrimary).toBe('#FFFFFF');
    expect(darkShell.onPrimary).toBe('#0b1215');
  });

  it('uses dark type on a light surface', () => {
    expect(lightShell.bgBase).toBe('#f8fafc');
    expect(lightShell.textPrimary).toBe('#0f172a');
    expect(lightShell.onPrimary).toBe('#ffffff');
    expect(lightShell.primary).toBe('#0d9488');
  });
});
