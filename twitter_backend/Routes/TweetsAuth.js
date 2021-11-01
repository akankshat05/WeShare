const express = require('express')
const router = express.Router();
const Tweet = require('../Model/User/tweetsSchema') //database values..
//API ROUTE TO GET ALL TWEETS
router.get('/tweets', (req,res) => {
    Tweet.find({})
    .then((data)=>{
     // console.log(data) prints all TWEETS
        res.json(data) // prints on SERVER page localhost:5002/api/tweets
    })
    .catch((error)=>{
        console.log(error);
    })
})
//API ROUTE TO RECEIVE A SENT TWEET
router.post('/save', (req, res) => {
const data = req.body
const newTweet = new Tweet(data)
newTweet.save((error) =>{
    if(error){
        res.status(500).json({msg: "error savig tweet"})
        return
    }
        return res.json({
            msg: 'we received your data'
        })
})
})
//API ROUTE TO DELETE A TWEET
router.post('/delete', (req,res)=>{
    const deletedocument = async (newtweet) => {
        try {
            await Tweet.deleteOne({newtweet})
        }catch(err){
            console.log(err)
        }
    }
    const todelete = req.body.newtweet 
    deletedocument(todelete)
    console.log(`${todelete}: tweet is delted`);
})
module.exports = router