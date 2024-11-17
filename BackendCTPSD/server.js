const express = require("express");
const mysql = require("mysql");
const cors = require("cors")

const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // Para procesar JSON
app.use(bodyParser.urlencoded({ extended: true })); // Para datos codificados en URL

app.use(cors())
app.use(express.json());


const db = mysql.createConnection({
    host: "sql5.freesqldatabase.com",
    user: "sql5745276",
    password: "wQFDM24LgJ",
    database: "sql5745276",
    port: "3306"
});

db.connect((err) =>{
    if(err){
        throw err;
    }
    console.log("Conexion establecida")
})

app.get('/api/events',(req,res) =>{
    const SQL_QUERY = 'SELECT * FROM events';
    db.query(SQL_QUERY,(err,result) =>{
        if(err){
            throw err;
        }
        res.json(result);
    })
})

app.post('/api/validar', (req, res) => {
    const { cedula, apellido } = req.body;

    // Validación básica
    if (!cedula || !apellido) {
        console.log('Faltan datos: ', { cedula, apellido });
        return res.status(400).json({ success: false, message: 'Cédula y apellido son requeridos' });
    }

    // Consulta a la base de datos
    const SQL_QUERY = 'SELECT * FROM `lista-estudiantes` WHERE cedula = ? AND apellido = ?';
    db.query(SQL_QUERY, [cedula, apellido], (err, result) => {
        if (err) {
            console.error('Error en la consulta SQL:', err);
            return res.status(500).json({ success: false, message: 'Error en el servidor' });
        }

        if (result.length > 0) {
            console.log('Credenciales válidas:', result);
            return res.json({ success: true, message: 'Credenciales válidas' });
        } else {
            console.log('Credenciales inválidas');
            return res.json({ success: false, message: 'Credenciales inválidas' });
        }
    });
});



app.get('/api/empleos', (req, res) => {
    const SQL_QUERY = 'SELECT * FROM empleos';
    
    db.query(SQL_QUERY, (err, result) => {
        if (err) {
            console.error("Error al obtener empleos:", err);
            return res.status(500).json({ error: "Error al obtener empleos" });
        }
        res.json(result);
    });
});


app.listen(PORT,() =>{
    console.log(`Servidor escuchado en HTTP://localhost:${PORT}`)
})                                             
