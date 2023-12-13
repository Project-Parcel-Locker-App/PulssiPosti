import { useState } from 'react'
import { Sidebar } from '../../atoms/sidebar/index'
import { Navbar } from '../../atoms/navbar/index'
import { StyledWrapper } from '../../atoms/wrapper/index'
import Boxes from './boxes'
import Form from './form'
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function SendParcel() {
  const navigate = useNavigate();
  
  const [step, setStep] = useState<number>(1)
  const [selectedSize, setSelected] = useState<string>('')

  const [recipientEmail, setRecipientEmail] = useState<string>("")
  const [sendingCode, setSendingCode] = useState<string>(0)
  const [pickupCode, setPickupCode] = useState<string>(0)
  const [parcelWeight, setParcelWeight] = useState<string>(0)
  const [specialInstructions, setSpecialInstructions] = useState<string>("")

  const handleSubmit = async () => {
    const authorization = localStorage.getItem("Authorization");
    const user = jwtDecode(authorization);
    const result = await axios.post(`http://localhost:3000/api/users/${user?.id}/parcels`,
      {
        recipientEmail: recipientEmail,
        parcel: {
          parcel_size: selectedSize,
          recipient_email: recipientEmail,
          sending_code: sendingCode,
          pickup_code: pickupCode,
          parcel_weight: parcelWeight,
          special_instructions: specialInstructions
        }
      });
    console.log('result', result)
    navigate("/dashboard");
    toast.success('Parcel Created')
  }

  return (
    <>
      <StyledWrapper>
        <div style={{ marginTop: '62px', marginLeft: '74px', fontSize: '36px' }}>
          Enter your details
        </div>
        {
          step === 1 &&
          <Boxes
            setStep={setStep}
            setSelected={setSelected}
          />
        }
        {
          step === 2 &&
          <Form
            recipientEmail={recipientEmail}
            setRecipientEmail={setRecipientEmail}
            sendingCode={sendingCode}
            setSendingCode={setSendingCode}
            pickupCode={pickupCode}
            setPickupCode={setPickupCode}
            parcelWeight={parcelWeight}
            setParcelWeight={setParcelWeight}
            specialInstructions={specialInstructions}
            setSpecialInstructions={setSpecialInstructions}
            handleSubmit={handleSubmit}
          />
        }
      </StyledWrapper>
      <Navbar />
      <Sidebar selectedTab={1} />
    </>
  );
}

export default SendParcel;
