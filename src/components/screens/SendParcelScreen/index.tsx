import { useState } from 'react'
import { Sidebar } from '../../atoms/sidebar/index'
import { Navbar } from '../../atoms/navbar/index'
import { StyledWrapper } from '../../atoms/wrapper/index'
import Boxes from './boxes'
import Form from './form'

function SendParcel() {
  const [step, setStep] = useState<number>(1)
  const [selectedSize, setSelected] = useState<string>('')
  
  const [senderName, setSenderName] = useState<string>("")
  const [recipientName, setRecipientName] = useState<string>("")
  const [streetAdress, setStreetAdress] = useState<string>("")
  const [postalCode, setPostalCode] = useState<string>("")
  const [city, setCity] = useState<string>("")

  const handleSubmit = async () => {

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
            senderName={senderName}
            setSenderName={setSenderName}
            recipientName={recipientName}
            setRecipientName={setRecipientName}
            streetAdress={streetAdress}
            setStreetAdress={setStreetAdress}
            postalCode={postalCode}
            setPostalCode={setPostalCode}
            city={city}
            setCity={setCity}
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
