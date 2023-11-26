import styled from "styled-components";

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
const StyledHeaderCell = styled.div`
  width: calc(100% / 6);
  display: flex;
  align-items: center;
  padding-left: 16px;
`;

function DashboardTable() {
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
      </StyledTableHeader>
    </StyledTable>
  );
}

export default DashboardTable;
