'use strict';
var express = require('express');
const { property } = require('../models');
var router = express.Router();
const db = require("../models");
var ObjectID = require('mongodb').ObjectId;
const Property = db.property;


router.post('/create', function (req, res) {
    const property = new Property({
        _id: new ObjectID,
        listing_url: req.body.listing_url,
        name: req.body.name,
        summary:req.body.summary,
        space:req.body.space,
        description:req.body.description,
        neighborhood_overview: req.body.neighborhood_overview,
        notes: req.body.notes,
        transit: req.body.transit,
        access:req.body.access,
        interaction: req.body.interaction,
        house_rules : req.body.house_rules,
        property_type:req.body.property_type,
        room_type:req.body.room_type,
        bed_type :req.body.bed_type,
        minimum_nights :req.body.minimum_nights,
        maximum_nights: req.body.maximum_nights,
        cancellation_policy:req.body.cancellation_policy,
        last_scraped : Date.now(),
        updated: Date.now() 
    });

    property
      .save(property)
      .then(data => {
        res.redirect('/property/list');
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
      
   
});
router.get('/create', function (req, res) {
      res.render('propertyCreate');
   
});

router.get('/list', function (req, res) {
    Property.find()
      .then(data => {
        res.render('propertylist',{'data':data});
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
    
});

module.exports = router;
