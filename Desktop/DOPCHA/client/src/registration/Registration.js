import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./Registration.css";
import {Divider, Button} from "antd";
import logo from '../images/dobcha_logo.png'

const Registration = ({history}) => {

    return (
        <div className='main_frame'>
            <div className='main_top'>
                <Button style={{ border:'none'}}
                    ><img src={logo} alt ="dobcha_logo" 
                            onClick ={( )=> {history.push('/')}}
                            /></Button>
                <div className='main_click'>
                
                <a onClick={() => {history.push('/')}} 
                 style={{padding:'10px',marginLeft:'20px',marginRight:'20px',
                     color:'#000000' , fontSize:'17px', fontWeight:'bold' 
                }}> 진행중인 기부  {/* 진행중인 기부 페이지로 경로 바꾸기*/} </a>

                 
                <a onClick={() => {history.push('/')}} 
                 style={{padding:'10px', marginRight:'20px',marginLeft:'20px',
                     color:'#000000' , fontSize:'17px', fontWeight:'bold' 
                }}> 마감된 기부 {/* 마감된 기부 페이지로 경로 바꾸기*/} </a>
                </div>

                <div className='main_btn'>
                    <Button block 
                    style={{display:'flex',width: '100px', height: '30px', justifyContent: 'center'
                    ,borderRadius:'5px', marginTop:'10px', marginRight:'15px'}}
                    onClick={()=> {history.push('/login/Login')}}
                    >로그인</Button>
                    <Button block 
                    style={{display:'flex',width: '100px', height: '30px', justifyContent: 'center'
                    ,borderRadius:'5px', marginTop:'10px'}}
                    onClick={()=> {history.push('/registration/Registration')}}
                    >회원가입 </Button>
                </div>
            </div>
            <Divider/> 

            <div className="content">
                <div className="step">
                    <div className="step1"><h2 style={{color:'red'}}>회원 구분 선택</h2></div>
                    <Divider type="vertical"/>
                    <div className="step2"><h2>회원 정보 입력</h2></div>
                    <Divider type="vertical"/>
                    <div className="step3"><h2>회원 가입 완료</h2></div>
                </div>
            <Divider/>
            
            <div className="ag">
                <div className="in">
                <Button style={{
                      width: '300px',
                      height: '100px'
                    }}>
                        <a
                            onClick={() => {
                                history.push("/registration/Agency_R");
                            }}>
                            <h1>기관 회원가입 하기</h1></a>
                    </Button>        
             <Divider />
                    <Button style={{
                      width: '300px',
                      height: '100px'
                    }}>
                        <a
                            onClick={() => {
                                history.push("/registration/Individual_R");
                            }}>
                            <h1>개인 회원가입 하기</h1></a>

                    </Button>
                </div>
            </div>
            </div>
            
            <div className="bottom">
                <a herf="#" style={{
                    color: "#8c8c8c"
                }}>
                돕차 소개
            </a>
            <Divider type="vertical"/>
            <a herf="#" style={{
                    color: "#8c8c8c"
                }}>
                돕차 이용 약관
            </a>
            <Divider type="vertical"/>
            <a herf="#" style={{
                    color: "#8c8c8c"
                }}>
                개인정보 처리 방침 
            </a >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dobcha ©2021

            </div>
        </div>
    )
}

export default Registration;
