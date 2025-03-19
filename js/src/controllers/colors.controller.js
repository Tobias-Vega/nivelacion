import { colorsArr } from '../data/colors.js'

export const getColorsCtrl = (_req, res) => {

  res.status(200).json(colorsArr);
}