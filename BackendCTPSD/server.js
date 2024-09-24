const express = require("express");
const mysql = require("mysql");
const cors = require("cors")

const app = express();
const PORT = 3001;
app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    host: "%",
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

app.post('/api/events', (req,res) =>{
    console.log(req.body)
    const {title,start,end} = req.body;

    if(!title ||!start || !end){
        return res.status(400).json({
            error: `Todos los campos son obligatorios`
        })
    }

    const SQL_QUERY = `INSERT INTO events (title,start,end) values (?,?,?)`
    db.query(SQL_QUERY, [title,start,end],(err,result) =>{
        if(err){
            return res.status(500).json({error: err.message})
        }
        res.status(201).json({title,start,end})
    })
})

app.listen(PORT,() =>{
    console.log(`Servidor escuchado en HTTP://localhost:${PORT}`)
})