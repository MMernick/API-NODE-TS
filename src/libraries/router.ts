import * as express from 'express';

import users from '../components/users/user.route.js'

const router = express.Router();
router.use([users])

export default router;