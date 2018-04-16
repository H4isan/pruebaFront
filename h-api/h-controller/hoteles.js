'use strict';

var hoteles = require('../h-models/data').hoteles;
var request = require('request');


exports.list_all_hoteles = function (req, res) {
    res.json(hoteles);

};

exports.list_filter_start_hoteles = function (req, res) {
    const queryParams = JSON.parse(req.query.starts);
    const hotelsFiltered = hoteles.filter(function (hotel) {
        return this.indexOf(hotel.stars) >= 0;
    }, queryParams);
    res.json(hotelsFiltered);

};

exports.read_hotel = function (req, res) {
    const paramId = req.params.id;
    const getHotel = hoteles.filter((hotel) => hotel.id === paramId);
    if (getHotel.length) {
        res.send(getHotel[0]);
    } else {
        res.status(404).send('Upss... Your search does not exist!');
    }

};
