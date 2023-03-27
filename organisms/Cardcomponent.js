import React, { useState } from "react";
import { Typography, styled, CardContent, Card } from "@mui/material";

// const StyledTypography= styled(Typography)(()=>({
//   variant:'h6',
//   color:'blue',
//   fontWeight:'600',
//   backgroundColor:'lightyellow',
//   borderRadius:'12px'
// }))

const Cardcomponent = (props) => {
  const { data, myfunc } = props;

  console.log(props);
  const Cards = styled("div")(() => ({
    margin: "10px",
    // backgroundColor:myfunc === "light"? "black" : "white",
    padding: "20px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    // border:'2px solid red'
  }));

const Cardcontent=styled(CardContent)(()=>({
  // border:"3px solid black",
    border:myfunc==='light'?'4px solid black':'4px solid blue',
}))

  const StyledTypography = styled(Typography)(() => ({
    variant: "h6",
    color: myfunc === "light" ? "black": "blue" ,
    fontWeight: "600",
    backgroundColor:"white",
    // backgroundColor: myfunc === "light" ? "black" : "aqua",
    borderRadius: "12px",
    // border:'2px solid red'

  }));

  return (
    <>
      <Cards>
        <Card>
          <Cardcontent>
            <StyledTypography>Name is {data.name}</StyledTypography>
            <StyledTypography>Age is {data.age}</StyledTypography>
            <StyledTypography>City is {data.city}</StyledTypography>
          </Cardcontent>
        </Card>
      </Cards>
    </>
  );

};

export default Cardcomponent;
