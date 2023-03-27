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
  }));

  const StyledTypography = styled(Typography)(() => ({
    variant: "h6",
    color: myfunc === "light" ? "black": "blue" ,
    fontWeight: "600",
    backgroundColor:"white",
    // backgroundColor: myfunc === "light" ? "black" : "aqua",
    borderRadius: "12px",
  }));

  return (
    <>
      <Cards>
        <Card>
          <CardContent>
            <StyledTypography>Name is {data.name}</StyledTypography>
            <StyledTypography>Age is {data.age}</StyledTypography>
            <StyledTypography>City is {data.city}</StyledTypography>
          </CardContent>
        </Card>
      </Cards>
    </>
  );

};

export default Cardcomponent;
