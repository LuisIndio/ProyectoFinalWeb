var conector = require('../conexionPostgre/postgres');
var usuario = {
    login: function(request, res) {
        var body = request.body;
        var username = body.usuario;
        var password = body.password;
        var query = "select * from usuario where username ='" +username+ "' and password = '"+password+"'";
        conector.conectar();
        conector.ejecutarQuery(query, (err, datos)=>{
            if(err){
                res.status(400).json({
                    status:false,
                    error:err
                });
            }else{
                
                    res.json({
                        status: true,
                        usuario:datos.rows[0]
                    });
                
            }
        });
    },
    insert: function(req, res){
        var body = req.body;
        var nombre = body.nombreCompleto;
        var correo = body.usuario;
        var password = body.password;
        var query = "insert into usuario values(default,'"+nombre+"','"+correo+"','"+password+"', default)";        conector.conectar();
        conector.ejecutarQuery(query, (err, datos)=>{
            if(err){
                res.status(400).json({
                    status:false,
                    error:err
                });
            }else{
                    res.json({
                        status: true,
                        usuario:datos.rows[0]
                    });
                
            }
        });
    }


}
module.exports = usuario;