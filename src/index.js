import express from 'express'
import morgan from 'morgan'
import {pool} from './db.js'

const app = express()

app.use(morgan('dev'));


app.get('/ping', async (req,res) => {
   const [result]  = await pool.query('SELECT 1 + 1 AS result')
   res.json(result)
});
app.get('/employes' , (req,res) => {
    res.send('obteniendo employess');
});

app.post('/employes' , (req,res) => {
    res.send('creando employess');
});
app.delete('/employes' , (req,res) => {
    res.send('eliminando employess');
});
app.put('/employes' , (req,res) => {
    res.send(' actualizando employess');
});
app.listen(3000);
console.log('servidor corriendo en el puerto 3000');