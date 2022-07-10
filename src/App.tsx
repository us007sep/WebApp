import React, { useContext } from 'react';
import { Routes } from 'react-router';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import MyButton from './MyButton';
import RouteA from './RouteA';
import SimpleState from './SimpleState';
import Notes from './Notes';
import UseEffectOnce from './UseEffectOnce';
import UseEffectMultiple from './UseEffectMultiple';
import DisplayPerson from './DisplayPerson';
import UseRef from './useRef';
import WriteContext from './WriteContext';
import {Store}  from './AppState';
import { Provider } from 'react-redux';
import WriteReducer from './WriteReducer';
import UserReducerUI from './UserReducerUI';
import ReactHookFormsUI from './ReactHookFormsUI';
import MaterialUI from './MaterialUI';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import './FireBaseSetup';
import { UserContext }  from './UserContext';
import Profile from './Profile';
import DPChange from './ChangeDP';
import PasswordChange from './ChangePassword';

export default function App() {
  const userCont = useContext(UserContext);
  const UserExist = userCont && userCont.uid;
  return (
    <Provider store={Store}>
    <BrowserRouter>
    

      <Routes>
      
      <Route path='/RouteA/:name' element = {<RouteA/>} />  

      {/* 
        Colon is used to insert a varaible into url        
        It can be imported using useParams and then can be used
      */}
      
      <Route path='/Submit' element = {<MyButton label='Submit' onclick={()=> alert("Submit Button is invoked")}/>} />
      <Route path='/Reset' element = {<MyButton label='Reset' onclick={()=> alert("Reset Button is invoked")}/>} />
      
      {/* States Tutorial */}
      <Route path='/SimpleState' element = {<SimpleState/>} />
      <Route path='/Notes' element = {<Notes/>} />

      {/* UseEffect Tutorial */}
      <Route path='/UseEffectOnce' element = {<UseEffectOnce/>} />
      <Route path='/UseEffectMultiple' element = {<UseEffectMultiple/>} />

      <Route path='/DisplayPerson' element={<DisplayPerson/>} />

      <Route path='/UseRef' element={<UseRef/>} />

      <Route path='/UseContext' element={<WriteContext/>}/>

      <Route path='/WriteReducer' element={<WriteReducer/>}/>

      <Route path='/UserReducer' element={<UserReducerUI/>}/>
      
      <Route path="/ReactHookForms" element={<ReactHookFormsUI/>}/>

      <Route path="/MaterialUI" element={<MaterialUI/>}/>

      {!UserExist&&<Route path="/SignUp" element={<SignUp/>}/>}
      {!UserExist&&<Route path="/Login" element={<Login/>}/>}
      <Route path="/Home" element={<Home/>}/>
      <Route path="*" element={<Home/>}/>     
      {UserExist && <Route path="/Profile" element={<Profile/>}/>}

      <Route path="/DPChange" element={<DPChange/>}/>
      <Route path="/PasswordChange" element={<PasswordChange/>}/>

      </Routes>
    </BrowserRouter>
    </Provider>
    );
}

// For any random paths we use * in paths as in line number 65 while calling home

function SubmitOnClick(){
  alert("Submit Button is invoked");
}