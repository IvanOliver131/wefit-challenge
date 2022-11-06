import "styled-components";
import { THEME_LIGHT } from "../theme/light";

type ThemeType = typeof THEME_LIGHT & { THEME: string };

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
