import { useTheme as defaultUseTheme } from "styled-components";
import { foundations } from "@ratatoskr-ui/tokens";
import componentStyles from "./component-styles";

export const theme = {
  ...foundations,
  componentStyles,
};

export type Theme = typeof theme;

export const useTheme = defaultUseTheme;
