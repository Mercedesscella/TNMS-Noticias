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

        let users =[
            {id:1, name:'dario'},
            {id:2, name:'belen'},
            {id:3, name:'ignacio'},
            {id:4, name:'flores'},
            {id:5, name:'viviana'},
            {id:6, name:'pedro'}
        ];
        let userEdit = users[idUser];
        res.render("userEdit", {userEdit:userEdit});
    },
    
    //'editado': function(req, res){
    //    res.send("FUI por PUT");
    //}


};
module.exports = userController;