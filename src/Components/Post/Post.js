import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import axios from 'axios';


class Post extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            img: '',
            content: '',
            edit: false           
        } 
    }

    componentDidMount(){
        this.getData()
    }
    
    getData = async () => {
        const id = this.props.match.params.post_id
        await axios.get(`/api/post/${id}`).then( res => {
            console.log(5555, res.data)
            this.setState({
                title: res.data[0].posts_title,
                img: res.data[0].posts_img,
                content: res.data[0].posts_content,
            })
            })

        }

    edit = async () => {
        let id = this.props.match.params.post_id
        let {title, content} = this.state
        await axios.put(`/api/posts/${id}`, {title, content}).then( res => res.data)
    }

    editStateButtonTrue = async () => {
        this.setState({
            edit: true
        })
    }
    
    editStateButtonFalse = () => {
        this.edit()
        this.setState({
            edit: false
        })
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    
    render(){
        console.log(11111, this.state.post)
        return !this.state.edit ? (
            <div>
                <Nav/>
                <div>{this.state.title}</div>
                <img src={this.state.img} height='200px' width='200px'/>
                <div>{this.state.content}</div>
                <button onClick={() => this.editStateButtonTrue()}>edit</button>
            </div>
        ) :
        (
            <div>
                cool
                <input name='title' value={this.state.title} onChange={this.handleChange}></input>
                {/* <input name='img' value={this.state.img} onChange={this.handleChange}></input> */}
                <input name='content' value={this.state.content} onChange={this.handleChange}></input>
                <button onClick={() => this.editStateButtonFalse()}>Confirm</button>
            </div>
        )
    }

    }
    
    export default Post

    // const [post, setPost] = useState([])
    // const [edit, setEdit] = useState(false)
    // const [posts_title, setTitle] = useState(post.posts_title)
    // const [posts_img, setImg] = useState(post.posts_img)
    // const [posts_content, setContent] = useState(post.posts_content)
    
    
    // let titleRef = useRef();
    // let imgRef = useRef();
    // let contentRef = useRef();
    
    
    // console.log(55555, post.posts_title)
    // console.log(99999, post[0])
    // console.log(11111, posts_title)
    // console.log(22222, posts_img)
    // console.log(33333, posts_content)
    
    
    // console.log(12345, props.match.params)
    
    // const id = props.match.params.post_id
    // console.log(id)
    // const getData = async () => {
    //     await axios.get(`/api/post/${id}`)
    //     .then( res => setPost(res.data))
    // }
    
    // useEffect(() => {
    //     getData()
    // }, [])
    
    // const editingTrue = () => {
    //     setEdit(true)
    // }
    
    // const confirmEdit = async () => {
    //     await setTitle(titleRef.current.value)
    //     await setImg(imgRef.current.value)
    //     await setContent(contentRef.current.value)
    //     await axios.put(`/api/posts/${id}`, {posts_title, posts_img, posts_content, })
    //     setEdit(false)
    // }
    
    // let mappyboi = post.map((item, i) => {
        
    //     return (
    //         <div key={i}>
    //             <div>{item.posts_title}</div>
    //             <div><img src={item.posts_img} height='200px' width='200px' alt='' /></div>
    //             <div>{item.posts_content}</div>
    //             <button onClick={() => editingTrue()} >Edit</button>
    //             <div>{post.posts_title}</div>
    //         </div>
    //     )
    // })
    
    // let newTitle = post[0] ? (post.posts_title) : "Notta"
    
    
    // return !edit ? (
    //     <div>
    //         Post
    //             <Nav />
    //         {mappyboi}
    //         {newTitle}
    //     </div>
    // ) :
    // (
    //     <div>
    //         <Nav/>
    //         <input ref={titleRef} placeholder='New Title'/>
    //         <input ref={imgRef} placeholder='New Image'/>
    //         <input ref={contentRef} placeholder='New Content'/>
    //         <button onClick={() => confirmEdit()}>Confirm</button>
    //     </div>
    // )