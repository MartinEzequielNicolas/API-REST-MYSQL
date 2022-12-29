import express from 'express'
import morgan from 'morgan'
import {pool} from './db.js'
import EmployeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(indexRoutes);
app.use(EmployeesRoutes);
app.listen(3000);
console.log('servidor corriendo en el puerto 3000');