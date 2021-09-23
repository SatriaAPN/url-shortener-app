//Import the Services
const {
    shorturlService
} = require('../../services')

//Import the Class
const Shorturl = require('./shorturl');

//Initialize the Class's Objects
const shorturl = new Shorturl(shorturlService);

//Exports the objects
module.exports = { shorturl };