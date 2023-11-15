import styled from 'styled-components'

interface IStyledProps {
    size?: string;
    disabled?: boolean;
}
const StyledButton = styled.button<IStyledProps>`
border-radius: 10px;
background-color: ${props => !props.disabled ? "#870939" : '#BDBBBC'};
width: ${props => props.size==='small' ? '131px' : props.size==='large' ? '231px' : '170px'};
height: 35px;
border-radius: 10px;
border: none;
outline: none;
cursor:  ${props => !props.disabled ? "pointer" : 'not-allowed'};
box-shadow: 0px 0px 0px 0px #87093900;
transition: all 0.3s ease-in-out;
&:hover {
    /* background: #870939bb; */
    box-shadow: ${props => !props.disabled ? '0px 0px 20px 5px #87093980' : '0px 0px 0px 0px #87093900'};
}
`

interface IProps {
    text: string;
    onClick: () => void;
    size?: string;
    disabled?: boolean;
}

export const Button = ({text, onClick, size, disabled}: IProps) => {
    return (
        <StyledButton disabled={disabled} size={size} onClick={() => {
            if(!disabled){
                onClick()
            }
        }
        }>{text}</StyledButton>
    )
}
