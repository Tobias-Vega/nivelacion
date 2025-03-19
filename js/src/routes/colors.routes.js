import { Router } from 'express';
import { getColorsCtrl } from '../controllers/colors.controller.js';

export const colorRouter = Router();

colorRouter.get('/colors', getColorsCtrl);