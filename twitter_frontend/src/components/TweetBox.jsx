import React from 'react'
import axios from 'axios'
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import '../Stylesheet/TweetBox.css'
class TweetBox extends React.Component{
    state ={
        newtweet:'',
        file:'',
        posts: []
    }
    componentDidMount = () =>{
        this.getAllTweets()
    }
    getAllTweets= () => {
        axios.get('./api/tweets')
        .then((response)=>{
            const data = response.data
            this.setState({posts: data})
        }).catch(()=>{
            alert('error retvering data')
        })
    }
    deleteTweet= () => {
    const finaldata = {
        newtweet: "me" // passing the tweet value actaul to be deleted
    }
    axios({
        url:'/api/delete',
        method:'POST',
        data:finaldata
    }).then((res)=> {
        console.log(res)
    }).catch((err)=> {
        console.log(err)
    })
}
    handleInputs = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({[name] : value})
    }
    submit = (event) => {
        event.preventDefault()
        const payload = {
            newtweet: this.state.newtweet,
            file: this.state.file
        }
        axios({
            url:'/api/save',
            method:'POST',
            data:payload
        }).then(()=>{
            console.log("data has been sent to the backend")
            this.resetuserinputs()
            this.getAllTweets()
        })
        .catch(()=>{
            console.log("error. data has not been sent to the backend")
        })
    }
    resetuserinputs = () =>{
        this.setState({
            newtweet: '',
            file: ''
        })
    }
    displayAllTweets = (posts) => {
        if (!posts.length) 
            return null
        // tweet body
        return posts.map((post, index)=>{
            return (
            <div key={index} className="tweet_body">
                <h3>tweet: {post.newtweet}</h3>
                <FavoriteIcon/>
                <DeleteOutlineIcon/>
            </div>
            )
        })
}
    render(){
        console.log('state', this.state)
        return(
            <div>
            <h1>HOME</h1>
            <form onSubmit={this.submit}>
            <div className="TweetBox_container">

           <input onChange={this.handleInputs} 
           name="newtweet"
           type="text" 
           value={this.state.newtweet}
           placeholder="what's happening?" />
           </div>
           <div className="Tweet_fileUpload">
               <div className="file">
               <label>File Upload</label>
               <input onChange={this.handleInputs}
               name="file"
               type="file"
               value={this.state.file}  />
               </div>
               <div className="tweet_button">
                   <button>TWEET</button>
               </div>
           </div>  
            </form>
            <button onClick={this.deleteTweet}> delete </button>
            <div className="results">{this.displayAllTweets(this.state.posts)}</div>
            </div>
        )
    }
}
export default TweetBox

