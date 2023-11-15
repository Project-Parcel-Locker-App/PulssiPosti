import styled from "styled-components";

const StyledInputWrapper = styled.div`
  height: 64px;
  width: 345px;
`;

const StyledLabel = styled.div`
  height: 19px;
  width: 100%;
  color: #BD054A;
  font-size: 12px;
`;

const StyledInput = styled.input`
  height: 45px;
  width: 100%;
  color: #000000;
  border-radius: 5px;
  border: 2px solid #BD044A;
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
}

export const Input = ({ value, onChange, placeholder, label, type }: IProps) => {
  return (
    <StyledInputWrapper>
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
