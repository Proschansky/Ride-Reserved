var moment = require('moment')

module.exports = function Today (){
    this.day = moment.format('dddd');
    this.date = moment.format('YYYY-MM-DD');
    this.writtenDate = moment.format('dddd, MMMM Do YYYY');
};