import './Agency_Registering.css';
import React, { useState,useRef,useMemo } from 'react';
import { Divider, DatePicker ,Button, InputNumber, Space,Input,Modal, Drawer, Upload, message} from 'antd';
import logo from '../images/dobcha_logo.png';
import { BankFilled,UploadOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import Editor from './EditorComponent';
import Editor2 from './EditorComponent2';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';



const Agency_Registering=({history}) =>{
    const [desc, setDesc] = useState('');
    function onEditorChange(value) {
        setDesc(value)
    }
    const [desc2, setDesc2] = useState('');
    function onEditorChange2(value) {
        setDesc2(value)
    }


    const { RangePicker } = DatePicker;

    const {TextArea} = Input;

    function onChange(value) {
        console.log('changed', value);
      }

    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
        defaultFileList: [
            {
              uid: '1',
              status: 'done',
              response: 'Server Error 500', // custom error message to show
              src: {logo}
            },] // png db에서 가져오는 식으로 코드 바꾸기 => 임의로 사진 설정
      };



    const getBase64=(img, callback) =>{
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
      const beforeUpload=(file) =>{
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
      }
      
     

        const handleChange = (info) =>{ 
           
            if (info.file.status === 'uploading') {
              this.setState({ loading: true });
              return;
            }
            if (info.file.status === 'done') {

              getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                  imageUrl,
                  loading: false,
                }),
              );
            
        }
          };
      


          const [visible, setVisible] = useState(false);
        const showDrawer = () => {
          setVisible(true);
        };
        const onClose = () => {
          setVisible(false);
        };
    

    const agencyname = '가나다라'
    //임의로 설정했습니다. 나중에 db에서 가져와주세요~~

    const [isModal, setIsModal] = React.useState(false);

    



    return(
        <div className='AR_frame'>
            <div className="registering_top">
                <Button style={{ border:'none'}}
                    ><img src={logo} alt ="dobcha_logo" 
                            onClick ={( )=> {history.push('../homepage/Agency')}}
                            /></Button>
                <div className='main_click'>
                
                <a onClick={() => {history.push('/homepage/Doing')}} 
                 style={{padding:'10px',marginRight:'50px',
                     color:'#000000' , fontSize:'17px', fontWeight:'bold' 
                }}> 진행중인 기부  {/* 진행중인 기부 페이지로 경로 바꾸기*/} </a>
                 
                <a onClick={() => {history.push('/homepage/Done')}} 
                 style={{padding:'10px', marginRight:'20px',marginLeft:'20px',
                     color:'#000000' , fontSize:'17px', fontWeight:'bold' 
                }}> 마감된 기부 {/* 마감된 기부 페이지로 경로 바꾸기*/} </a>
                </div>

                <div className='main_btn'>
                    <div className='agency_icon'  style={{marginTop:'12px', marginRight:'30px'}}>
                        {<BankFilled onClick={showDrawer}
                    style={{fontSize:'20px'}}/>
                    }  
                    
                    <Drawer title="Mypage" placement="right" onClose={onClose} visible={visible}
                    style={{fontWeight:'bold'}} 
                    >


                    <div style={{display:'flex', justifyContent:'center', marginLeft:'50px'}}>
                    
                        
                       <ImgCrop rotate>
                        <Upload {...handleChange}
                        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
       
       
         >
                     <BankFilled style={{fontSize:'40px', width:'100%'}}/> 
                        </Upload>
                        </ImgCrop>

                    </div>

                    

                        <div style={{display:'flex', justifyContent:'center'}}>
                        <text style={{color: 'black',fontSize:'15px',  fontWeight:'bold', marginTop:'10px'}}>
                    {`${agencyname} 님`}</text>
                    </div>

                        <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
                        <Button  type='primary' style={{ border:'none', borderRadius:'10px'}}
                        onClick ={( )=> {history.push('/homepage/Agency_registering')}} 
                        >글 등록하기</Button> </div>
                    </Drawer>



                    &nbsp;&nbsp;
                    <text style={{color: 'black',fontSize:'17px',  fontWeight:'bold'}}>
                    {`${agencyname} 님`}
                </text>

                    </div> 
                    <div style={{marginTop:'12px'}}>
                    <a onClick={() => setIsModal(true)} 
                    style={{fontSize:'17px', fontWeight:'bold'}}>&nbsp;&nbsp; 로그아웃</a>
                    </div>
                    <Modal
                visible={isModal}
                onCancel={() => setIsModal(false)}
                onOk={() => {
                    setIsModal(false)
                    history.push('/')
                }}
                title={'로그아웃'}
            >
                <div
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%'}}
                >
                    <h2>로그아웃을 하시겠습니까?</h2>
                </div>
            </Modal>
                </div>
                </div>

                <Divider/>



            <div className="registering_middle">
                <div classname="ar_text" style={{marginLeft:'75px',fontSize:'17px',marginBottom:'5px'}}>글 등록</div>
                <div className="table_box">
                <div className="table_boxT">
                <div className='table_BoxNtext' style={{alignContent:'center'}}>
                        제목
                        </div>
                        <Input placeholder=" " 
                        style={{width:'500px', height:'30px',marginLeft:'15px'}}
                        />
                </div>
                <div className="table_boxW">
                <div className='table_BoxWtext' style={{alignContent:'center', marginRight:'15px', marginLeft:'34px'}}>
                        내용
                        </div>
                        <Editor 
                        value={desc} onChange={onEditorChange} />
                        
                </div>
                <div className="table_boxUP">
                <div className='table_BoxUPtext' style={{alignContent:'center',marginRight:'15px', marginLeft:'9px'}}>
                        사용계획
                        </div>
                        <Editor2 
                        value={desc2} onChange={onEditorChange2} />
                        
                </div>
                <div className="table_boxM">
                <div className='table_BoxUPtext' style={{alignContent:'center'}}>
                        목표금액
                        </div>
                        <InputNumber
                            style={{width:'265px', height:'33px',marginLeft:'15px',marginRight:'261px'}}
                            defaultValue={10000000}
                            formatter={value => `₩ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            onChange={onChange}
                        />
                </div>
                <div className="table_boxD">
                <div className='table_BoxUPtext' style={{alignContent:'center'}}>
                        모금기간
                        </div>
                        <Space size={12} style={{marginLeft:'15px',marginRight:'260px'}}>
                        <RangePicker />
                        </Space>
                </div>




                <div className="regist_btn">
                <Upload {...props}>
                    <Button style={{display:'flex',width: '120px', marginLeft:'28px',height: '30px', justifyContent: 'center'
                    ,borderRadius:'5px', marginRight:'10px', marginTop:'20px'}} icon={<UploadOutlined style={{fontSize:"15px"
                    }}/>}> File Upload
                        </Button>
                </Upload>
          
                <Button block 
                    style={{display:'flex',width: '100px', height: '30px', justifyContent: 'center'
                    ,borderRadius:'5px', marginTop:'20px'}}
                    onClick={()=> {history.push('/homepage/Doing')}} 
                    >등록</Button> {/* 진행중인 기부로 경로 바꾸기 */}
                    </div>

                </div>



            </div>


            <div className="registering_bottom">
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


export default Agency_Registering;