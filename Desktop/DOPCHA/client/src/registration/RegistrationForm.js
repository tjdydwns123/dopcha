import { useState } from "react";
import { Form, Divider, Button } from "antd";
import RegistrationProgress from "./RegistrationProgress";
import AgencyForm from "./AgencyForm";
import IndividualForm from "./IndividualForm";
import logo from "../images/dobcha_logo.png";
import "./RegistrationForm.css";

const Registration_Form = ({
  history,
  match: {
    params: { type },
  },
}) => {
  // console.log(type);
  const [form] = Form.useForm();

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onEmailChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        ["@naver.com", "@google.com", "@daum.net"].map(
          (domain) => `${value}${domain}`
        )
      );
    }
  };

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".net", ".co.kr"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const emailOptions = autoCompleteResult.map((email) => ({
    label: email,
    value: email,
  }));

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="main_frame">
      <div className="main_top">
        <Button style={{ border: "none" }}>
          <img
            src={logo}
            alt="dobcha_logo"
            onClick={() => {
              history.push("/");
            }}
          />
        </Button>
        <div className="main_click">
          <a
            onClick={() => {
              history.push("/homepage/Doing");
            }}
            style={{
              padding: "10px",
              marginLeft: "20px",
              marginRight: "20px",
              color: "#000000",
              fontSize: "17px",
              fontWeight: "bold",
            }}
          >
            진행중인 기부 {/* 진행중인 기부 페이지로 경로 바꾸기*/}
          </a>

          <a
            onClick={() => {
              history.push("/homepage/Done");
            }}
            style={{
              padding: "10px",
              marginRight: "20px",
              marginLeft: "20px",
              color: "#000000",
              fontSize: "17px",
              fontWeight: "bold",
            }}
          >
            마감된 기부 {/* 마감된 기부 페이지로 경로 바꾸기*/}
          </a>
        </div>

        <div className="main_btn">
          <Button
            block
            style={{
              display: "flex",
              width: "100px",
              height: "30px",
              justifyContent: "center",
              borderRadius: "5px",
              marginTop: "10px",
              marginRight: "15px",
            }}
            onClick={() => {
              history.push("/login/Login");
            }}
          >
            로그인
          </Button>
          <Button
            block
            style={{
              display: "flex",
              width: "100px",
              height: "30px",
              justifyContent: "center",
              borderRadius: "5px",
              marginTop: "10px",
            }}
            onClick={() => {
              history.push("/registration/Registration");
            }}
          >
            회원가입{" "}
          </Button>
        </div>
      </div>
      <Divider />

      <div className="content">
        <RegistrationProgress progress="2" />

        <Divider />

        {type === "agency" ? (
          <AgencyForm
            form={form}
            onFinish={onFinish}
            websiteOptions={websiteOptions}
            onWebsiteChange={onWebsiteChange}
          />
        ) : (
          <IndividualForm
            form={form}
            emailOptions={emailOptions}
            onFinish={onFinish}
            onEmailChange={onEmailChange}
          />
        )}
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
        </a>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dobcha ©2021
      </div>
    </div>
  );
};
export default Registration_Form;
