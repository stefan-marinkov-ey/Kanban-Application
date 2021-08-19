import React from "react";
import { useAuthState } from "../../Context";
import Header from "../../components/structureComponents/Header/Header";
import Lists from "../../components/structureComponents/Lists/Lists";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../components/styleComponents/Theme/GlobalStyles";
import {
  lightTheme,
  darkTheme,
} from "../../components/styleComponents/Theme/Themes";
import { BoardDiv } from "../../components/styleComponents/Container/Board_style";
import { darkMode, lightMode } from "../../utility/constantsText";

const Board = (props) => {
  const theme = useAuthState();

  const themeTogleClass =
    theme.themeToggle === `${lightMode}`
      ? lightTheme
      : theme.themeToggle === `${darkMode}`
      ? darkTheme
      : lightTheme;

  return (
    <ThemeProvider theme={themeTogleClass}>
      <GlobalStyles />
      <BoardDiv>
        <Header {...props} />
        <Lists />
      </BoardDiv>
    </ThemeProvider>
  );
};

export default Board;
