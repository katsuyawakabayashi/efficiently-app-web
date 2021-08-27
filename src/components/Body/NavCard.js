import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavCardContainer = styled.div`
  width: 100%;
  margin: 0.2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 0.8rem;
  }
`;

const NavSelectorWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.8rem;
`;
const NavWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.1rem;
`;

const NavNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBadgeWrapper = styled.div``;

const NavCard = ({ icon, type, count }) => {
  return (
    <NavCardContainer>
      <NavLink
        to={"/" + type}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "start",
          borderRadius: "0.8rem",
          padding: "0.25rem",
        }}
        activeStyle={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
      >
        <NavSelectorWrapper>
          <NavWrapper>
            <IconWrapper>{icon}</IconWrapper>
            <NavNameWrapper>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </NavNameWrapper>
          </NavWrapper>
          <NavBadgeWrapper>{count}</NavBadgeWrapper>
        </NavSelectorWrapper>
      </NavLink>
    </NavCardContainer>
  );
};

export default NavCard;
