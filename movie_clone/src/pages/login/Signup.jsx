import styled from "styled-components";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import axios from "axios";

export default function Signup() {
  const schema = yup.object().shape({
    email: yup.string().email("이메일 형식을 맞춰주세요.").required("이메일을 입력해주세요."),
    password: yup.string().min(8, "비밀번호는 8자 이상이어야 합니다.").max(16, "비밀번호는 16자 이하여야 합니다.").required("비밀번호를 입력해주세요."),
    passwordCheck: yup.string().oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.").required("비밀번호를 다시 입력해주세요."),
  })

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    await axios.post("http://localhost:3000/auth/register", {
      email: data.email,
      password: data.password,
      passwordCheck: data.passwordCheck,
    })
    console.log("회원가입 완료");
  }

  return (
    <div style={{textAlign: "center", marginTop: "15vh"}}>
      <div style={{fontSize: 30, fontWeight: "700", color: "white", marginBottom: "5vh"}}>회원가입</div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input placeholder="이메일을 입력해주세요" type={"email"} {...register("email")}/>
        <ErrorMsg> {errors.email?.message}</ErrorMsg>

        <Input placeholder="비밀번호를 입력해주세요" type={"password"} {...register("password")}/>
        <ErrorMsg> {errors.password?.message}</ErrorMsg>

        <Input placeholder="비밀번호를 다시 입력해주세요" type={"password"} {...register("passwordCheck")}/>
        <ErrorMsg> {errors.passwordCheck?.message}</ErrorMsg>

        <Submit type={"submit"} value={"회원가입"}/>
      </form>
    </div>
  )
}

const Input = styled.input`
    width: 350px;
    height: 30px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 10px;
    outline: none;
`

const ErrorMsg = styled.div`
    min-height: 20px;
    color: red;
    margin-top: 10px;
`

const Submit = styled.input`
    all: unset;
    width: 350px;
    height: 50px;
    padding: 5px;
    border-radius: 10px;
    outline: none;
    border: none;
    background-color: #BB3D57;
    color: #fff;
    cursor: pointer;
`