import {Sidebar} from '../../atoms/sidebar/index'
import {Navbar} from '../../atoms/navbar/index'
import {StyledWrapper} from '../../atoms/wrapper/index'

function Dashboard() {
  return (
    <>
    <StyledWrapper>

    </StyledWrapper>
    <Navbar />
    <Sidebar selectedTab={0}/>
    </>
  );
}

export default Dashboard;
