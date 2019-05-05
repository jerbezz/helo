import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Nav extends Component {
    

    render(){
        return(
            <div>
                <Link to='/dashboard'><button>Home</button></Link>
                <Link to='/form'><button>New Post</button></Link>
                <a href='http://localhost:5678/logout'><button>Logout</button></a>
            </div>
        )
    }
}

export default Nav