import { Router } from "express";
import multer from 'multer'
import { createOrderController } from "./useCases/CreateOrder";

const router = Router()
const upload = multer()

import { createProductController } from "./useCases/CreateProduct";
import { deleteProductController } from "./useCases/DeleteProduct";
import { getAllOrdersController } from "./useCases/GetAllOrders";
import { getAllProductsController } from "./useCases/GetAllProducts";
import { updateProductController } from "./useCases/UpdateProduct";

router.get('/products', (req, res) => getAllProductsController.handle(req, res))
router.post('/products', upload.single('file'), (req, res) => createProductController.handle(req, res))
router.put('/products', upload.single('file'), (req, res) => updateProductController.handle(req, res))
router.delete('/products', (req, res) => deleteProductController.handle(req, res))

router.get('/orders', (req, res) => getAllOrdersController.handle(req, res))
router.post('/orders', (req, res) => createOrderController.handle(req, res))

export { router }