import React from 'react';
import ReactDOM from 'react-dom';
import '../src/Styles/index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import {BrowserRouter,Switch,Route, Redirect} from 'react-router-dom'
import Login from '../src/Components/login'
import Header from './routes/Header'
import LoadingComponent from './Components/LoadingComponent'
import AuthenticationComponent from './Components/AuthenticationComponent'
import NoteDetail from './Components/noteDetail'
import NoteEdit from './Components/NoteEdit'
import './Styles/index.css'
// create redux store > reducers > actions > applyMiddleware
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


//provide the store to react

ReactDOM.render(<Provider store ={store}>
    <BrowserRouter>
     <LoadingComponent>
        <div>
            <Switch>
            <Route path="/Login" component={Login} exact={true}/>
                <Redirect from="/logout" to= "/" />
                <AuthenticationComponent>
                <Header/>
                <Route path="/:id/edit" component={NoteEdit} exact={true} />
                  <Route path="/:id" component={NoteDetail} exact={true} />
                  <Route path="/" component={App} exact={true}/>
                </AuthenticationComponent>
            </Switch>
        </div>
     </LoadingComponent>
    </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
