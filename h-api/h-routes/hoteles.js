'use strict';
module.exports = function (app) {
    var todoList = require('../h-controller/hoteles');

    app.route('/list-hotels')
        .get(todoList.list_all_hoteles)
    app.route('/filter-hotels-start')
        .get(todoList.list_filter_start_hoteles)

    app.route('/hotel/:id')
        .get(todoList.read_hotel)
};