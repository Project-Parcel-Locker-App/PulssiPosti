import { useState } from "react";
import rocket from "../../../assets/register/rocket.gif";
import { StyledCard } from "../../atoms/card/index";
import { Button } from "../../atoms/button/index";
import UserRegisterScreen from "../UserRegisterScreen/index";
import { Input } from "../../atoms/input/index";
import styled from "styled-components";
import { validateEmail } from "../../../ustils/validation";
import { useNavigate } from "react-router-dom";
import bascket from "../../../assets/register/data.json";
import Lottie from "react-lottie";
import axios from "axios";
import SocialA from "../../../assets/social/A.png";
import SocialF from "../../../assets/social/F.png";
import SocialG from "../../../assets/social/G.png";
import { toast } from 'react-toastify';

const StyledWrapper = styled.div`
  padding-top: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1120px;
  height: 967px;
  margin: auto;
  @media only screen and (max-width: 744px) {
    padding-top: 72px;
    flex-direction: column-reverse;
    height: 1104px;
    width: 100vw;
    align-items: center;
  }
`;
const StyledImage = styled.img`
  width: 480px;
  height: 272px;
`;
const StyledBascket = styled.div`
  width: 650px;
  height: 415px;
  @media only screen and (max-width: 744px) {
    display: none;
  }
`;

const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #bd054a50;
  position: relative;
`;

const LineText = styled.div`
  width: 128px;
  background-color: rgb(255, 242, 247);;
  position: relative;
  color: black;
  font-size: 12px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
`;
const SocialWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 36px;
  margin-bottom: 54px;
  & img{
    margin-left: 8px;
    margin-right: 8px;
  }
`;
function SignupForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [registerModal, setRegisterModal] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/auth/login`,
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        localStorage.setItem("Authorization", response.data._access_token_);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data._access_token_}`;
        navigate("/dashboard");
      } else {
        // console.error("Login failed:", data.error);
      }
    } catch (error) {
      toast(error?.response.data.message)
      console.error("Error:", error);
    }
  };


  const BascketOptions = {
    loop: true,
    autoplay: true,
    animationData: bascket,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <StyledWrapper>
      <ImagesWrapper>
        <StyledImage src={rocket} />
        <StyledBascket>
          <Lottie options={BascketOptions} isStopped={false} isPaused={false} />
        </StyledBascket>
      </ImagesWrapper>
      <StyledCard>
        <Input
          label="User Name"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        // validation=""
        />
        <div style={{ height: "8px" }}></div>
        <Input
          label="Password"
          placeholder="Enter Your Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{ height: "24px" }}></div>
        <Button
          disabled={!validateEmail(email) || password.length < 6}
          size="small"
          onClick={handleSubmit}
          text="Log In"
        />
        <div style={{ marginTop: "10px", fontSize: '12px', color: '#bd054a' }}>Forget your account?</div>
        <div style={{ height: "58px" }}></div>
        <Line>
          <LineText>Or Sign Up Using</LineText>
        </Line>
        <SocialWrapper>
          <img src={SocialA} />
          <img src={SocialF} />
          <img src={SocialG} />
        </SocialWrapper>
        <Button
          size="medium"
          onClick={() => setRegisterModal(true)}
          text="Create new account"
        />
        <UserRegisterScreen
          registerModal={registerModal}
          setRegisterModal={setRegisterModal}
        />
      </StyledCard>
    </StyledWrapper>
  );
}

export default SignupForm;
