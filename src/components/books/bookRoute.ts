import express from 'express';

const router = express.Router();

router.route('/books')
  .get(function(req, res) {
    res.status(200).send('books GET');
  })
  .post(function(req, res) {
    res.status(200).send('books POST');
  });

export default router;