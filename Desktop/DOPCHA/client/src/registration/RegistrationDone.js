import RegistrationProgress from "./RegistrationProgress";
import "antd/dist/antd.css";
import "./RegistrationDone.css";
import logo from "../images/dobcha_logo.png";
import { Divider, Button } from "antd";

const RegistrationDone = ({
  history,
  match: {
    params: { type },
  },
}) => {
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
            {" "}
            진행중인 기부 {/* 진행중인 기부 페이지로 경로 바꾸기*/}{" "}
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
            {" "}
            마감된 기부 {/* 마감된 기부 페이지로 경로 바꾸기*/}{" "}
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
        <RegistrationProgress progress="3" />

        <Divider />

        <div className="ag">
          <div className="in">
            <h1 align-content="center">회원 가입 완료! </h1>
            <h3 align-content="center">
              {type === "agency" ? (
                <div>
                  기업 회원의 경우 가입 승인까지 최대{" "}
                  <span className="in-emphasize">14일</span>이 소요될 수
                  있습니다.
                  <br />
                  <span className="in-emphasize">
                    서류가 기준에 맞지 않을경우 승인이 취소될 수 있습니다.
                  </span>
                </div>
              ) : (
                <div>
                  돕차에 가입이 완료되었습니다.
                  <br />
                  지금 바로 기부에 동참해주세요.
                </div>
              )}
            </h3>
            <Button
              onClick={() => {
                history.push("/login/Login");
              }}
              style={{ marginTop: "20px" }}
            >
              로그인하러가기
            </Button>
          </div>
        </div>
      </div>

      <div className="bottom">
        <a
          herf="#"
          style={{
            color: "#8c8c8c",
          }}
        >
          돕차 소개
        </a>
        <Divider type="vertical" />
        <a
          herf="#"
          style={{
            color: "#8c8c8c",
          }}
        >
          돕차 이용 약관
        </a>
        <Divider type="vertical" />
        <a
          herf="#"
          style={{
            color: "#8c8c8c",
          }}
        >
          개인정보 처리 방침
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dobcha ©2021
      </div>
    </div>
  );
};
export default RegistrationDone;
