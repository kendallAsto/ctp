const express = require("express");
const mysql = require("mysql");
const cors = require("cors")

const app = express();
const PORT = 3001;
app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ctpsd_events"
});

db.connect((err) =>{
    if(err){
        throw err
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

    const fechaCreacion = new Date().toISOString().slice(0,19).replace(`T`,``);

    const SQL_QUERY = `insert into events (title,start,end,fechaCreacion) values (?,?,?,?)`
    db.query(SQL_QUERY, [title,start,end,fechaCreacion],(err,result) =>{
        if(err){
            return res.status(500).json({error: err.message})
        }
        res.status(201).json({id: result.insertID,title,start,end,fechaCreacion:fechaCreacion})
    })
})

app.listen(PORT,() =>{
    console.log(`Servidor escuchado en HTTP://localhost:${PORT}`)
})