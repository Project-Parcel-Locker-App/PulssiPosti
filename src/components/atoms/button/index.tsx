import styled from 'styled-components'

interface IStyledProps {
    size?: string;
    disabled?: boolean;
    secondary?: string
}
const StyledButton = styled.button<IStyledProps>`
border-radius: 10px;
background-color: ${props => !props.disabled ? props.secondary ? "#87093900":"#870939" : '#BDBBBC'};
width: ${props => props.size==='small' ? '131px' : props.size==='large' ? '231px' : '193px'};
height: 35px;
border-radius: 10px;
border: ${props => !props.disabled ? "2px solid #870939" : '0px solid #870939'};
outline: none;
cursor:  ${props => !props.disabled ? "pointer" : 'not-allowed'};
box-shadow: 0px 0px 0px 0px #87093900;
transition: all 0.3s ease-in-out;
color: ${props => (props.secondary || props.disabled )? '870939' : 'white'};
&:hover {
    background:  ${props => !props.disabled ? props.secondary ? "#87093955":"#870939" : '#BDBBBC'};
    box-shadow: ${props => (!props.disabled && !props.secondary )? '0px 0px 20px 5px #87093980' : '0px 0px 0px 0px #87093900'};
}
`

interface IProps {
    text: string;
    onClick: () => void;
    size?: string;
    disabled?: boolean;
    type?: string;
}

export const Button = ({text, onClick, size, disabled, type}: IProps) => {
    return (
        <StyledButton secondary={type==="secondary"} disabled={disabled} size={size} onClick={() => {
            if(!disabled){
                onClick()
            }
        }
        }>{text}</StyledButton>
    )
}
