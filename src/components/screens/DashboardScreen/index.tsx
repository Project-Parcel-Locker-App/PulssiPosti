import { Sidebar } from "../../atoms/sidebar/index";
import { Navbar } from "../../atoms/navbar/index";
import { StyledWrapper } from "../../atoms/wrapper/index";
import styled from "styled-components";
import DashboardHeader from "./header";
import DashboardTable from "./table";

const PageWrapper = styled.div`
  width: 100%;
  padding-top: 38px;
  padding-right: 64px;
  padding-left: 64px;
`;

function Dashboard() {
  return (
    <>
      <StyledWrapper>
        <PageWrapper>
          <DashboardHeader />
          <DashboardTable />
        </PageWrapper>
      </StyledWrapper>
      <Navbar />
      <Sidebar selectedTab={0} />
    </>
  );
}

export default Dashboard;
