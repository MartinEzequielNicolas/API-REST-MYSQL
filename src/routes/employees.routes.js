import {Router} from 'express'
import { deleteEmployees, getEmployees, postEmployees, putEmployees,getEmployee } from '../controllers/employees.controller.js';

const router = Router()

router.get('/employees',getEmployees);
router.get('/employee/:id',getEmployee);
router.post('/employees',postEmployees);
router.delete('/employees',deleteEmployees);
router.put('/employees',putEmployees);

export default router 