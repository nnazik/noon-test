import styled from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: darkgrey 1px solid;
  padding-bottom: 5px;
`;

export const ProductCardProfileImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px;
  align-items: center;
`;

export const ProductCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const ProductCardFavorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  color: #4e5ccc;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ProductCardTagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #4e5ccc;
  font-size: 12px;
  font-weight: normal;
`;

export const ProductCardDescriptionText = styled.div`
  font-size: 12px;
  width: 100%;
  font-weight: normal;
  color: #868686;
`;

export const ProductCardCommentText = styled.p`
  font-size: 12px;
  width: 100%;
  font-weight: normal;
  color: #a3a3a3;
`;

export const ProductCardImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 300px;
`;

export const ProductCardImageNameText = styled.p`
  position: absolute;
  margin: 0 auto;
  bottom: 30px;
  left: 10px;
  color: #f7f6f6;
  text-align: center;
  font-size: 14px;
  font-weight: normal;
`;

export const ProductCardImagePriceText = styled.p`
  position: absolute;
  margin: 0 auto;
  bottom: 10px;
  left: 10px;
  color: #f7f6f6;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`;

export const ProductCardImageFavorIcon = styled(FontAwesomeIcon)`
  position: absolute;
  margin: 0 auto;
  bottom: 10px;
  right: 20px;
  color: #f7f6f6;
  cursor: pointer;
`;

export const ProductCardImage = styled(Image)`
  width: 100% !important;
  height: auto !important;
`;

export const ProductProfileImage = styled(Image)`
  border-radius: 50%;
`;
