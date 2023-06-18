import {
  theme as themeReducer,
  setDark,
  setLight,
  setTheme,
  Theme,
} from '../..';

describe('theme reducer', () => {
  it('should handle setDark action', () => {
    const initialState = { theme: Theme.LIGHT };
    const nextState = themeReducer(initialState, setDark());

    expect(nextState.theme).toBe(Theme.DARK);
  });

  it('should handle setLight action', () => {
    const initialState = { theme: Theme.DARK };
    const nextState = themeReducer(initialState, setLight());

    expect(nextState.theme).toBe(Theme.LIGHT);
  });

  it('should handle setTheme action', () => {
    const initialState = { theme: Theme.LIGHT };
    const nextTheme = Theme.DARK;
    const nextState = themeReducer(initialState, setTheme(nextTheme));

    expect(nextState.theme).toBe(nextTheme);
  });
});
