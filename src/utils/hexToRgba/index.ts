export function hexToRgba(hex: string = '000000', alpha: number = 1) {
  const [r = 0, g = 0, b = 0] = hex.match(/\w\w/g).map((x) => parseInt(x, 16))
  return `rgba(${r},${g},${b},${alpha})`
}
