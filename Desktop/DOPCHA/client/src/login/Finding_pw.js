import React from 'react'
import './Finding_pw.css';
import { Divider, Input, Button , Dropdown, Menu} from 'antd';
import logo from '../images/dobcha_logo.png'
import axios from 'axios';


const Finding_pw=({history}) => {


   


    return(
        <div className='frame3'>
            <div className='top4'>
            <Button style={{ border:'none'}}
                ><img src={logo} alt ="dobcha_logo" 
                        onClick ={( )=> {history.push('/')}}
                        /></Button>
                 <div className='click2'>
                 <a onClick={() => {history.push('/')}} 
                 style={{padding:'10px',marginRight:'50px',
                     color:'#000000' , fontSize:'17px', fontWeight:'bold' 
                }}> 진행중인 기부  {/* 진행중인 기부 페이지로 경로 바꾸기*/} </a>
                 
                <a onClick={() => {history.push('/')}} 
                 style={{padding:'10px', marginRight:'20px',marginLeft:'20px',
                     color:'#000000' , fontSize:'17px', fontWeight:'bold' 
                }}> 마감된 기부 {/* 마감된 기부 페이지로 경로 바꾸기*/} </a>
                                </div>
                                <div className='btn2'>
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
  

            <div className='middle4'>
            계정 정보 찾기 

            <div className='middle_IP3'>
                    <a onClick={() => {history.push('./Finding_id')}}
                    style={{color:'black'}} >아이디 찾기</a>
                        <Divider type="vertical" style={{marginTop:'5px'}}/>
                    <a onClick={() => {history.push('./Finding_pw')}}
                    style={{color:'red'}}>비밀번호 찾기</a>
                </div>
                <div className='middle_Box3'>
                    <div className='middle_BoxH2'>
                        당신의 이름과 아이디를 입력해주세요.
                    </div>
                    <div className='virtual_Box2'>

                    <div className='middle_BoxN2'>
                        이름
                        <Input placeholder=" " 
                        style={{width:'350px', height:'30px', marginLeft:'15px'}}
                        />
                    </div>

                    <div className='middle_BoxI'>
                        <div className='middle_BoxItext' style={{marginRight:'8px'}}>
                        아이디
                        </div>
                        <Input placeholder=" " 
                        style={{width:'350px', height:'30px'}}
                        />
                    </div>
                    </div>
                    

                    <div className='middle_BoxB3'>
                    <Button block
                    onClick={()=> {history.push('./Finding_pw2')}}
                            style={{display:'flex',width: '100px', height: '30px', justifyContent: 'center'
                            , marginLeft:'15px'}}
                            >확인</Button>
                    </div>
                    
                </div>
            </div>


            <div className='bottom4'>
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

export default Finding_pw;