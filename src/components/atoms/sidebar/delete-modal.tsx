import styled from "styled-components";
import { Modal } from "../modal/index";
import { Button } from "../button";
import axios from "axios";
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from "react-router-dom";

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

const Text = styled.div`
  color: black;
  font-size: 24px;
  width: 100%;
  padding-bottom: 90px;
  padding-right: 55px;
  padding-left: 55px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 130px;
  padding-left: 130px;
`;

function DeleteModal({ open, onCloseModal }: any) {
  const navigate = useNavigate()
  const onDeleteClick = async () => {
    const authorization = localStorage.getItem("Authorization");
    const user = jwtDecode(authorization);
    await axios.delete(`http://localhost:3000/api/users/${user?.id}`);
    localStorage.setItem("Authorization", "");
    navigate("/");
  }

  return (
    <Modal
      width={698} height={393} onCloseModal={onCloseModal} open={open}
    >
      <Title>DELETE ACOUNT</Title>
      <Text>Are you sure you want to delete your account? This action is irreversible, and you will lose access to all your data and content.</Text>
      <Buttons>
        <Button
          size="medium"
          onClick={onDeleteClick}
          text="Yes"
          type="secondary"
        />
        <Button
          size="medium"
          onClick={onCloseModal}
          text="No"
        />
      </Buttons>
    </Modal>
  );
}

export default DeleteModal;
