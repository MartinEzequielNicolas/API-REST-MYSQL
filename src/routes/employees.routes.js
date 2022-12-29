import {Router} from 'express'
import { deleteEmployees, getEmployees, postEmployees, putEmployees,getEmployee } from '../controllers/employees.controller.js';

const router = Router()

router.get('/employees',getEmployees);
router.get('/employees/:id',getEmployee);
router.post('/employees',postEmployees);
router.delete('/employees/:id',deleteEmployees);
router.put('/employees/:id',putEmployees);

export default router 