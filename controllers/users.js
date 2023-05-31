const User = require('../models/users');

// get user by id
const getOneUser = async (req,res)=>{
  try{
    const id = req.params.id;
    const data = await User.findById(id);
    return res.json(data);
  }catch (err){
    console.log(err);
    return res.status(500).json({ msg: 'Error', err: err});
  }
};
//get all users
const getUsers = async (req, res) =>{
  try{
    const data = await User.find().populate('thoughts').populate('friends');
    return res.json(data);

  }catch (err){
    console.log(err);
    return res.status(500).json({ msg: 'Error', err: err});
  }
};
//create a new user
const createUser = async (req,res)=>{
  try{
    const newUser = {
      userName:req.body.userName,
      email:req.body.email,
    };
    const data = await User.create(newUser);
    return res.json(data);
  }catch (err){
    console.log(err);
    return res.status(500).json({ msg: 'Error', err: err});
  }
};
//update users by their id
const updateUser = async (req,res)=>{
  try{
    const id = req.params.id;
    const updateUser = {userName: req.body.userName};
    const data = await User.updateOne({_id: id},{$set:updateUser});
    return res.json(data);
  }catch (err){
    console.log(err);
    return res.status(500).json({ msg: 'Error', err: err});
  }
};
//delete a user
const deleteUser = async (req,res)=>{
  try{
    const id = req.params.id;
    const data = await User.deleteOne({_id: id});
    return res.json(data);
  }catch (err){
    console.log(err);
    return res.status(500).json({ msg: 'Error', err: err});
  }
};



module.exports = {getUsers,getOneUser,createUser,deleteUser,updateUser};