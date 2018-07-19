
//figure out what set of credentials to return
if(process.env.NODE_ENV === 'production') {
//production  - return production set of keys

	module.exports = require('./prod');

} else {
//development - return development set of keys

	module.exports = require('./dev');

}
