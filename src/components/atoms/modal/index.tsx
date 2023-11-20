import styled from "styled-components";

const Background = styled.div<{open: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  background-color: #d9d9d9cc;
  transition: 200ms ease-in-out;
`;

const CloseClickArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

interface ICardStyledProps {
  width?: number;
  height?: number;
}
const Card = styled.div<ICardStyledProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  background-color: white;
  border-radius: 10px;
`;
interface IProps {
  width?: number;
  height?: number;
  children?: React.ReactNode;
  onCloseModal: () => void;
  open: boolean;
}

export const Modal = ({ children, width, height, onCloseModal, open }: IProps) => {
  return (
    <Background open={open}>
      <CloseClickArea onClick={onCloseModal}/>
      <Card width={width} height={height}>
        {children}
      </Card>
    </Background>
  );
}
 