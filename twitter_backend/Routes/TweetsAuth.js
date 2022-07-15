const express = require('express')
const router = express.Router();
const Tweet = require('../Model/User/tweetsSchema') //database values..
//API ROUTE TO GET ALL TWEETS
router.get('/tweets', (req,res) => {
    Tweet.find({})
    .then((data)=>{
     // console.log(data) prints all TWEETS here in the console
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
//API TO UPDATE THE LIKES OF A TWEET
router.post('/update', (req,res)=>{    
    const updatedocument = async (newtweetid, task) => {
        try {
            if(task == 'increment'){
                await Tweet.updateOne({_id: newtweetid}, {$set: {"likes" : 1 }})
                res.status(200).json({msg: "tweet updated"})
            }
            else{
                await Tweet.updateOne({_id: newtweetid}, {$set: {"likes" : 0 }})
                res.status(200).json({msg: "tweet updated"})
            }
        }catch(err){
            console.log(err)
        }
    }
    const toUpdate = req.body.newtweetid
    const taskTodo = req.body.task
    updatedocument(toUpdate, taskTodo)
    console.log(`${toUpdate}: tweet is updated`);
})


//API ROUTE TO DELETE A TWEET
router.post('/delete', (req,res)=>{
    const deletedocument = async (tweetid) => {
        try {
            await Tweet.deleteOne({_id : tweetid})
        }catch(err){
            console.log(err)
        }
    }
    const todelete = req.body.newtweetid
    deletedocument(todelete)
    console.log(`${todelete}: tweet is delted`);
})

module.exports = router