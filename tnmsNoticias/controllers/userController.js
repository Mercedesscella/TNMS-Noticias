let userController = {
    'register':function(req, res){
        res.render('register');
    },
    'create':function(req, res){
        res.send(req.body);
    },
    'login' : function(req, res){
        res.render('login');
    },
    'editar' : function(req, res){
        let idUser= req.params.idUser;
        res.send(idUser);
    }


};
module.exports = userController;