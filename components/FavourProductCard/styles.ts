import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FavorProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  height: 150px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const FavorProductTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  margin: 5px;
`;

export const FavorProductTextCardName = styled.div`
  display: flex;
  flex-direction: row;
  color: #4e5ccc;
  font-size: 14px;
  font-weight: normal;
`;

export const FavorProductTextDescriptionText = styled.p`
  font-size: 12px;
  width: 100%;
  font-weight: normal;
  color: #a3a3a3;
`;

export const FavorProductRemoveIcon = styled(FontAwesomeIcon)`
  color: firebrick;
  cursor: pointer;
`;
