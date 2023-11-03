import { createTheme } from "@mantine/core";
import { themeToVars } from "@mantine/vanilla-extract";

export const baseTheme = createTheme({});
export const theme = themeToVars(baseTheme);
