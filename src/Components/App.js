import React, {Component} from 'react';
//import firebase from '../firebase' 
//import { database } from '../firebase'
import _ from 'lodash'
import {connect} from 'react-redux'
import {getNotes, saveNotes, deleteNote} from '../actions/notesAction'
import NoteCard from '../Components/noteCard'
import {getUser} from '../actions/userAction'
import {Link} from 'react-router-dom'
class App extends Component {
  constructor(props) {
    super(props);
   // this.ref = firebase.firestore().collection('note');
    this.state = {
      title : '',
      body : '',
      notes: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderNotes = this.renderNotes.bind(this)
  }

  // componentDidMount() {
  //   // database.on('value', snapshot => {
  //   //   this.setState({ notes: snapshot.val() })
  //   // })
  //   this.props.getNotes();
  //   this.props.getUser();
  // }
// handle change
  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }
//handle submit
  handleSubmit(e){
    e.preventDefault();
    const note = {
      title: this.state.title,
      body: this.state.body,
      uid: this.props.user.uid
    }
    // database.push(note);
    this.props.saveNotes(note)
    // const { title, body } = this.state;

    // this.ref.add({
    //   title,
    //   body
    // }).then((docRef) => {
      this.setState({
        title: '',
        body: ''
      });
    //   this.props.history.push("/note")
    // })
    // .catch((error) => {
    //   console.error("Error adding document: ", error);
    // });
  }
  renderNotes() {
    return _.map(this.props.notes, (note,key) => {
      return (
        <NoteCard key={key}>
          <Link to={`/${key}`}>
           <h2>{note.title}</h2>
          </Link>
          <p>{note.body}</p>
          {note.uid === this.props.user.uid &&(
          <div>
          <button 
            className="btn btn-danger btn-xs"
            onClick={()=>this.props.deleteNote(key)}>Delete</button>
            <button 
            className="btn btn-info btn-xs pull-right"
            ><Link to={`/${key}/edit`}>Update</Link></button>
          </div>
          )}
            </NoteCard>
      )
    })
  }
  render(){
   // console.log(this.props.user)
  return (
    <div className="container-fluid">
      <div className ="row">
        <div className="col-sm-2 text-center">
          <img 
           src={this.props.user.photoURL}
           height="100px"
           className="img img-responsive circle"
           style={{padding:'20px'}}
          />
          <h4 className="username">Welcome back,<b>{this.props.user.displayName}</b></h4>
        </div>
        <div className="col-sm-10">
          <form onSubmit = {this.handleSubmit}>
            <div className="form-group">
              <input 
                     onChange = {this.handleChange}
                     value ={this.state.title}
                     type="text" 
                     name="title" 
                     className="form-control no-border"
                     placeholder="Title..." 
                     required/>
            </div>
            <div className="form-group">
              <textarea
                     onChange = {this.handleChange}
                     value={this.state.body}
                     type="text" 
                     name="body" 
                     className="form-control no-border"
                     placeholder="Body..." 
                     required/>
            </div>
            <div className="form-group">
              <button className="btn btn-primary col-sm-12">Save</button>
            </div>
          </form>
          <br/>
          <br/>
          <br/>
          {this.renderNotes()}
        </div>
      </div>
    </div>
  );
}
}

 function mapStateToProps (state, ownProps) {
  return {
    notes: state.notes,
    user: state.user
  }
}
export default connect(mapStateToProps, {getNotes, saveNotes, deleteNote, getUser}) (App);
