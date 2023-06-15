export function hslToHex(hslString: string, quote = ''): string {
  const hslValues = hslString.match(/\d+/g)?.map(Number);
  if (!hslValues || hslValues.length !== 3) {
    throw new Error('Invalid HSL string');
  }

  const hue = hslValues[0] / 360;
  const saturation = hslValues[1] / 100;
  const lightness = hslValues[2] / 100;

  let r, g, b;

  if (saturation === 0) {
    r = g = b = lightness;
  } else {
    const hueToRgb = (p: number, q: number, t: number): number => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q =
      lightness < 0.5
        ? lightness * (1 + saturation)
        : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    r = hueToRgb(p, q, hue + 1 / 3);
    g = hueToRgb(p, q, hue);
    b = hueToRgb(p, q, hue - 1 / 3);
  }

  const hexColor = `#${componentToHex(r * 255)}${componentToHex(
    g * 255,
  )}${componentToHex(b * 255)}`;
  return quote + hexColor + quote;
}

function componentToHex(component: number): string {
  const hex = Math.round(component).toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}
