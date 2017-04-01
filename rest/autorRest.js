let express = require('express');
let autorRest = express();
let db = require('./../database');

autorRest.get('', function(req, res) {
    db.autor.find({}).exec()
        .then(function(autores) {
            res.json(autores);
        });
});

autorRest.get('/:id', function(req, res) {
    db.autor.findById(req.params.id).exec().then(function (autor) {
        res.json(autor);
    });
});

autorRest.post('', function (req, res) {
    db.autor.create(req.body).then(function (autor) {
        res.json(autor);
    });
});

autorRest.put('/:id', function (req, res) {
    db.autor.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .exec()
        .then(function (autor) {
            res.json(autor);
        });
});

autorRest.delete('/:id', function (req, res) {
    db.autor.findOneAndRemove({ _id: req.params.id }).exec().then(function () {
        db.autor.find({}).exec()
            .then(function(autores) {
                res.json(autores);
            });
    });
});

module.exports = autorRest;