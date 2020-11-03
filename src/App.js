import React from 'react';
import {useEffect,createContext,useReducer,useContext} from 'react';
import About from './components/About';

import secForm from './components/secform';
import aboutus from './components/aboutus';
import Header from './components/Header';

import {BrowserRouter,useHistory} from 'react-router-dom'
import Certificates, { certification } from './components/certification';
import Calculator from './components/Calculator';
import LoginCalculator from './components/logincalculator';

import {initialstate,reducer} from './userreducer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import secform from './components/secform';


export const usercontext=createContext()
const Routing=()=>{
  const history=useHistory() 
  const {state,dispatch}=useContext(usercontext)
  useEffect(()=>{
      const user=JSON.parse(localStorage.getItem("user"))
      const tdt=localStorage.getItem("tokendate")
      if(user&&tdt){
          let dt=new Date();
          let tdate=Date.parse(tdt)
          if(tdate<=dt){
              localStorage.clear();
              history.push('/')
          }else{
              dispatch({type:"USER",payload:user})
          }
      }
      else{
          history.push('/')
      }
  },[])

  return (
      <Switch>
      <Header/>
      <Route path='/HOME'>
              <about />
              </Route>
          <Route exact path='/CALCULATOR'>
              <Calculator/>
          </Route>
          <Route path='/LOGIN'>
              <secForm />
          </Route>
          <Route path='/APPRAISAL'>
              <Certificates />
          </Route>
          
          <Route path='/TEAM'>
              <aboutus />
          </Route>
          <Route path='/LOGINCAL'>
              <LoginCalculator />
          </Route>
          
      </Switch>
  )
}

function App() {
  const [state,dispatch]=useReducer(reducer,initialstate)
  return (
    <usercontext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <Header/>
      <div>
        <Switch>
          <Route exact path="/" component={About}></Route>
          <Route exact path="/HOME" component={About}></Route>
          
          <Route exact path="/LOGIN" component={secForm}></Route>
          <Route exact path="/CALCULATOR" component={Calculator}></Route>
          <Route exact path="/LOGINCAL" component={LoginCalculator}></Route>
          <Route exact path="/APPRAISAL" component={Certificates}></Route>
          <Route exact path="/TEAM" component={aboutus}></Route>
         
        </Switch>
      </div>
    </BrowserRouter>
    </usercontext.Provider>
  );
}

export default App;



