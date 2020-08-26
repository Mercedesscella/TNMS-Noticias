const fs = require('fs'); 

function logMiddleware (req, res, next){
    fs.writeFileSync('log.txt', 'logueo'+ req,url);
    next();
};

module.exports = logMiddleware;