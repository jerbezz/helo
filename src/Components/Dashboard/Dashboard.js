import React, {Component} from 'react'
import Nav from './../Nav/Nav'
import {connect} from 'react-redux'
import {getData} from './../../ducks/reducer'


class Dashboard extends Component {
    constructor(props){
        super()

    }

    componentDidMount(){
        
    }



    render(){
        return(
            <div>
                Dash
                <Nav/>
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState
export default connect(mapState, { getData })(Dashboard)