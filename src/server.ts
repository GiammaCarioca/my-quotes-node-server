import express from 'express';
import cors from 'cors';
import quotesRouter from './routes/quotesRoutes.js';

import { decodeIDToken } from './middlewares/decodeIDToken.js';

const app = express();
const PORT = process.env.PORT;

const corsOptions = {
  origin: ['*'],
  method: ['GET', 'POST', 'DELETE'],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(decodeIDToken); // Decodes the Firebase JSON Web Token
app.use('/api/quotes', quotesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
