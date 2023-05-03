export function getRandomColor(baseColor: string): string {
  const baseRGB = hexToRGB(baseColor);

  let color = "";
  let contrast = 0;

  // loop until we find a color with enough contrast
  while (contrast < 4.5) {
    // generate a random color
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    color = rgbToHex(r, g, b);

    // calculate the contrast ratio
    const rgb = hexToRGB(color);
    const ratio = calculateContrastRatio(baseRGB, rgb);

    contrast = Number(ratio.toFixed(1));
  }

  return color;
}

function hexToRGB(hex: string): { r: number; g: number; b: number } {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  return { r, g, b };
}

function rgbToHex(r: number, g: number, b: number): string {
  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");

  return `#${hexR}${hexG}${hexB}`;
}

function calculateContrastRatio(
  color1: { r: number; g: number; b: number },
  color2: { r: number; g: number; b: number }
): number {
  const luminance1 = calculateLuminance(color1.r, color1.g, color1.b);
  const luminance2 = calculateLuminance(color2.r, color2.g, color2.b);

  const lighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);

  return (lighter + 0.05) / (darker + 0.05);
}

function calculateLuminance(r: number, g: number, b: number): number {
  const red = calculateChannelLuminance(r);
  const green = calculateChannelLuminance(g);
  const blue = calculateChannelLuminance(b);

  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function calculateChannelLuminance(c: number): number {
  const sRGB = c / 255;

  if (sRGB <= 0.03928) {
    return sRGB / 12.92;
  }

  return Math.pow((sRGB + 0.055) / 1.055, 2.4);
}
