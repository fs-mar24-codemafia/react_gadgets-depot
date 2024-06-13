import { colorHexMap } from "../constants/constants";


export function getColorHex(colorName: string): string{
  const normalizedColorName = colorName;
  return colorHexMap[normalizedColorName];
}
