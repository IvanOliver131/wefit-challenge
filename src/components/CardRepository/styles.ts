import { Image, Text, TouchableOpacity, View } from "react-native";

import styled from "styled-components";

export const TouchableContainer = styled(TouchableOpacity)``;

export const CardRepositoryContainer = styled(View)`
  background-color: ${(props) => props.theme.COLORS.BACKGROUND_CARD};
  height: 190px;
  border-radius: 4px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 12px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 32px;
`;

export const CardRepositoryHeader = styled(View)`
  align-items: "center";
  justify-content: "space-between";
  flex-direction: "row";
  /* font-size: ${(props) => props.theme.FONT_SIZE.MD};
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR}; */
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const HeaderTitle = styled(Text)`
  /* font-size: ${(props) => props.theme.FONT_SIZE.MD};
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR}; */
`;

export const HeaderTitleBold = styled(Text)`
  /* font-size: ${(props) => props.theme.FONT_SIZE.MD};
  font-family: ${(props) => props.theme.FONT_FAMILY.BOLD}; */
`;

export const Logo = styled(Image)`
  width: 36px;
  height: 36px;
`;

export const Divider = styled(View)`
  border: 1px solid ${(props) => props.theme.COLORS.DIVIDER};
`;

export const Description = styled(Text)`
  padding-top: 12px;
  padding-bottom: 12px;
  color: ${(props) => props.theme.COLORS.SUB_TEXT};
  /* font-size: ${(props) => props.theme.FONT_SIZE.SM};
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR}; */
  height: 60px;
`;

export const FooterCardRepository = styled(View)`
  align-items: "center";
  justify-content: "space-between";
  flex-direction: "row";
  padding-top: 12;
  padding-bottom: 12;
`;

export const ButtonDesfavorite = styled(TouchableOpacity)`
  align-items: "center";
  flex-direction: "row";
  background-color: ${(props) => props.theme.COLORS.WHITE};
  border: 1px solid ${(props) => props.theme.COLORS.TEXT};
  border-radius: 4px;
  padding: 6px;
`;

export const TextDesfavorite = styled(Text)`
  color: ${(props) => props.theme.COLORS.TEXT};
`;

export const ButtonFavorite = styled(TouchableOpacity)`
  align-items: "center";
  flex-direction: "row";
  background-color: #faf3dc;
  border-radius: 4px;
  padding: 6px;
`;

export const TextFavorite = styled(Text)`
  color: ${(props) => props.theme.COLORS.YELLOW};
`;

export const FavoriteCount = styled(View)`
  align-items: "center";
  flex-direction: "row";
`;

export const CodeLanguage = styled(View)`
  align-items: "center";
  flex-direction: "row";
`;

export const ChildText = styled(Text)`
  color: ${(props) => props.theme.COLORS.SUB_TEXT};
`;
