import { View } from "react-native";
import styled from "styled-components";

export const BackgroundContainer = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.BACKGROUND};
`;
