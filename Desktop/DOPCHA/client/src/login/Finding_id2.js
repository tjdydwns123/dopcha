import React from 'react'
import './Finding_id2.css';
import { Divider, Input, Button, Dropdown, Menu} from 'antd';
import logo from '../images/dobcha_logo.png'
import axios from 'axios';



const Finding_id2=({history}) => {
    

    return(
        <div className='frame2'>
            <div className='top3'>
            <Button style={{ border:'none'}}
                ><img src={logo} alt ="dobcha_logo" 
                        onClick ={( )=> {history.push('/')}}
                        /></Button>
                    <div className='click1'>
                    <a onClick={() => {history.push('/')}} 
                 style={{padding:'10px',marginRight:'50px',
                     color:'#000000' , fontSize:'17px', fontWeight:'bold' 
                }}> 진행중인 기부  {/* 진행중인 기부 페이지로 경로 바꾸기*/} </a>
                 
                <a onClick={() => {history.push('/')}} 
                 style={{padding:'10px', marginRight:'20px',marginLeft:'20px',
                     color:'#000000' , fontSize:'17px', fontWeight:'bold' 
                }}> 마감된 기부 {/* 마감된 기부 페이지로 경로 바꾸기*/} </a>
                                </div>
                                <div className='btn1'>
                <Button block 
                style={{display:'flex',width: '100px', height: '30px', justifyContent: 'center'
                ,borderRadius:'5px', marginTop:'15px', marginRight:'15px'}}
                onClick={()=> {history.push('/login/Login')}}
                >로그인</Button>
                <Button block 
                style={{display:'flex',width: '100px', height: '30px', justifyContent: 'center'
                ,borderRadius:'5px', marginTop:'15px'}}
                onClick={()=> {history.push('/registration/Registration')}}
                >회원가입 </Button>{/* 회원가입 페이지로 경로 바꾸기*/}
                </div>
            </div>

            <Divider/>

            <div className='middle3'>
            계정 정보 찾기 

            <div className='middle_IP2'>
                <a onClick={() => {history.push('./Finding_id')}}
                style={{color:'red'}} >아이디 찾기</a>
                    <Divider type="vertical" style={{marginTop:'5px'}}/>
                <a onClick={() => {history.push('./Finding_pw')}}
                style={{color:'black'}}>비밀번호 찾기</a>
            </div>

            <div className='middle_Box2' >
                <div className='text1'>
                당신의 아이디는 <br/>  </div>
                <div className='text2'>
                {/*아이디 &nbsp;*/} 
                <Input type='text' placeholder=" "style={{width:'300px', height:'33px'}} />
                &nbsp; 입니다. {/*  DB연동이 완료되면 input 받지 말고 텍스트만 뜨게끔 바꾸기   */} 
                </div>
                <div className='middle_BoxB2'>
                <Button type = "bold"
                    onClick={()=> {history.push('./Login')}}
                            style={{display:'flex',width: '130px', height: '30px', justifyContent: 'center'
                            , marginLeft:'15px'}}
                            >  로그인 하러 가기 </Button>
                </div>

            </div>


            </div>




            <div className='bottom3'>
            <a herf = "#" style={{color:'#8c8c8c'}}>돕차 소개</a>
                    <Divider type="vertical"/>
                    <a herf = "#" style={{color:'#8c8c8c'}}>돕차 이용 약관</a>
                    <Divider type="vertical"/>
                    <a herf = "#" style={{color:'#8c8c8c'}}>개인정보 처리 방침 </a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  Dobcha ©2021

            </div>
        </div>
    )





}



export default Finding_id2;