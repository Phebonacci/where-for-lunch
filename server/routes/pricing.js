import { Router } from 'express';

import { getPricingLevels } from '../services/yelp';

const router = Router();
router.get('/levels', async (req, res) => {
  const list = await getPricingLevels();
  res.send(list);
});

export default router;
