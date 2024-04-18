const { request, response } = require("express")

const pool = requiere('../data/config')
const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Bienvenido a Node,js Express REST API!'
        });
    });
    //id autoincremental, nombre del usuario, nombre completo del humano
    app.get('/users', (request, response) => {
        pool.query('SELECT * FROM users', (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });
}