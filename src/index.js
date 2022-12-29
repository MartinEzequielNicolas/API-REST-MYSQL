import express from 'express'
import morgan from 'morgan'
import {pool} from './db.js'
import EmployeesRoutes from './routes/employees.routes.js'

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use('/api/',EmployeesRoutes);

app.listen(3000);

console.log('servidor corriendo en el puerto 3000');