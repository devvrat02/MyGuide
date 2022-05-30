const express = require('express');
const router = express.Router();
const uuid =require('uuid');
let user = require('../../Users')

// for getting the data of all users
router.get("/", (req,res) => {
    res.json(user);
});

// for getting the data of user by id

router.get('/:id',(req,res)=>{
    const found =user.some(user=>user.id==parseInt(req.params.id))
    if (found){
        res.json(user.filter(user=>user.id==parseInt(req.params.id)))
    }
    else 
    {
        res.sendStatus(404)
    }
})

// for creating a new user 

router.post('/',(req,res)=>{
    const newUser ={
        id: uuid.v4(),
        name : req.body.name,
        email: req.body.email
    }
    if(!newUser.name|| !newUser.email){
        return res.sendStatus(400)
    }
    user.push(newUser)
    res.json(user)
})

// for updating the data of user by id

router.put('/:id',(req,res)=>{
    const found =user.some(user=>user.id==parseInt(req.params.id))
    if (found){
        const updateUser =req.body;
        user.forEach(user=>{
            if(user.id===parseInt(req.params.id)){
                user.name = updateUser.name ? updateUser.name :user.name
                user.email= updateUser.email ? updateUser.email :user.email
                res.json({msg: 'User updated', user})
            }
        })
       
    }
    else 
    {
        res.sendStatus(404)
    }
})


// for deleting the data of user by id
router.delete ('/:id',(req,res)=>{
    const found =user.some(user=>user.id==parseInt(req.params.id))
    if (found){
        user =user.filter(user=>user.id !==parseInt(req.params.id))
        res.json({msg:"User deleted",user})
       
    }
    else 
    {
        res.sendStatus(404)
    }
})


module.exports =router