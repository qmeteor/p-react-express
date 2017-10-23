/**
 * Created by Bien on 2017-09-29.
 */

if(process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}
