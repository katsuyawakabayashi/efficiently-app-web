import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { EntryContext } from "./contexts/EntryContext";
import styled from "styled-components";

const EntryBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
`;

export const EntryColumnContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EntryPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  position: relative;
  align-items: center;
  height: 25%;
  width: 100%;
  min-height: 25rem;
  min-width: 19rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0 0.1rem -2px black;
  border-radius: 0.5rem;
  text-align: center;
`;

export const EntryHeaderLeftContainer = styled.div`
  height: 30%;
  font-size: 1.7em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const EntryContentContainer = styled.div`
  height: 70%;
  width: 60%;
  font-size: 1em;
`;

export const EntryForm = styled.form`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EntryInputContainer = styled.div`
  height: 50%;
  width: 100%;
  white-space: no-wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const EntryButtonContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const EntryInput = styled.input`
  text-align: center;
  padding: 0.7rem 1rem;
  margin: 0.7rem 0;
  font-size: 0.8em;
  border-bottom: 0.01rem groove;
  color: #111;
  &:focus {
    outline: none;
  }
`;

export const LoginConfirmButton = styled.button`
  padding: 0.6rem 2rem;
  font-size: 0.8em;
  border-radius: 0.5rem;
  background-color: #000;
  color: #fff;
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
`;

export const EntryBottomContainer = styled.div`
  text-align: center;
  opacity: 0.5;
  font-size: 0.8em;
  margin-top: 0.7rem;
`;

export const EntryBottomLink = styled(Link)`
  text-decoration: underline;
  &:hover {
    opacity: 0.5;
  }
`;

export const EntryErrorMessage = styled.div`
  position: absolute;
  top: 2rem;
  font-size: 0.8em;
  padding: 0 0.5rem;
  margin: 0.5rem 0;
  background-color: #ffcccb;
`;

export const EntryForgotMessage = styled.div`
  position: absolute;
  bottom: 0.5rem;
  font-size: 0.8em;
  padding: 0 0.5rem;
  margin: 0.5rem 0;
`;

export const SuccessMessage = styled.div`
  position: absolute;
  top: 0.5rem;
  font-size: 0.8em;
  padding: 0 0.5rem;
  margin: 0.5rem 0;
  background-color: #90ee90;
`;
// interface for login, signup, reset pages
// i.e. title: "Sign up", form={SignupForm}, bottomMessage={LoginMessage}
const EntryComponent = ({ title, form, bottomMessage }) => {
  // import error and success messages from Entry Context
  const { error, successMessage } = useContext(EntryContext);
  return (
    <EntryBackground>
      <EntryColumnContainer>
        <EntryPanelContainer>
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
          {error && <EntryErrorMessage>{error}</EntryErrorMessage>}
          <EntryHeaderLeftContainer>{title}</EntryHeaderLeftContainer>
          <EntryContentContainer>{form}</EntryContentContainer>
        </EntryPanelContainer>
        <EntryBottomContainer>{bottomMessage}</EntryBottomContainer>
      </EntryColumnContainer>
    </EntryBackground>
  );
};

export default EntryComponent;
