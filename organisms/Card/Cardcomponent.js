import React, { useState } from "react";
import { Typography, styled, CardContent, Card } from "@mui/material";
import { Cardcontent, Cards, StyledTypography } from "./CardComponentStyle";

const Cardcomponent = (props) => {
  const { data, value } = props;
  return (
    <>
      <Cards value={value}>
        <Card>
          <Cardcontent value={value}>
            <StyledTypography value={value}>
              Name is {data.name}
            </StyledTypography>
            <StyledTypography value={value}>Age is {data.age}</StyledTypography>
            <StyledTypography value={value}>
              City is {data.city}
            </StyledTypography>
          </Cardcontent>
        </Card>
      </Cards>
    </>
  );
};

export default Cardcomponent;
