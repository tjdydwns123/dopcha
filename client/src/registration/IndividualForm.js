import { Form, Input, Checkbox, AutoComplete, Button } from "antd";
import "./IndividualForm.css";

const IndividualForm = ({ form, emailOptions, onFinish, onEmailChange }) => {
  return (
    <Form
      form={form}
      className="individual_form"
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <div className="id_form">
        <Form.Item
          name="id"
          label="아이디"
          hasFeedback
          rules={[
            {
              required: true,
              message: "아이디를 입력하십시오",
            },
          ]}
        >
          <Input placeholder="4~12자의 영어 혹은 숫자" />
        </Form.Item>
        <Button type="primary">중복 확인</Button>
      </div>

      <Form.Item
        name="password"
        label="비밀번호"
        rules={[
          {
            required: true,
            message: "비밀번호를 입력하십시오",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="비밀번호 확인"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "비밀번호 체크",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="userName"
        label="이름"
        rules={[
          {
            required: true,
            message: "이름을 입력하십시오",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="휴대폰번호"
        rules={[
          {
            required: true,
            message: '휴대폰번호를 입력하세요("-"없이 입력해주세요)',
          },
        ]}
      >
        <Input placeholder={`휴대폰번호를 입력하세요("-"없이 입력해주세요)`} />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-Mail주소"
        rules={[
          {
            type: "email",
            message: "이메일 주소를 입력하십시오",
          },
          {
            required: true,
            message: "이메일 주소를 입력하십시오",
          },
        ]}
      >
        <AutoComplete
          options={emailOptions}
          onChange={onEmailChange}
          placeholder="email"
        >
          <Input />
        </AutoComplete>
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("이용약관에 동의해주십시오.")),
          },
        ]}
      >
        <Checkbox>
          <a href=""> Dobcha의 이용약관 및 개인정보 수집, 이용에 동의 </a>
          합니다.
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          가입하기
        </Button>
      </Form.Item>
    </Form>
  );
};

export default IndividualForm;
