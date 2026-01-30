import express from 'express'
import { getServices, getServiceById } from '../controllers/servicesController.js'

const router = express.Router()

// GET all services
router.get('/', getServices)

// GET single service
router.get('/:id', getServiceById)

export default router
