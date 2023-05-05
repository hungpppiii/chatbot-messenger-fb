import express from 'express';
import * as chatbotController from '../controllers/chatbotController.js'
const router = express.Router();

router.get('/', chatbotController.getHomePage)
router.get('/webhook', chatbotController.getWebhook)
router.post('/webhook', chatbotController.postWebhook)

export default router;