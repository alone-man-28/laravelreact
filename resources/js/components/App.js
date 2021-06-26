import React from 'react';
import ReactDOM from 'react-dom';
import { 
    //BrowserRouter as Router, 
    HashRouter as Router,
    Route, 
    Switch } from 'react-router-dom';

import NavBar from './NavBar'
import About from './About'
import User from './User'
import Top from './Top'
import UserEdit from './UserEdit'
import UserEditDone from './UserEditDone'
import UserDetail from './UserDetail'
import UserDelete from './UserDelete'

function App() {
    return (
    <Router>
        <div>
            <NavBar />
            <Switch>
                <Route path="/top" exact component={Top} />
                <Route path="/about" component={About} />
                <Route path="/user" exact component={User} />
                <Route path="/user/editdone/:id"  component={UserEditDone} />
                <Route path="/user/edit/:id"  component={UserEdit} />
                <Route path="/user/delete/:id"  component={UserDelete} />
                <Route path="/user/:id" component={UserDetail} />
            </Switch>
        </div>
    </Router>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}