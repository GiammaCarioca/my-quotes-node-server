import express from 'express';
import {
  getAllQuotes,
  getQuote,
  addQuote,
  deleteQuote,
} from '../controllers/quotesController.js';

const router = express.Router();

router.get('/', getAllQuotes);
router.get('/:id', getQuote);
router.post('/create', addQuote);
router.delete('/:id', deleteQuote);

export default router;
