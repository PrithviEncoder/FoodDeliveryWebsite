import express from 'express'
import { allOrders, placeOrder, updateStatus, userOrders, verifyOrder } from "../controllers/orderController.js"
import authMiddleware from '../middlewares/auth.js'

const orderRoute = express.Router()

orderRoute.post('/place', authMiddleware, placeOrder)
orderRoute.post('/verify',verifyOrder)
orderRoute.get('/userorders', authMiddleware, userOrders)
orderRoute.get('/allorders', allOrders)
orderRoute.post('/status',updateStatus)

export default orderRoute