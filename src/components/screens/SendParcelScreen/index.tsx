import { useState } from 'react'
import { Sidebar } from '../../atoms/sidebar/index'
import { Navbar } from '../../atoms/navbar/index'
import { StyledWrapper, StyledTrack } from '../../atoms/wrapper/index'
import { Input } from '../../atoms/input/index'
import { Button } from '../../atoms/button/index'

function SendParcel() {
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
        <div style={{marginTop: '62px', marginLeft: '74px', fontSize:'36px'}}>
          Enter your details
        </div>
        <StyledTrack>
          <Input
            label="Sender Name"
            placeholder="Sender Name *"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
          />
          <div style={{ height: "8px" }}></div>
          <Input
            label="Recipient Name"
            placeholder="Recipient Name"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
          />
          <div style={{ height: "24px" }}></div>
          <Input
            label="Street Address"
            placeholder="Street Address"
            value={streetAdress}
            onChange={(e) => setStreetAdress(e.target.value)}
          />
          <div style={{ height: "24px" }}></div>
          <Input
            label="Postal Code"
            placeholder="Postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <div style={{ height: "24px" }}></div>
          <Input
            label="City"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <div style={{ height: "24px" }}></div>
          <Button
            disabled={false}
            size="larg"
            onClick={handleSubmit}
            text="Send"
          />
        </StyledTrack>
      </StyledWrapper>
      <Navbar />
      <Sidebar selectedTab={1} />
    </>
  );
}

export default SendParcel;
