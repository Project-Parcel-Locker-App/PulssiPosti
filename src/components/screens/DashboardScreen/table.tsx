import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Moment from 'react-moment';
import Status from "../../atoms/status";
import ParcelModal from "./parcel-modal";

const StyledTable = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 16px;
  padding: 8px;
  margin-top: 65px;
`;
const StyledTableHeader = styled.div`
  width: 100%;
  height: 64px;
  color: #870939;
  font-size: 16px;
  display: flex;
`;
const StyledTableRow = styled.div`
  width: 100%;
  height: 64px;
  color: black;
  font-size: 16px;
  display: flex;
  background-color: #f1e2e7;
`;
const StyledHeaderCell = styled.div`
  width: calc(100% / 6);
  display: flex;
  align-items: center;
  padding-left: 16px;
  font-weight: bold;
`;
const StyledBodyCell = styled(StyledHeaderCell)`
  border: 1px solid rgba(0,0,0,0.1);
  overflow: hidden;
  color: ${props => props.view? '#870939' : 'black'};
`;

function DashboardTable() {
  const [parcels, setParcels] = useState([]);
  const [selectedParcel, setSelectedParcel] = useState({});

  const getParcels = async () => {
    const authorization = localStorage.getItem("Authorization");
    const user = jwtDecode(authorization);
    const result = await axios.get(`http://localhost:3000/api/users/${user?.id}/parcels`);
    if (result) {
      setParcels(result.data);
    }
  };
  useEffect(() => {
    getParcels();
  }, []);

  const openParcelDetails = (parcel: any) => {
    console.log(parcel)
    setSelectedParcel(parcel)
  }

  return (
    <StyledTable>
      <StyledTableHeader>
        <StyledHeaderCell>sender</StyledHeaderCell>
        <StyledHeaderCell>recipient</StyledHeaderCell>
        <StyledHeaderCell>delivery date</StyledHeaderCell>
        <StyledHeaderCell>status</StyledHeaderCell>
        <StyledHeaderCell>picked up date</StyledHeaderCell>
        <StyledHeaderCell>parcel info</StyledHeaderCell>
      </StyledTableHeader>
      {parcels.map((parcel, index) => {
        console.log('parcel', parcel)
        return (
          <StyledTableRow>
            <StyledBodyCell>{parcel.sender_full_name}</StyledBodyCell>
            <StyledBodyCell>{parcel.recipient_full_name}</StyledBodyCell>
            <StyledBodyCell></StyledBodyCell>
            <StyledBodyCell>
              <Status status={parcel.parcel_status} />
            </StyledBodyCell>
            <StyledBodyCell>{parcel.updated_at ? <Moment date={parcel.updated_at} format="MM.DD.YY HH:mm" /> : <></>}</StyledBodyCell>
            <StyledBodyCell view={true} onClick={() => openParcelDetails(parcel)}>{'Veiw >'}</StyledBodyCell>
          </StyledTableRow>
        );
      })}
      <ParcelModal parcel={selectedParcel} open={selectedParcel.id? true : false} onCloseModal={()=> setSelectedParcel({})} />
    </StyledTable>
  );
}

export default DashboardTable;
