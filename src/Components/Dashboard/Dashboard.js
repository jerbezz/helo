import React, {Component} from 'react'
import Nav from './../Nav/Nav'
import {connect} from 'react-redux'
import {getData} from './../../ducks/reducer'
import axios from 'axios'
import Posts from './../Posts/Posts'


class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            edit: false
        }

    }

    componentDidMount(){
       this.props.getData()
       this.getAllPosts()
       
        
    }

    getAllPosts = () => {
        axios.get('/api/posts')
        .then( res => {
            // console.log(12345, res.data)
            this.setState({
                posts: res.data
            })
        })
    }

    render(){
        console.log(this.props)
        console.log(this.state.posts)
        const {posts} = this.state

        // let mapPosts = posts.map((post, id) => {
        //     return (
        //         <Link to={`/post/${post.posts_id}`} key={id}>
        //         <div className='post-box' key={post.posts_id}>
        //             <div>{post.posts_title}</div>
        //             <div><img src={post.posts_img} height='200px' width='200px' alt=''/></div>
        //             <div>{post.posts_content}</div>
        //         </div>
        //         </Link>
        //     )
        // })
        return(
            <div>
                Dash
                <Nav/>
                {posts.map((item, i) => {
                    return (
                        <Posts
                        key={i} post={item}
                        />
                    )
                })}
                               
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState
export default connect(mapState, { getData })(Dashboard)