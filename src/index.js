import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/about" component={About} />
        </Switch>
    </Router>
    , document.getElementById('root'));