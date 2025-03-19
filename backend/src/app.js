import express from 'express';
import cors from 'cors';

import { colorRouter } from './routes/colors.routes.js';

const app = express();

app.use(
  cors({
    origin: "http://localhost:5500",
    credentials: true,
  })
);
app.use(express.json());
app.use('/api', colorRouter);

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000")
})