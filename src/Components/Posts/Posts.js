import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'




class Posts extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: this.props.post.posts_title,
            img: this.props.post.posts_img,
            content: this.props.post.posts_content
        }
    }

    // getData = async () => {
    //     const id = this.props.match.params.post_id
    //     await axios.get(`/api/post/${id}`).then( res => {
    //         this.setState({
    //         post: res.data})
    //         })

    //     }

        
        
        render(){
            console.log(12345, this.state.title)
        let {title, img, content} = this.state
        return(
            <div>
                <Link to={`/post/${this.props.post.posts_id}`}>
                <div>{title}</div>
                <div><img src={img} height='200px' width='200px' alt=''/></div>
                <div>{content}</div>
                </Link>
            </div>
        )
    }
}
export default Posts