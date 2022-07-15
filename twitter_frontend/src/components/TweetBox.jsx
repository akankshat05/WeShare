import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../Stylesheet/TweetBox.css' 
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
const TweetBox = () => {
  const [post, setPost] = useState({likes:0, file:"", body: ""})
const [posts, setPosts] = useState([])
  useEffect(() => {    
        getAllTweets()
     },[]);
    const getAllTweets= () => {
        axios.get('./api/tweets')
        .then((response)=>{
            const data = response.data
            // correctly getting an array of saved tweets in database
            console.log(data)
            displayAllTweets(data)
        }).catch(()=>{
            alert('error retrieveing data')
        })
    }
    const displayAllTweets = (data) => {
        setPosts(data)
    }
  const submit = (event) => {
        event.preventDefault()
        const payload = {
            newtweet: post.body,
            file: post.file,
            likes: post.likes
        }
        axios({
            url:'/api/save',
            method:'POST',
            data:payload
        }).then(()=>{
            console.log("a post has been sent to the backend")
            setPost({likes:0,file:"",body:""})
            getAllTweets()
        })
        .catch(()=>{
            console.log("error. data has not been sent to the backend")
        })
    }
   const handleInputs = (event) => {
        const name = event.target.name
        const value = event.target.value
        setPost({...post, [name] : value})
    }
        //     // UPDATE TWEET    
    const updateTweet= (id, task) => {
        const finaldata = {
            newtweetid: id,
            task: task
        }
        //update the tweet ID 
        axios({
            url:'/api/update',
            method:'POST',
            data:finaldata
        }).then((res)=> {
            getAllTweets()
        }).catch((err)=> {
            console.log(err)
        })
    }
    const deleteOne= (id) => {
    const finaldata = {
        newtweetid: id
    }
    //pass the tweet ID TO DELETED
    axios({
        url:'/api/delete',
        method:'POST',
        data:finaldata
    }).then((res)=> {
        getAllTweets()
    }).catch((err)=> {
        console.log(err)
    })
}
    return (
    <div>
    <form id="post_form" onSubmit={submit}>
    <input onChange={handleInputs}
        name="body"
        type="text"
        value={post.body}
        placeholder="what's happening?"
        class="happening" />
     <div className="Tweet_fileUpload">
        <div className="tweet_button">
        <button class="hey" 
        style={{cursor: 'pointer'}}>Tweet</button>
        </div>
    </div>
    </form>
    {/* <Result result={posts}/> */}

    <div class="mt-3">
    {posts.map((item) => {
            let task = ''
            let result = item.likes
            if(item.likes == 0){
                task = 'increment'
            }
            else{
                task='decrement'
            }
            return (
            <div class="mb-5" style={{backgroundColor: "red"}}>
            <h1> {item.newtweet} </h1>
            <span onClick={
                ()=>{updateTweet(item._id, task)
                getAllTweets()
            }}><FavoriteIcon/></span>
            {result}
            <span onClick={()=>
                {deleteOne(item._id)
                getAllTweets()
                }
                }><DeleteOutlineIcon/></span>
            </div>
            )
   })
   }
   </div>

    </div>
  )
}


export default TweetBox