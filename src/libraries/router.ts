import * as express from 'express';

import users from '../components/users/userRoute.js'
import books from '../components/books/bookRoute.js'

const router = express.Router();
router.use([books, users])

export default router;