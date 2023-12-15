const app = require('./app');

app.listen(app.get('port'), () => {
    console.log("Servidor escudando en el puerto", app.get("port"));
})