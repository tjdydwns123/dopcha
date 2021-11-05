import React from 'react'
import './Finding_pw2.css';
import { Divider, Input, Button,Menu, Dropdown} from 'antd';
import logo from '../images/dobcha_logo.png';
import axios from 'axios';


const Finding_pw2=({history}) => {

   

    return(
        <div className='frame4'>
            <div className='top5'>
            <Button style={{ border:'none'}}
                ><img src={logo} alt ="dobcha_logo" 
                        onClick ={( )=> {history.push('/')}}
                        /></Button>
                    <div className='click3'>
                    <a onClick={() => {history.push('/')}} 
                 style={{padding:'10px',marginRight:'50px',
                     color:'#000000' , fontSize:'17px', fontWeight:'bold' 
                }}> 진행중인 기부  {/* 진행중인 기부 페이지로 경로 바꾸기*/} </a>

                 
                <a onClick={() => {history.push('/')}} 
                 style={{padding:'10px', marginRight:'20px',marginLeft:'20px',
                     color:'#000000' , fontSize:'17px', fontWeight:'bold' 
                }}> 마감된 기부 {/* 마감된 기부 페이지로 경로 바꾸기*/} </a>
                                </div>

                <div className='btn3'>
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



            <div className='middle5'>
            계정 정보 찾기 

                <div className='middle_IP4'>
                <a onClick={() => {history.push('./Finding_id')}}
                    style={{color:'black'}} >아이디 찾기</a>
                        <Divider type="vertical" style={{marginTop:'5px'}}/>
                    <a onClick={() => {history.push('./Finding_pw')}}
                    style={{color:'red'}}>비밀번호 찾기</a>
                </div>

                <div className='middle_Box4'>
                    <div className='middle_BoxH3'>
                        재설정할 비밀번호를 입력해 주세요.
                    </div>

                    <div className='virtual_Box3'>
                        <div className='middle_BoxP'>
                            비밀번호
                            <Input placeholder=" " 
                            style={{width:'350px', height:'30px', marginLeft:'35px'}}
                            />
                        </div>
                        <div className='middle_BoxPC'>
                            <div className='middle_BoxPCtext' style={{marginRight:'9px'}}>
                            비밀번호 확인
                            </div>
                            <Input placeholder=" " 
                            style={{width:'350px', height:'30px'}}
                            />
                        </div>
                    </div>

                    <div className='middle_BoxB4'>
                        <Button block
                        onClick={()=> {history.push('./Login')}}
                                style={{display:'flex',width: '130px', height: '30px', justifyContent: 'center'
                                , marginLeft:'70px'}}
                                >로그인 하러 가기</Button>
                    </div>


                </div>






            </div>



            <div className='bottom5'>
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

export default Finding_pw2;