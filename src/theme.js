import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// Color Tokens
export const tokens = (mode) => {
  return {
    ...(mode === "dark"
      ? {
          primary: {
            100: "#d5d3d9",
            200: "#aaa7b3",
            300: "#807a8c",
            400: "#554e66",
            500: "#2b2240",
            600: "#221b33",
            700: "#1a1426",
            800: "#110e1a",
            900: "#09070d",
          },
          purple: {
            100: "#e5defc",
            200: "#cbbefa",
            300: "#b19df7",
            400: "#977df5",
            500: "#7d5cf2",
            600: "#644ac2",
            700: "#4b3791",
            800: "#322561",
            900: "#191230",
          },
          grey: {
            100: "#e4e9ed",
            200: "#c9d3db",
            300: "#adbcca",
            400: "#92a6b8",
            500: "#7790a6",
            600: "#5f7385",
            700: "#475664",
            800: "#303a42",
            900: "#181d21",
          },
          white: {
            100: "#fcfcfc",
            200: "#fafafa",
            300: "#f7f7f7",
            400: "#f5f5f5",
            500: "#f2f2f2",
            600: "#c2c2c2",
            700: "#919191",
            800: "#616161",
            900: "#303030",
          },
          black: {
            100: "#cfcfcf",
            200: "#9e9e9e",
            300: "#6e6e6e",
            400: "#3d3d3d",
            500: "#0d0d0d",
            600: "#0a0a0a",
            700: "#080808",
            800: "#050505",
            900: "#030303",
          },
          green: {
            100: "#dbf7f4",
            200: "#b8efe9",
            300: "#94e6dd",
            400: "#71ded2",
            500: "#4dd6c7",
            600: "#3eab9f",
            700: "#2e8077",
            800: "#1f5650",
            900: "#0f2b28",
          },
        }
      : {
          primary: {
            100: "#554e66",
            200: "#807a8c",
            300: "#aaa7b3",
            400: "#d5d3d9",
            500: "#2b2240",
            600: "#e2dfe6",
            700: "#e8e5eb",
            800: "#eeecf0",
            900: "#f9f9fa",
          },
          purple: {
            100: "#191230",
            200: "#322561",
            300: "#4b3791",
            400: "#644ac2",
            500: "#7d5cf2",
            600: "#977df5",
            700: "#b19df7",
            800: "#cbbefa",
            900: "#e5defc",
          },
          grey: {
            100: "#181d21",
            200: "#303a42",
            300: "#475664",
            400: "#5f7385",
            500: "#7790a6",
            600: "#92a6b8",
            700: "#adbcca",
            800: "#c9d3db",
            900: "#e4e9ed",
          },
          white: {
            100: "#303030",
            200: "#616161",
            300: "#919191",
            400: "#c2c2c2",
            500: "#f2f2f2",
            600: "#f5f5f5",
            700: "#f7f7f7",
            800: "#fafafa",
            900: "#fcfcfc",
          },
          black: {
            100: "#030303",
            200: "#050505",
            300: "#080808",
            400: "#0a0a0a",
            500: "#0d0d0d",
            600: "#3d3d3d",
            700: "#6e6e6e",
            800: "#9e9e9e",
            900: "#cfcfcf",
          },
          green: {
            100: "#0f2b28",
            200: "#1f5650",
            300: "#2e8077",
            400: "#3eab9f",
            500: "#4dd6c7",
            600: "#71ded2",
            700: "#94e6dd",
            800: "#b8efe9",
            900: "#dbf7f4",
          },
        }),
  };
};

// MUI Theme Settings

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.green[400],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[600],
            },
            secondary: {
              main: colors.green[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.white[800],
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// Context for color mode

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode), [mode]));

  return [theme, colorMode];
};
