import React from  'react'
import './Login.css';
import { Divider, Input, Button, Checkbox, message } from 'antd';
import { BankFilled ,LockFilled} from '@ant-design/icons';
import logo from '../images/dobcha_logo.png'
import {useDispatch} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios';



const Login=({history}) => {

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      }

      const [key, setKey] = React.useState('')
      const [key1, setKey1] = React.useState('')

      const handleLogin = () => {
          key === whiteList.id ? history.push('../homepage/Agency'): message.error('등록되지 않은 기관입니다.')
      } /* 이동 링크 바꾸기 로그인: 기관 로그인 시 나오는 페이지(Agency)*/
    const whiteList = {
        id:'test'
    } /* id는 임의로 적은 거라 백앤드 할 때 dB랑 연동해주세요~~*/
   

    const handleLogin2 = () => {
        key1 === whiteList2.id ? history.push('../homepage/Individual'): message.error('등록되지 않은 사용자입니다.')
    }/* 이동 링크 바꾸기 로그인: 로그인: 개인 로그인 시 나오는 페이지(Individual)*/

    const whiteList2 ={
        id: 'user1'
    }
     /* id는 임의로 적은 거라 백앤드 할 때 dB랑 연동해주세요~~😃 */
    
    return(
        <div className ='container'>
            <div className='loginWrapper'>
                <div className='top'>
                    {/* 로고 버튼 클릭 시 홈 화면으로 이동 */}
                    <Button style={{border:'none'}}
                    ><img src={logo} alt ="dobcha_logo" 
                    onClick ={( )=> {history.push('/')}}
                    /></Button>
                </div>
                <div className='middle'>
                    <div className='middle_left'>
                        <div className="title"> 기관 회원</div>
                        <div className="aa">
                        <div className="aa1">{<BankFilled />}</div>
                        <div className="aa2">
                        <Input placeholder="ID" 
                        onChange={(e) => {
                            setKey(e.target.value)
                        }}
                        className='keyBox1'
                        maxLength='10'
                        style={{padding: 10}}
                        />
                        </div>
                        </div>
                        <div className="bb">
                        <div className="bb1">{<LockFilled />}</div>
                        <div className="bb2">
                        <Input placeholder="PW" 
                        />
                        </div>
                        </div>

                        <div className="cc">   
                           
                            <a onClick={() => {history.push('/login/Finding_id')}} style={{color:'#000000'}}>
                                ID/PW 찾기
                            </a>
                        </div>
                        
                        <Button type='primary' disabled = {key?.length === 0} onClick={(handleLogin)}
                            style={{display:'flex',width: '300px', height: 'auto', justifyContent: 'center',marginTop:'10px', marginLeft: '20px'
                            , border:'none',borderRadius:'5px'}}> 로그인</Button>

                        <Button type='primary' onClick={() => {
                            history.push('/registration/Agency_R')}} 
                            style={{display:'flex',width: '300px', height: 'auto', justifyContent: 'center', marginLeft: '20px',marginTop:'8px'
                            , border:'none',borderRadius:'5px'}}> 기관 회원가입</Button>
                       
                        {/* 기관 버튼부분 링크 바꾸기!!
                        로그인: 기관 로그인 시 나오는 페이지(Agency)
                        회원가입: 기관 회원가입 페이지 (Agency_R) */}
                    
                    </div>
                  
                    <div className = 'middle_right'>
                    <div className='middle_left'>
                        <div className="title1"> 개인 회원</div>
                        <div className="aaa">
                        <div className="aaa1">{<BankFilled />}</div>
                        <div className="aaa2">
                        <Input placeholder="ID" 
                        onChange={(e) => {
                            setKey1(e.target.value)
                        }}
                        className='keyBox'
                        maxLength='10'
                        style={{padding: 10}}
                        />
                        </div>
                        </div>
                        <div className="bbb">
                        <div className="bbb1">{<LockFilled />}</div>
                        <div className="bbb2">
                        <Input placeholder="PW"
                        
                         />
                        </div>
                        </div>
                        <div className="ccc">
                            <a onClick={() => {history.push('/login/Finding_id')}} style={{color:'#000000'}}>
                                ID/PW 찾기
                            </a>
                        </div>
                        
                        <Button type='primary'  disabled = {key1?.length === 0} onClick={handleLogin2}
                            style={{display:'flex',width: '300px', height: 'auto', justifyContent: 'center',marginTop:'10px', marginLeft: '20px'
                            , border:'none',borderRadius:'5px'}}> 로그인</Button>

                        <Button type='primary' onClick={() => {
                            history.push('/registration/Individual_R')}} 
                            style={{display:'flex',width: '300px', height: 'auto', justifyContent: 'center',marginTop:'8px', marginLeft: '20px'
                            , border:'none',borderRadius:'5px'}}> 개인 회원가입</Button>
                       
                        {/* 개인 버튼부분 링크 바꾸기!!
                        로그인: 개인 로그인 시 나오는 페이지(Individual)
                        회원가입: 개인 회원가입 페이지 (Individual_R) */}
                            
                    </div>

                </div>

                </div>
                <div className="bottom">
                    <a herf = "#" style={{color:'#8c8c8c'}}>돕차 소개</a>
                    <Divider type="vertical"/>
                    <a herf = "#" style={{color:'#8c8c8c'}}>돕차 이용 약관</a>
                    <Divider type="vertical"/>
                    <a herf = "#" style={{color:'#8c8c8c'}}>개인정보 처리 방침 </a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  Dobcha ©2021
                    </div>
            </div>
        
        </div>
    )
}

export default withRouter (Login);