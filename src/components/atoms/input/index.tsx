import styled from "styled-components";
interface IStyledProps {
  width?: number;
}
const StyledInputWrapper = styled.div<IStyledProps>`
  height: 64px;
  width: ${(props) => (props.width ? props.width + "px" : "345px")};
`;

const StyledLabel = styled.div`
  height: 19px;
  width: 100%;
  color: #bd054a;
  font-size: 12px;
`;

const StyledInput = styled.input`
  height: 45px;
  width: 100%;
  color: #000000;
  border-radius: 5px;
  border: 2px solid #bd044a;
  padding: 10px;
  display: block;
  outline: none;
`;

interface IProps {
  value: string;
  onChange: (e: string) => void;
  placeholder?: string;
  label?: string;
  type?: string;
  width?: number;
}

export const Input = ({
  value,
  onChange,
  placeholder,
  label,
  type,
  width,
}: IProps) => {
  return (
    <StyledInputWrapper width={width}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
    </StyledInputWrapper>
  );
};
