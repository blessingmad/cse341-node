const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async(req, res) => {
    const result = await mongodb.getDatabase().db().collection('users').find();
        result.toArray().then((users) =>{
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(users);
    });
};
const getSingle  = async(req, res) => {
    const userId = new ObjectId(req.param.id);
    const result = await
    mongodb.getDatabase().db().collection('users').find({_Id:userId});
        result.toArray().then((users) =>{
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(users[0]);
        }); 
};


const createUser = async (req, res =>{
    const user = {
        firstName: req,body,firstName,
        lastName: req,body,lastName,
        email: req,body,email,
        favoriteColor: req,body,favoriteColor,
        birthday: req,body,birthday,
    }
    const response = await mongodb.getDatabase().db().collection('users').replaceOne((_Id:userId).user);
    if (response.modifiedCount > 0) {
        res.status

    }
        


});

module.exports = {
    getAll,
    getSingle,
    createUser,
    updateuser,
    deleteUser

};

