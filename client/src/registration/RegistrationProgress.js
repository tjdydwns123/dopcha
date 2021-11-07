import "./RegistrationProgress.css";

const RegistrationProgress = ({ progress }) => {
  return (
    <div className="registration_progress">
      <div
        className={`registration_progress__step ${
          progress === "1" ? "active" : ""
        }`}
      >
        <div>Step 1.</div>
        <div>회원 구분 선택</div>
      </div>

      <div
        className={`
          registration_progress__step
          ${progress === "2" ? "active" : ""}
        `}
      >
        <div>Step 2.</div>
        <div>회원 정보 입력</div>
      </div>

      <div
        className={`
          registration_progress__step
          ${progress === "3" ? "active" : ""}
        `}
      >
        <div>Step 3.</div>
        <div>회원 가입 완료</div>
      </div>
    </div>
  );
};

export default RegistrationProgress;
