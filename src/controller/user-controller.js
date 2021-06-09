'use strict'

const repository = require('../repository/user-repository');

exports.getAllUsers= async(req, res, next) => {
    console.log('Entrou Get')
    try {
        let dbReturn = await repository.getAll();
        res.status(200).send(dbReturn);
    } catch (e) {
        res.status(500).send({
            message: 'Ops somenthing went wrong', error: e
        });
    }
};

exports.addUser = async(req, res, next ) => {
    console.log('Entrou Add User')
    try {
        let dbReturnUser = await repository.create(req.body);
        res.status(200).send(dbReturnUser);
    } catch (e) {
        res.status(500).send({
            message: 'Ops somenthing went wrong', error: e
        });
    }
};
