import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

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
  color: #870939;
  font-size: 16px;
  display: flex;
`;
const StyledHeaderCell = styled.div`
  width: calc(100% / 6);
  display: flex;
  align-items: center;
  padding-left: 16px;
`;

function DashboardTable() {
  const [parcels, setParcels] = useState([]);

  const getParcels = async () => {
    const result = await axios.get(`http://localhost:3000/api/parcels/parcels`);
    if (result) {
      setParcels(result.data);
    }
  };
  useEffect(() => {
    getParcels();
  }, []);
  
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
      <StyledTableHeader>
        {parcels.map((parcel) => {
          return (
            <StyledTableRow>
              <StyledHeaderCell>{parcel.sender_id}</StyledHeaderCell>
              <StyledHeaderCell>{parcel.recipient_id}</StyledHeaderCell>
              <StyledHeaderCell>{parcel.updated_at}</StyledHeaderCell>
              <StyledHeaderCell>{parcel.parcel_status}</StyledHeaderCell>
              <StyledHeaderCell>{parcel.updated_at}</StyledHeaderCell>
              <StyledHeaderCell></StyledHeaderCell>
            </StyledTableRow>
          );
        })}
      </StyledTableHeader>
    </StyledTable>
  );
}

export default DashboardTable;
