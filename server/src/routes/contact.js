import express from 'express'
import { submitContact } from '../controllers/contactController.js'

const router = express.Router()

// POST endpoint to submit contact form
router.post('/submit', submitContact)

export default router
