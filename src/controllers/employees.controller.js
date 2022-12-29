import { pool } from "../db.js";

export const getEmployees = async (req,res) => {
   const [rows] = await pool.query('SELECT * FROM employes')
   res.json(rows)
}

export const getEmployee = async (req,res) => {
    const [rows] = await pool.query('SELECT * FROM employes WHERE id = ?',[req.params.id])

    if (rows.length <= 0) return res.status(404).json({
        message: 'Empleado No Encontrado'
    })
    res.json(rows[0])
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


export const deleteEmployees = async (req,res) => {
    const [result] = await pool.query('DELETE FROM employes WHERE id = ?',[req.params.id])
    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'Empleado No Encontrado'
    })
    res.send('empleado Eliminado')
}

export const putEmployees = async (req,res) => {
    const {name,salary} = req.body
    const [rows] = await pool.query('UPDATE employes set nombre = ? , salario = ? WHERE id = ?',[name,salary,req.params.id])
    res.send({
        id : rows.insertId,
        name,
        salary
     })
}