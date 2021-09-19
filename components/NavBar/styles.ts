import styled from "styled-components";

export const NavBar = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: 1px solid darkgrey;
  background-color: #fb619b;
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const NavButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  cursor: pointer;
  flex: 1;
`;

export const NavIcon = styled.div`
  font-size: 20px;
`;
