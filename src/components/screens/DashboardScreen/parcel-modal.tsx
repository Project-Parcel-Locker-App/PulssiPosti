import styled from "styled-components";
import { Modal } from "../../atoms/modal/index";

const Title = styled.div`
  color: #870939;
  font-size: 40px;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-right: 55px;
  padding-left: 55px;
  font-weight: bold;
`;

const Row = styled.div`
  font-size: 25px;
  padding-top: 20px;
  padding-right: 55px;
  padding-left: 55px;
`;

function ParcelModal({ open, onCloseModal, parcel }: any) {
  console.log(open, open)
  return (
    <Modal
      width={585} height={650} onCloseModal={onCloseModal} open={open}
    >
      <Title>Parcel Details</Title>
      <Row><b>Pickup point:</b> </Row>
      <Row><b>Code:</b></Row>
      <Row><b>Special Instructions:</b> {parcel.special_instructions}</Row>
      <Row><b>Parcel Weight:</b> {parcel.parcel_weight}</Row>
      <Row><b>Size:</b> {parcel.parcel_size}</Row>
    </Modal>
  );
}

export default ParcelModal;
