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

function SignupForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [registerModal, setRegisterModal] = useState<boolean>(false);

  // const handleSubmit = async () => {
  //   try {
  //     const response = await axios.post(
  //       `http://localhost:3000/api/auth/login`,
  //       {
  //         email,
  //         password,
  //       }

  //     );
  //     console.log("refresh_token", response);

  //     if (response.status === 200) {
  //       localStorage.setItem("Authorization", response.data._access_token_);

  //       axios.defaults.headers.common['Authorization'] = `Bearer ${response.data._access_token_}`;
  //       navigate("/dashboard");
  //     } else {
  //       // console.error("Login failed:", data.error);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/auth/login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        localStorage.setItem("jwtToken", data._access_token_);
        navigate("/dashboard");
      } else {
        console.error("Login failed:", data.error);
      }
    } catch (error) {
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
