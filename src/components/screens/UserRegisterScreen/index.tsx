import { useState } from "react";
import { Input } from "../../atoms/input/index";
import { Modal } from "../../atoms/modal/index";
import { Button } from "../../atoms/button/index";
import { validateEmail } from "../../../ustils/validation";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface IProps {
  registerModal: boolean;
  setRegisterModal: (value: boolean) => void;
}
function SignupForm({ registerModal, setRegisterModal }: IProps) {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [addressLine1, setAddressLine1] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  const toggleRegisterModal = () => {
    setRegisterModal(!registerModal);
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/users/register`,
        {
          password,
          firstName,
          lastName,
          email,
          phoneNumber,
          userRole: 'consumer',
          street: addressLine1,
          zipCode,
          city,
          country,
        }

      );
      if (response.status === 200) {
        localStorage.setItem("Authorization", response.data._access_token_);

        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data._access_token_}`;
        navigate("/dashboard");
      } else {
        // console.error("Signup failed:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Modal
      width={450}
      height={649}
      open={registerModal}
      onCloseModal={toggleRegisterModal}
    >
      <div style={{ padding: "50px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Input
            label="First Name"
            width={170}
            placeholder="Enter Your First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          // validation=""
          />
          <Input
            label="Last Name"
            width={170}
            placeholder="Enter Your Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          // validation=""
          />
        </div>
        <div style={{ height: "8px" }}></div>
        <Input
          label="Email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        // validation=""
        />
        <div style={{ height: "8px" }}></div>
        <Input
          label="Phone"
          placeholder="Enter Your Phone Numebr"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <div style={{ height: "8px" }}></div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Input
            width={170}
            label="Street"
            placeholder="Street"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
          />
          <Input
            width={170}
            label="City"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div style={{ height: "8px" }}></div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Input
            width={170}
            label="Country"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <Input
            width={79}
            label="Zip Code"
            placeholder="90570"
            value={zipCode}
            onChange={(e) => {
              if (!isNaN(Number(e.target.value))) {
                setZipCode(e.target.value);
              }
            }}
          />
        </div>
        <div style={{ height: "8px" }}></div>
        <Input
          label="Password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{ height: "8px" }}></div>
        <Input
          label="Password"
          placeholder="Enter Your Password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <div style={{ height: "24px" }}></div>
        <div style={{ width: "fit-content", margin: "auto" }}>
          <Button
            disabled={
              !validateEmail(email) ||
              firstName.length < 3 ||
              lastName.length < 3 ||
              phoneNumber.length < 10 ||
              addressLine1.length < 3 ||
              city.length < 3 ||
              country.length < 3 ||
              zipCode.length !== 5 ||
              password.length < 6 ||
              password !== password2
            }
            size="large"
            onClick={handleSubmit}
            text="Register"
          />
        </div>
      </div>
    </Modal>
  );
}

export default SignupForm;
