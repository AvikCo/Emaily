import React,{useEffect} from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Dashboard from './Dashboard';
import Header from './Header';
import Landing from './Landing';
import SurveyNew from './surveys/SurveyNew';



const App = (props) => {
  useEffect(() =>{
    props.fetchUser();
  },[])


return (
    <div className="container">
          <BrowserRouter>
            <div>
            <Header/>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/surveys" component={Dashboard}/>
                <Route path="/surveys/new" component={SurveyNew}/>
            </div>
          </BrowserRouter>
    </div>
    )
}


export default connect(null, actions)(App);