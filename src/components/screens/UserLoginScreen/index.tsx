import { useState } from "react";
import rocket from "../../../assets/register/rocket.gif";
import bascket from "../../../assets/register/bascket.gif";
import { StyledCard } from "../../atoms/card/index";
import { Button } from "../../atoms/button/index";
import { Input } from "../../atoms/input/index";
import axios from "axios";
import styled from "styled-components";
import {validateEmail} from "../../../ustils/validation";

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
const StyledBascket = styled.img`
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
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/users/login`, {
        email,
        password,
      });
      if (response.status === 200) {
        console.log("login successful:", response);
      } else {
        console.error("login failed:", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <StyledWrapper>
      <ImagesWrapper>
        <StyledImage src={rocket} />
        <StyledBascket src={bascket} />
      </ImagesWrapper>
      <StyledCard>
        <Input
          label="Email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value )}
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
        <Button disabled={!validateEmail(email)||password.length<6} size="small" onClick={handleSubmit} text="Log In" />
      </StyledCard>
    </StyledWrapper>
  );
}

export default SignupForm;
