import express from 'express';

import { Card } from '../controllers/index.js'

const router = express.Router();

// List cards
router.get('/', Card.listAll);

export default router;