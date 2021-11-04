import './App.css';
import { BrowserRouter as Router, Route }  from 'react-router-dom';
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
import Registration from './registration/Registration'
import Agency_R from './registration/Agency_R';
import Individual_R from './registration/Individual_R';
import R_Done from './registration/R_Done';

import 'antd/dist/antd.css';


const App = () => {
  return(
    <>
    <Router>
      <Route path ='/' exact component = {Main}/>
      <Route path ='/hompage/Agency' exact component = {Agency}/>
     <Route path='/hompage/Agency_Registering' exact component={Agency_Registering}/>
      <Route path ='/hompage/Individual' exact component = {Individual}/>
      <Route path ='/hompage/Individual_Detail' exact component = {Individual_Detail}/>
      <Route path ='/hompage/Volunteer' exact component = {Volunteer}/>
      <Route path ='/login/Login' exact component = {Login}/>
      <Route path ='/login/Finding_id' exact component = {Finding_id}/>
      <Route path ='/login/Finding_id2' exact component = {Finding_id2}/>
      <Route path='/login/Finding_pw' exact component = {Finding_pw}/>
      <Route path='/login/Finding_pw2' exact component = {Finding_pw2}/>
      <Route path='/registration/Registration' exact component = {Registration} />
      <Route path='/registration/Agency_R' exact component = {Agency_R} />
      <Route path='/registration/Individual_R' exact component = {Individual_R} />
      <Route path='/registration/R_Done' exact component = {R_Done}/>

    </Router>
    </>
  )
}

export default App;
