import { pool } from "../db.js";

export const getEmployees = async (req,res) => {
   const [rows] = await pool.query('SELECT * FROM employes')
   res.json(rows)
}

export const getEmployee = async (req,res) => {
    const [rows] = await pool.query('SELECT * FROM employes WHERE id = ?',[req.params.id])
    res.json(rows)
 }

export const postEmployees = async (req,res) => {
    const {name,salary} = req.body
    const [rows] = await pool.query('INSERT INTO employes (nombre,salario) VALUES (?,?)',[name,salary])
    res.send({
        id : rows.insertId,
        name,
        salary
     })

}


export const deleteEmployees = (req,res) => 
res.send('creando employess')

export const putEmployees = (req,res) => 
res.send('creando employess')