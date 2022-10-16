const mongoose = require('mongoose')
const tweetsSchema = mongoose.Schema({
    newtweet: { type: String, required: true },
    file: { type: String, required: false, default: null },
    // profile:{type:String, required:true},
    likes: { type: Number, required: false, default: 0 },
    // comments:{type:Array, required:false, default: []}
})
const tweetModel = mongoose.model('TWEETMODEL', tweetsSchema)
module.exports = tweetModel
