import express from 'express'
const router = express.Router();

import userModule from './modules/user.module.js';
router.use("/user", userModule)
import categoryModule from './modules/category.module.js';
router.use("/category", categoryModule)
export default router;