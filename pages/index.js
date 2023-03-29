import * as React from "react";
// import { Routes, Route, useNavigate, Router } from "react-router-dom";
import {
  styled,
  AppBar,
  Toolbar,
  Typography,
  Button,
  blue,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import Login from "./login";

import Cardcomponent from "../organisms/Card/Cardcomponent";
import LayoutTemplate from "@/templates/layout/LayoutTemplate";

let arr = [
  {
    name: "kunal",
    age: 22,
    city: "Jaipur",
  },
  {
    name: "Mahesh",
    age: 24,
    city: "Jaipur",
  },
  {
    name: "Arnav",
    age: 24,
    city: "Jaipur",
  },
  {
    name: "Milind",
    age: 23,
    city: "Jaipur",
  },
];

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#22223b",
//     },
//     secondary: {
//       main: "#d4ddff",
//     },
//   },
// });

export default function ButtonAppBar() {
  const logout = "Login";

  // const [mode, setMode] = useState("light");
  // const [item, setitem] = useState("Dark");
  // const [col, setcol] = useState("primary");

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      setitem("Light");
      setcol("secondary");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setitem("Dark");
      setcol("primary");
    }
  };

  const Btn = styled(Button)(() => ({
    border: "3px solid red ",
    margin: "30px 90vw",
  }));

  return (
    <>
      <LayoutTemplate logout={logout}>
        {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NavBar
          </Typography>

          <Space>
            <Styledbutton>
              <Link href="/home">Home</Link>
            </Styledbutton>
            <Styledbutton>
              <Link href="/about">About</Link>
            </Styledbutton>
            <Styledbutton>
              <Link href="/contact">Contact</Link>
            </Styledbutton>
          </Space>

          <Styledbutton2 onClick={loginhandler}>Signup</Styledbutton2>
        </Toolbar>
      </AppBar> */}

        {/* <ThemeProvider theme={theme}>
          <Btn color={col} variant="contained" onClick={changeMode}>
            {item}
          </Btn>
        </ThemeProvider> */}

        {/* {arr.map((item, index) => (
        <Cardcomponent key={index} data={item} value={mode} />
      ))} */}
      </LayoutTemplate>
    </>
  );
}
