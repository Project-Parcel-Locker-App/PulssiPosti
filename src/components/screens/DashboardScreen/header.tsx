import LocationIcon from "../../../assets/dashboard/location.png";
import SendParcelIcon from "../../../assets/dashboard/send-parcel.png";
import TrackAndReceiveIcon from "../../../assets/dashboard/track-and-receive.png";
import styled from "styled-components";

const Title = styled.div`
  color: black;
  margin-bottom: 65px;
  width: 100%;
  font-size: 36px;
  font-weight: 700;
`;
const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 328px;
  height: 130px;
  border-radius: 50px;
  padding: 30px;
  background-color: #870939;
  cursor: pointer;
`;
const CardImage = styled.img`
  width: 50px;
`;

const CardText = styled.div`
  width: 180px;
  color: white;
  font-size: 24px;
`;

function DashboardHeader() {
  return (
    <>
      <Title>Dashboard</Title>
      <Cards>
        <Card>
          <CardImage src={SendParcelIcon} />
          <CardText>Send a parcel</CardText>
        </Card>
        <Card>
          <CardImage src={LocationIcon} />
          <CardText>Track and recieve</CardText>
        </Card>
        <Card>
          <CardImage src={TrackAndReceiveIcon} />
          <CardText>See Parcel point locations</CardText>
        </Card>
      </Cards>
    </>
  );
}

export default DashboardHeader;
