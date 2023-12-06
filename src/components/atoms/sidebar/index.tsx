import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../assets/logo.png";
import DashboardIcon from "../../../assets/sidebar/Home_light.png";
import TrackIcon from "../../../assets/sidebar/trackicon.png";
import ContactIcon from "../../../assets/sidebar/contacticon.png";
import SettingIcon from "../../../assets/sidebar/settingicon.png";
import LightIcon from "../../../assets/sidebar/lighticon.png";
import LogoutIcon from "../../../assets/sidebar/logouticon.png";
import DeleteIcon from "../../../assets/sidebar/deleteicon.png";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  background-color: #870939;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
`;

const StyledLogo = styled.img`
  width: 197px;
  height: 40px;
  margin-left: 38px;
  margin-top: 28px;
  margin-bottom: 6px;
`;

interface IProps {
  selectedTab: number;
}


export const Sidebar = ({ selectedTab }: IProps) => {
  const [deleteModal, setDeleteModal] = useState(false) 
  const openDeleteModal = ()  => {
    setDeleteModal(true)
  }
  const navigate = useNavigate();
  const logOut = async () => {
    const authorization = localStorage.getItem("Authorization");
    const user = jwtDecode(authorization);

    const response = await axios.post(`http://localhost:3000/api/auth/logout`, {
      user_id: user?._id,
    });
    localStorage.setItem("Authorization", "");
    navigate("/");
  };
  return (
    <Wrapper>
      <StyledLogo src={Logo} />
      <StyledText>Welcome back! Name</StyledText>
      <Tab
        id={0}
        selected={selectedTab === 0}
        icon={DashboardIcon}
        name="Dashboard"
        link="/dashboard"
      />
      <Tab
        id={1}
        selected={selectedTab === 1}
        icon={TrackIcon}
        name="Track"
        link="/track"
      />
      <Tab
        id={2}
        selected={selectedTab === 2}
        icon={ContactIcon}
        name="Contact us"
        link="/contact-us"
      />
      <Tab
        id={3}
        icon={SettingIcon}
        name="Settings"
        subItems={[
          {
            name: "Delete account",
            icon: DeleteIcon,
            onTabClick: {openDeleteModal}
          },
        ]}
      />
      <Tab id={4} icon={LightIcon} name="Dark mode" />
      <Tab id={5} icon={LogoutIcon} onTabClick={logOut} name="Log out" />
    </Wrapper>
  );
};

const Tab = (props: any) => {
  const { id, icon, name, link, selected, onTabClick } = props;
  const [closed, setClosed] = useState(false);
  let height;
  if (!closed || id !== 3) {
    height = "72px";
  } else {
    height = 256 + 72 + "px";
  }

  return (
    <TabWrapper height={height}>
      {link ? (
        <Link style={{ textDecoration: "none" }} to={link}>
          <TabSecondWrapper
            selected={selected}
            onClick={() => {
              setClosed(!closed);
              if (onTabClick) {
                onTabClick();
              }
            }}
          >
            <TabIcon src={icon} />
            <TabName style={selected ? { opacity: 1 } : {}}>{name}</TabName>
          </TabSecondWrapper>
        </Link>
      ) : (
        <TabSecondWrapper
          selected={selected}
          onClick={() => {
            setClosed(!closed);
            if (onTabClick) {
              onTabClick();
            }
          }}
        >
          <TabIcon src={icon} />
          <TabName>{name}</TabName>
        </TabSecondWrapper>
      )}
      {props.subItems &&
        props.subItems.map((subItem) => {
          console.log('subItem', subItem)
          return (
            <TabInsideWrapper selected={selected} onClick={onTabClick}>
              <TabIcon src={subItem.icon} />
              <TabName>{subItem.name}</TabName>
            </TabInsideWrapper>
          );
        })}
    </TabWrapper>
  );
};
const StyledText = styled.div`
  color: white;
  padding-left: 36px;
  margin-bottom: 37px;
  font-size: 24px;
  font-weight: 700;
  width: 196px;
`;
interface ITabWrapper {
  height?: string;
}
const TabWrapper = styled.div<ITabWrapper>`
  height: ${(props) => (props.height ? props.height : "72px")};
  transition: 200ms ease-in-out;
  width: 100%;
  background-color: #8f1644;
  overflow: hidden;
`;
const TabSecondWrapper = styled.div<{ selected: Boolean }>`
  height: 72px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 78px;
  background-color: #870939;
  transition: 200ms ease-in-out;
  cursor: pointer;
  border-top: 3px solid #870939;
  border-bottom: 3px solid #870939;
  border-left: 3px solid ${(props) => (props.selected ? "white" : "#870939")};
`;
const TabInsideWrapper = styled(TabSecondWrapper)`
  background-color: #87093900;
  border-top: 0px solid #870939;
  border-bottom: 0px solid #870939;
  padding-left: 0px;
  justify-content: center;
`;

const TabIcon = styled.img`
  margin-right: 16px;
`;
const TabName = styled.div`
  opacity: 0.7;
  color: white;
  transition: 200ms ease-in-out;
  &:hover {
    opacity: 1;
  }
`;
