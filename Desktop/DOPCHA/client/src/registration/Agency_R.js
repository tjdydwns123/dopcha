
import ReactDOM from "react-dom";
import React, {useEffect, useState} from 'react'
import "antd/dist/antd.css";
import "./Agency_R.css";
import { Divider, Button } from "antd";
import { Form, Input, InputNumber, Select, Checkbox, AutoComplete } from 'antd';
import logo from '../images/dobcha_logo.png';
import FormItem from "antd/lib/form/FormItem";
import FormItemLabel from "antd/lib/form/FormItemLabel";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Route }  from 'react-router-dom'

const { options } = Select;


const Agency_R =({history}) => {
  
 
  const [form] = Form.useForm();
 
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.net', '.co.kr'].map((domain) => `${value}${domain}`));
    }
  };
  
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
    return(
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

                <div className="step1"><h2>회원 구분 선택</h2></div>
                    <Divider type="vertical"/>
                    <div className="step2"><h2 style={{color:'red'}}>회원 정보 입력</h2></div>
                    <Divider type="vertical"/>
                    <div className="step3"><h2>회원 가입 완료</h2></div>
                </div>
                <Divider />
                <div className="ag">
                <Form

                    form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                    xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}
                >
                <div className="form">
                    
                
                    <Form.Item
                            name="id"
                            label="아이디"
                            rules={[
                       
                        {
                            required: true,
                            message: '아이디를 입력하십시오',
                        },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                        <Form.Item
                            name="password"
                            label="비밀번호"
                            rules={[
                            {
                                required: true,
                                message: '비밀번호를 입력하시오.',
                            },
                            ]}
                            hasFeedback
                        >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="비밀번호 확인"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: '비밀번호 확인을 진행하십시오.',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('비밀번호가 일치하지 않습니다.'));
                            },
                        }),
                        ]}
                    >
                    <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="agencyName"
                        label="단체명"
                        rules={[
                        {
                            required: true,
                            message: '단체명을 입력하십시오',
                            whitespace: true,
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="ceoName"
                        label="대표자명"
                        rules={[
                        {
                            required: true,
                            message: '단체(기관)의 대표자명을 입력하십시오',
                            whitespace: true,
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="전화번호"
                        rules={[
                        {
                            required: true,
                            message: '전화번호를 입력하세요("-"없이 입력해주세요)',
                        },
                        ]}
                    >
                        <Input
                        style={{
                            width: '100%',
                        }}
                        />
                    </Form.Item>
                    <Form.Item
                        name="fax"
                        label="FAX"
                        rules={[
                        {
                            required: true,
                            message: '팩스번호를 입력하세요("-"없이 입력해주세요)',
                        },
                        ]}
                    >
                        <Input
                        style={{
                            width: '100%',
                        }}
                        />
                    </Form.Item>
                    <Form.Item
                            name="email"
                            label="E-Mail주소"
                            rules={[
                        {
                            type: 'email',
                            message: '이메일 주소를 입력하십시오',
                        },
                        {
                            required: true,
                            message: '이메일 주소를 입력하십시오',
                        },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="website"
                        label="Website"
                        rules={[
                        {
                            required: true,
                            message: '단체(법인) 사이트를 입력하세요',
                        },
                        ]}
                    >
                        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
                        <Input />
                        </AutoComplete>
                    </Form.Item>
                    
                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                        {
                            validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('이용약관에 동의해주십시오.')),
                        },
                        ]}
                    
                    >
                        <Checkbox>
                        <a href="">  Dobcha의 이용약관 및 개인정보 수집, 이용에 동의 </a>합니다.
                        </Checkbox>
                    </Form.Item>
                    
                    
                    <Form.Item >
                        < Button type="primary" htmlType="submit" >
                            가입하기
                    
                        </Button>
                    </Form.Item>
                    
                    
                    </div>
                   
            </Form>
            </div>
            </div>
           
            
        
        
            <div className="bottom">
                <a herf="#" style={{ color: "#8c8c8c" }}>
                    돕차 소개
                </a>
                <Divider type="vertical" />
                <a herf="#" style={{ color: "#8c8c8c" }}>
                    돕차 이용 약관
                </a>
                <Divider type="vertical" />
                <a herf="#" style={{ color: "#8c8c8c" }}>
                    개인정보 처리 방침
                </a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dobcha ©2021
            </div>
        
        </div>
            
                 
        
    );
    
}                 
export default Agency_R;
