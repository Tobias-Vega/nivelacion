import express from 'express';
import cors from 'cors';
import morgan from 'morgan'

import { colorRouter } from './routes/colors.routes.js';

const app = express();

app.use(morgan('dev'))

app.use(express.static('public'));

app.use(cors());


app.use('/api', colorRouter);

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000")
})