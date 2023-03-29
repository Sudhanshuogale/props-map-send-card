import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
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

const Styledbutton = styled(Button)(({ theme }) => ({
  fontWeight: 800,
  color: "inherit",
  variant: "contained",
  padding: theme.spacing(3),
}));

const Styledbutton2 = styled(Button)(() => ({
  color: "white",
  variant: "outlined",
  fontSize: 16,
  border: "1px solid black",
  backgroundColor: "darkblue",
  borderColor: "#0063cc",
  padding: "6px 12px",
  borderRadius: "10px",
  size: "small",
  "&:hover": {
    backgroundColor: blue,
  },
}));

const Space = styled("div")(({ theme }) => ({
  paddingRight: "250px",
  [theme.breakpoints.down("md")]: {
    width: "50px",
    paddingRight: "150px",
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#22223b",
    },
    secondary: {
      main: "#d4ddff",
    },
  },
});

function LayoutTemplate(props) {
  const [mode, setMode] = useState("light");
  const [item, setitem] = useState("Dark");
  const [col, setcol] = useState("primary");

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

  const router = useRouter();

  const loginhandler = () => {
    router.push("/login");
  };

  // const logouthandler = () => {
  //   router.push("/index");
  // };

  return (
    <div>
      <AppBar position="static">
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
            {props.loggedin && (
              <Styledbutton>
                <Link href="/contact">Contact</Link>
              </Styledbutton>
            )}
          </Space>
          <Styledbutton2 onClick={loginhandler}>{props.logout}</Styledbutton2>
        </Toolbar>
      </AppBar>

      <ThemeProvider theme={theme}>
        <Btn color={col} variant="contained" onClick={changeMode}>
          {item}
        </Btn>
      </ThemeProvider>

      {props.children}
    </div>
  );
}

export default LayoutTemplate;
