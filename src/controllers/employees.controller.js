import { pool } from "../db.js";

export const getEmployees = async (req,res) => {
   try {
    const [rows] = await pool.query('SELECT * FROM employes')
    res.json(rows)

   } catch (error) {

            return res.status(500).json({
            message : 'algo salió mal'
            })
   }

  
}

export const getEmployee = async (req,res) => {

    try {

        const [rows] = await pool.query('SELECT * FROM employes WHERE id = ?',[req.params.id])

        if (rows.length <= 0) return res.status(404).json({
        message: 'Empleado No Encontrado'
        })
        res.json(rows[0])
        
        
    }   catch (error) {
            return res.status(500).json({
                message : 'algo salió mal'
            })
           }
    }
    

export const postEmployees = async (req,res) => {
    try {
        const {name,salary} = req.body
        const [rows] = await pool.query('INSERT INTO employes (nombre,salario) VALUES (?,?)',[name,salary])
        res.send({
            id : rows.insertId,
            name,
            salary
         })
    }  catch (error) {
        return res.status(500).json({
            message : 'algo salió mal'
        })
    }
    

}


export const deleteEmployees = async (req,res) => {
    try {
        const [result] = await pool.query('DELETE FROM employes WHERE id = ?',[req.params.id])
    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'Empleado No Encontrado'
    })
    res.send('empleado Eliminado')
    } catch (error) {
        return res.status(500).json({
            message : 'algo salió mal'
        })

    }
    
}

export const putEmployees = async (req,res) => {
    try {
        const {name,salary} = req.body
    const [rows] = await pool.query('UPDATE employes set nombre = ? , salario = ? WHERE id = ?',[name,salary,req.params.id])
    res.send({
        id : rows.insertId,
        name,
        salary
     })
    } catch (error) {
        return res.status(500).json({
            message : 'algo salió mal'
        })
    }

    
}