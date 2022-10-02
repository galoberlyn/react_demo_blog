import express from 'express';
import JwstController from '../controllers/JwstController';

const router = express.Router();

router.get('/sync', JwstController.sync);
router.get('/', JwstController.find);


export default router
