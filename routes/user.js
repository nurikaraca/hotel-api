const {allUser,detailUser,deleteUser,updateUser} = require('../controllers/user.js')
const express = require('express')
const router= express.Router();
const {verifyUser,verifyAdmin} = require('../middleware/verify.js')


router.get('/allUser',verifyAdmin, allUser)
router.get('/detailUser/:id',verifyUser,detailUser)
router.delete('/deleteUser/:id',verifyUser,deleteUser)
router.put('/updateUser/:id',verifyUser,updateUser)

module.exports=router