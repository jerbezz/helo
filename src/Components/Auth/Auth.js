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
        console.log('reg')
        const { username, password } = this.state;
        const res = await axios.post('/auth/register', { username, password })
        console.log(321, res)
        if (res.data.loggedIn) this.props.history.push('/dashboard')
        else alert(res.data.message)
        console.log(123, res)
      }
    
      async login() {
          console.log('log')
        const { username, password } = this.state;
        const res = await axios.post('/auth/login', { username, password })
        console.log(654, res)
        if (res.data.loggedIn) this.props.history.push('/dashboard')
        else alert(res.data.message)
        console.log(456, res)
      }

    render(){
        console.log(789, this.state.username, this.state.password)
        console.log(this.props)
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