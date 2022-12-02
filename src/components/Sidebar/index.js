import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarWrapper,
  SideBarLink,
  SidebarRoute,
  SideBtnWrap
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SideBarLink to="about" onClick={toggle}>
            About
          </SideBarLink>
          <SideBarLink to="discover" onClick={toggle}>
            Discover
          </SideBarLink>
          <SideBarLink to="Services" onClick={toggle}>
            Services
          </SideBarLink>
          <SideBarLink to="signup" onClick={toggle}>
            Sign Up
          </SideBarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin" onClick={toggle}>
            Sign In
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
