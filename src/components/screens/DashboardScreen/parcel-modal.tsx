import styled from "styled-components";
import { Modal } from "../../atoms/modal/index";

const Title = styled.div`
  color: '#870939';
  font-size: 40px;
  width: 100%;
  padding-top: 20px;
  padding-right: 15px;
  padding-left: 15px;
`;

const Row = styled.div`
  font-size: 25px;
  padding-top: 20px;
  padding-right: 15px;
  padding-left: 15px;
`;

function ParcelModal({ open, onCloseModal, parcel }: any) {
  console.log(open, open)
  return (
    <Modal
      width={585} height={650} onCloseModal={onCloseModal} open={open}
    >
      <Title>Parcel Details</Title>
      <Row>Pickup point: </Row>
      <Row>Code: </Row>
      <Row>Special Instructions: {parcel.special_instructions}</Row>
      <Row>Parcel Weight: {parcel.parcel_weight}</Row>
      <Row>Size: {parcel.parcel_size}</Row>
    </Modal>
  );
}

export default ParcelModal;
