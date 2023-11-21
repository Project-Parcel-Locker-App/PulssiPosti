import {Sidebar} from '../../atoms/sidebar/index'
import {Navbar} from '../../atoms/navbar/index'
import {StyledWrapper} from '../../atoms/wrapper/index'

function SendParcel() {
  return (
    <>
      <StyledWrapper></StyledWrapper>
      <Navbar />
      <Sidebar selectedTab={1} />
    </>
  );
}

export default SendParcel;
