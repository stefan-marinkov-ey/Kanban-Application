import React from "react";
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
import { useManageContext } from "../../Context/context";

const Board = (props) => {
  const { state } = useManageContext();

  const themeTogleClass =
    state.themeToggle === `${lightMode}`
      ? lightTheme
      : state.themeToggle === `${darkMode}`
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
