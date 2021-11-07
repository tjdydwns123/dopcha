import './App.css';
import { BrowserRouter as Router, Route }  from 'react-router-dom';
//import Landing from "./landing/Landing";
import Auth from './hoc/auth';
import Login from './login/Login';
import Main from './homepage/Main';
import Agency from './homepage/Agency';
import Agency_Registering from './homepage/Agency_Registering';
import Individual from './homepage/Individual';
import Individual_Detail from './homepage/Individual_Detail';
import Volunteer from './homepage/Volunteer';
import Finding_id from './login/Finding_id';
import Finding_id2 from './login/Finding_id2';
import Finding_pw from './login/Finding_pw';
import Finding_pw2 from './login/Finding_pw2';

import 'antd/dist/antd.css';
import {useEffect,useState} from 'react';
import axios from 'axios';

import Doing from "./homepage/Doing";
import Done from "./homepage/Done";
import CampaignDetail from "./homepage/CampaignDetail";
import Registration from "./registration/Registration";
import RegistrationForm from "./registration/RegistrationForm";
import RegistrationDone from "./registration/RegistrationDone";



const App = () => {
  // const callApi = async()=>{
  //   const reponse = await fetch('/api/main');
  //   const body = await reponse.json();
  //   if (reponse.status !==200) throw Error(body.message);}

  //   return body;
  //   axios.get("/api").then((res)=>console.log(res.data.test));
  // option
  // null : 아무나 출입 가능한 페이지
  // true : 로그인한 유저만 출입 가능한 페이지    /registration/agency /registration/individual
  // flase : 로그인한 유저는 출입 불가능한 페이지
  return(
    <>
    <Router>
      <Route path ='/' exact component = {Auth(Main,null)}/>
      <Route path ='/homepage/Agency' exact component = {Auth(Agency,true)}/>
      <Route path='/homepage/Agency_Registering' exact component={Auth(Agency_Registering,true)}/>
      <Route path ='/homepage/Individual' exact component = {Auth(Individual,true)}/>
      <Route path ='/homepage/Individual_Detail' exact component = {Auth(Individual_Detail,true)}/>
      <Route path ='/homepage/Volunteer' exact component = {Auth(Volunteer,null)}/>
      <Route path ='/login/Login' exact component = {Auth(Login,false)}/>
      <Route path ='/login/Finding_id' exact component = {Auth(Finding_id,false)}/>
      <Route path ='/login/Finding_id2' exact component = {Auth(Finding_id2,false)}/>
      <Route path='/login/Finding_pw' exact component = {Auth(Finding_pw,false)}/>
      <Route path='/login/Finding_pw2' exact component = {Auth(Finding_pw2,false)}/>
      <Route path='/registration/Registration' exact component = {Auth(Registration,false)} />
      <Route path="/homepage/Doing" exact component={Auth(Doing,null)} />
      <Route path="/homepage/Done" exact component={Auth(Done,null)} />
      <Route path="/campaign/:type/:id" exact component={Auth(CampaignDetail,null)} />
       {/* 기관, 개인 회원가입 모두 하나의 컴포넌트에서 처리합니다. 대신 URL의 type이라는 이름의 props로 회원가입 유형을 구분합니다. */}
       <Route path="/registration/:type" exact component={RegistrationForm} />
        {/* 위와 동일합니다 */}
        <Route
          path="/registration/done/:type"
          exact
          component={RegistrationDone} />
    </Router>
    </>
  )
  

// const App = () => {
//   const callApi = async()=>{
//     axios.get("/").then((res)=>console.log(res.data.test));
//     axios.get("/homepage/Agency").then((res)=>console.log(res.data.test));
//     axios.get("/homepage/Agency_Registering").then((res)=>console.log(res.data.test));
//     axios.get("/homepage/Individual").then((res)=>console.log(res.data.test));
//     axios.get("/homepage/Individual_Detail").then((res)=>console.log(res.data.test));
//     axios.get("/login/Login").then((res)=>console.log(res.data.test));
//     axios.get("/login/Finding_id").then((res)=>console.log(res.data.test));
//     axios.get("/login/Finding_id2").then((res)=>console.log(res.data.test));
//     axios.get("/login/Finding_pw").then((res)=>console.log(res.data.test));
//     axios.get("/login/Finding_pw2").then((res)=>console.log(res.data.test));
//     axios.get("/registration/Registration").then((res)=>console.log(res.data.test));
//     axios.get("/registration/AgencyForm").then((res)=>console.log(res.data.test));
//     axios.get("/registration/IndividualForm").then((res)=>console.log(res.data.test));
//     axios.get("/registration/RegistrationDone").then((res)=>console.log(res.data.test));

//     axios.get("/homepage/Doing").then((res)=>console.log(res.data.test));
//     axios.get("/homepage/Done").then((res)=>console.log(res.data.test));
//     axios.get("/homepage/CampaignDetail").then((res)=>console.log(res.data.test));
    
//   };

  // useEffect(()=>{
  //   callApi();
  // }, []);
  }
export default App;
