const express = require("express");
const mysql = require("mysql");
const cors = require("cors")

const app = express();
const PORT = 3001;
app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "CTPSD-Admin2024",
    password: "P4ssw0rdCTPSD-Admin",
    database: "ctpsd-admin2024"
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
