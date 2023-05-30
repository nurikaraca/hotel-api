const express = require('express')
const router= express.Router();
const {typeByCity,typeByCount,createHotel,updateHotel,deleteHotel,getSingleHotel,getAllHotel} = require('../controllers/hotel.js');

const {verifyAdmin} = require('../middleware/verify.js')


router.get('/typeByCity',typeByCity)
router.get('/typeByCount',typeByCount)
router.post('/createHotel' ,verifyAdmin, createHotel)
router.put('/updateHotel/:id',verifyAdmin,updateHotel)
router.delete('/deleteHotel/:id',verifyAdmin,deleteHotel)
router.get('/getSingleHotel/:id',getSingleHotel)
router.get('/getAllHotel',getAllHotel)


module.exports= router;