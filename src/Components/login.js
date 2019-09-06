import React, {Component} from 'react'
import {connect} from 'react-redux'
import {googleLogin} from '../actions/userAction'
import BG from '../bg.jpg'


class Login extends Component{

    componentWillMount(){
        if (this.props.user !== null){
            this.props.history.push('/');
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.user !== null){
            nextProps.history.push('/');
        }
    }
    render(){
        return(
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-sm-12 jumbotron" style={{backgroundImage:`url(${BG})`}}>
                        <h1>BLOG | {new Date().getFullYear()}</h1>
                        <h2><i>Login with your <b>social network account</b> to start writing!</i>
                        </h2>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-12">
                        <button className="btn btn-danger col-sm-6" onClick={this.props.googleLogin}>Login with Google</button>
                        <button className="btn btn-info col-sm-6">Login with Facebook</button>
                    
                </div>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps,{googleLogin}) (Login);