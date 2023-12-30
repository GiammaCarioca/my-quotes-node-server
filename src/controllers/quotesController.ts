import { Request, Response } from 'express';
import { firebaseDB } from '../services/firebase.js';

export async function getAllQuotes(req: Request, res: Response) {
  const user = req['currentUser'];

  if (!user) {
    res.status(403).send('You must be logged in!');
  } else {
    try {
      const { author } = req.query;
      const quotesRef = firebaseDB.collection('quotes');

      const snapshot = author
        ? await quotesRef.where('author', '==', req.query.author).get()
        : await quotesRef.get();

      const quotes = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      return res.status(200).json({
        quotes,
        count: quotes.length,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export async function getQuote(req: Request, res: Response) {
  const user = req['currentUser'];

  if (!user) {
    res.status(403).send('You must be logged in!');
  } else {
    try {
      const quoteRef = firebaseDB.collection('quotes').doc(req.params.id);
      const doc = await quoteRef.get();

      if (!doc.exists) throw new Error('No such document!');

      const quote = {
        id: doc.id,
        ...doc.data(),
      };

      return res.status(200).json(quote);
    } catch (err) {
      console.log(err);
    }
  }
}

export async function addQuote(req: Request, res: Response) {
  const user = req['currentUser'];

  if (!user) {
    res.status(403).send('You must be logged in!');
  } else {
    try {
      const quotesRef = firebaseDB.collection('quotes');
      await quotesRef.add({ ...req.body });
      res.status(201).send('New quote added.');
    } catch (err) {
      console.log(err);
    }
  }
}

export async function deleteQuote(req: Request, res: Response) {
  const user = req['currentUser'];

  if (!user) {
    res.status(403).send('You must be logged in!');
  } else {
    try {
      await firebaseDB.collection('quotes').doc(req.params.id).delete();
      res.status(204).send();
    } catch (err) {
      console.log(err);
    }
  }
}
