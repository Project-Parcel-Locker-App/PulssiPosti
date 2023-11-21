import { useState } from "react";
import { Input } from "../../atoms/input/index";
import { Modal } from "../../atoms/modal/index";
import { Button } from "../../atoms/button/index";
import { validateEmail } from "../../../ustils/validation";

interface IProps {
  registerModal: boolean;
  setRegisterModal: (value: boolean) => void;
}
function SignupForm({ registerModal, setRegisterModal }: IProps) {
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [addressLine1, setAddressLine1] = useState<string>("");
  const [addressLine2, setAddressLine2] = useState<string>("");

  const toggleRegisterModal = () => {
    setRegisterModal(!registerModal);
  };
  const handleSubmit = async () => {
    try {
      // Send a POST request to your server with the username and password
      const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        body: JSON.stringify({ 
          password,
          email,
          fullName,
          phoneNumber,
          addressLine1,
          addressLine2,
          zipCode,
         }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      // Display a success message or handle errors
      if (response.status === 200) {
        console.log("Signup successful:", data.message);
        // Redirect the user to the login page or another page
      } else {
        console.error("Signup failed:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Modal
      width={450}
      height={609}
      open={registerModal}
      onCloseModal={toggleRegisterModal}
    >
      <div style={{ padding: "50px" }}>
        <Input
          label="Full Name"
          placeholder="Enter Your Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          // validation=""
        />
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
            label="Address Line 1"
            placeholder="Apartment Or Unit, Street"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
          />
          <div style={{ width: "24px" }}></div>
          <Input
            width={170}
            label="Address Line 2"
            placeholder="City, Country"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
          />
        </div>
        <div style={{ height: "8px" }}></div>
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
        <div style={{ height: "8px" }}></div>
        <Input
          label="Password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{ height: "24px" }}></div>
        <Button
          disabled={
            !validateEmail(email) ||
            fullName.length < 3 ||
            phoneNumber.length < 10 ||
            addressLine1.length < 3 ||
            addressLine2.length < 3 ||
            zipCode.length !== 5 ||
            password.length < 6
          }
          size="small"
          onClick={handleSubmit}
          text="Register"
        />
      </div>
    </Modal>
  );
}

export default SignupForm;
