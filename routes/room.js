const express = require('express')
const router= express.Router();
const {getAllRoom,getDetailRoom, updateRoom,deleteRoom,createRoom} = require('../controllers/room.js');
const {verifyAdmin} = require('../middleware/verify.js')


router.get('/getAllRoom', getAllRoom );
router.get('/getDetailRoom/:d', getDetailRoom );
router.put('/updateRoom/:id',verifyAdmin,updateRoom  );
router.delete('/deleteRoom/:id/:hotelid', verifyAdmin,deleteRoom );
router.post('/createRoom/:id/:hotelid',verifyAdmin, createRoom );

module.exports=router