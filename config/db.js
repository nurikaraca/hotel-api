const mongoose = require('mongoose')


const db = () =>{
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("mongo_db connectt")
}).catch((error) => {
    console.log("hata"+error)
})

}

module.exports= db;