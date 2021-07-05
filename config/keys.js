if(process.env.NODE_ENV !== 'production'){
//in prod
module.exports = require('./prod'); 
} else {
// module.exports = require('./dev');
}