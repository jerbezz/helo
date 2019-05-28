import React, {Component} from 'react'
import axios from 'axios'


class Auth extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    async register() {
        // console.log('reg')
        const { username, password } = this.state;
        const res = await axios.post('/auth/register', { username, password })
        if (res.data.loggedIn) this.props.history.push('/dashboard')
        else alert(res.data.message)
      }
    
      async login() {
        //   console.log('log')
        const { username, password } = this.state;
        const res = await axios.post('/auth/login', { username, password })
        if (res.data.loggedIn) this.props.history.push('/dashboard')
        else alert(res.data.message)
      }

    render(){
        return(
            <div>
                <input onChange={(e) => this.setState({ username: e.target.value })} value={this.state.username} type="text"/>
                <input onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} type="text"/>
                <button onClick={() => this.register()}>Register</button>
                <button onClick={() => this.login()}>Login</button>
            </div>
        )
    }
}

export default Auth