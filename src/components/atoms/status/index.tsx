
import styled from "styled-components";
interface Istyled {
  color: string;
  background: string;
}

const StatusWrapper = styled.div<{ styleProps: Istyled }>`
  font-size: 10px;
  height: 22px;
  width: 137px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.styleProps.color};
  background-color: ${props => props.styleProps.background};
`;

const statusConvertor : any = {
  'pending': { text: 'Pending', background: '#bdbbbc', color: 'black' },
  'in-transit': { text: 'In Transit', background: '#bfad97', color: 'black' },
  'ready-for-pickup': { text: 'Ready For Pickup', background: '#58b4ba', color: 'black' },
  'delivered': { text: 'Delivered', background: '#5bb765', color: 'rgb(5,255,0)' },
}

export default ({ status } : {status: string}) => {

  return (
    statusConvertor[status] ?
      <StatusWrapper styleProps={statusConvertor[status]} >
        {statusConvertor[status].text}
      </StatusWrapper > :
      <></>
  )
}
