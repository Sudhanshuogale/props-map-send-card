import styled from "@emotion/styled";
import { CardContent, Typography } from "@mui/material";

export const Cards = styled("div")(({ value }) => ({
  margin: "10px",
  padding: "20px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
}));

export const Cardcontent = styled(CardContent)(({ value }) => ({
  border: value === "light" ? "4px solid black" : "4px solid blue",
}));

export const StyledTypography = styled(Typography)(({ value }) => ({
  variant: "h6",
  color: value === "light" ? "black" : "blue",
  fontWeight: "600",
  backgroundColor: "white",
  borderRadius: "12px",
}));
