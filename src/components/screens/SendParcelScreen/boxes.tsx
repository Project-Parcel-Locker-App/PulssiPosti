import { useState } from 'react'
import styled from 'styled-components';
import lIcon from "../../../assets/sizes/l.png";
import SIcon from "../../../assets/sizes/s.png";
import MIcon from "../../../assets/sizes/m.png";


const Wrapper = styled.div`
    width: 100%;
    padding-left: 63px;
    padding-right: 63px;
    display: flex;
    justify-content: space-between;
`

const StyledBox = styled.div`
    background-color: white;
    padding-bottom: 51px;
    padding-left: 39px;
    padding-right: 39px;
    width: 328px;
    position: relative;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledText = styled.div`
    color: #9A5B73;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    text-align: center;
`

const StyledTitle = styled.div`
    color: #BD054A;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    padding-top: 256px;
`

const StyledImage = styled.img<{imageSize: string}>`
    position: absolute;
    left: 50%;
    top: 137px;
    width: ${props => props.imageSize === 'l' ?  "227px": props.imageSize === 'm' ? "180px": "141px" };
    transform: translate(-50%, -50%);
`

interface IBox {
    onClick: () => void
    image: string;
    title: string;
    text: string;
    imageSize: string;
}

const Box = ({ onClick, image, title, text, imageSize }: IBox) => {
    return (
        <StyledBox onClick={onClick}>
            <StyledImage src={image} imageSize={imageSize}/>
            <StyledTitle>{title}</StyledTitle>
            <StyledText>{text}</StyledText>
        </StyledBox>
    )
}

interface IBoxes {
    setSelected: (x: string) => void;
    setStep: (x: number) => void;
}

function Boxes({ setSelected, setStep }: IBoxes) {

    return (
        <Wrapper>
            <Box
                onClick={() => {
                    setStep(2)
                    setSelected('S')
                }}
                image={SIcon}
                imageSize="s"
                title="S parcel"
                text="It will be delivered in 2–3 working days."
            />
            <Box
                onClick={() => {
                    setStep(2)
                    setSelected('M')
                }}
                image={MIcon}
                imageSize="m"
                title="M parcel"
                text="It will be delivered in 2–4 working days."
            />
            <Box
                onClick={() => {
                    setStep(2)
                    setSelected('L')
                }}
                image={lIcon}
                imageSize="l"
                title="L parcel"
                text="It will be delivered in 2–5 working days."
            />
        </Wrapper>
    );
}

export default Boxes;
