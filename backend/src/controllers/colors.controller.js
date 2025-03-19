import { colorsArr } from '../data/colors.js'

export const getColorsCtrl = (_req, res) => {

  res.json(colorsArr);
}