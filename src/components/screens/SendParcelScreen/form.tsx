import { StyledTrack } from '../../atoms/wrapper/index'
import { Input, StyledLabel } from '../../atoms/input/index'
import { Button } from '../../atoms/button/index'
import styled from 'styled-components';

const Choices = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
` 
const Choice = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
` 

function SendParcel({
  recipientEmail, setRecipientEmail,
  sendingCode, setSendingCode, pickupCode, setPickupCode, parcelWeight,
  setParcelWeight, specialInstructions, setSpecialInstructions, handleSubmit
}: any) {

  return (
    <StyledTrack>
      <Input
        label="Recipient Name"
        placeholder="Recipient Name"
        value={recipientEmail}
        onChange={(e) => setRecipientEmail(e.target.value)}
      />
      <div style={{ height: "24px" }}></div>
      <StyledLabel>Sending Point</StyledLabel>
      <Choices style={{display: 'flex'}}>
        <Choice onClick={() => setSendingCode(1)} style={{backgroundColor: sendingCode ===1 ? '#04bd4a':'#bd044a'}}>1</Choice>
        <Choice onClick={() => setSendingCode(2)} style={{backgroundColor: sendingCode ===2 ? '#04bd4a':'#bd044a'}}>2</Choice>
        <Choice onClick={() => setSendingCode(3)} style={{backgroundColor: sendingCode ===3 ? '#04bd4a':'#bd044a'}}>3</Choice>
        <Choice onClick={() => setSendingCode(4)} style={{backgroundColor: sendingCode ===4 ? '#04bd4a':'#bd044a'}}>4</Choice>
        <Choice onClick={() => setSendingCode(5)} style={{backgroundColor: sendingCode ===5 ? '#04bd4a':'#bd044a'}}>5</Choice>
      </Choices>
      <div style={{ height: "24px" }}></div>
      <StyledLabel>Pickup Point</StyledLabel>
      <Choices style={{display: 'flex'}}>
        <Choice onClick={() => setPickupCode(1)} style={{backgroundColor: pickupCode ===1 ? '#04bd4a':'#bd044a'}}>1</Choice>
        <Choice onClick={() => setPickupCode(2)} style={{backgroundColor: pickupCode ===2 ? '#04bd4a':'#bd044a'}}>2</Choice>
        <Choice onClick={() => setPickupCode(3)} style={{backgroundColor: pickupCode ===3 ? '#04bd4a':'#bd044a'}}>3</Choice>
        <Choice onClick={() => setPickupCode(4)} style={{backgroundColor: pickupCode ===4 ? '#04bd4a':'#bd044a'}}>4</Choice>
        <Choice onClick={() => setPickupCode(5)} style={{backgroundColor: pickupCode ===5 ? '#04bd4a':'#bd044a'}}>5</Choice>
      </Choices>
      <div style={{ height: "24px" }}></div>
      <Input
        label="Parcel Weight"
        placeholder="Parcel Weight"
        value={parcelWeight}
        onChange={(e) => {
          if(!isNaN(Number(e.target.value)))
          setParcelWeight(Number(e.target.value))
        }}
      />
      <div style={{ height: "24px" }}></div>
      <Input
        label="Special Instructions"
        placeholder="Special Instructions"
        value={specialInstructions}
        onChange={(e) => setSpecialInstructions(e.target.value)}
      />
      <div style={{ height: "24px" }}></div>
      <Button
        disabled={false}
        size="larg"
        onClick={handleSubmit}
        text="Send"
      />
    </StyledTrack>
  );
}

export default SendParcel;
