import React from 'react';
import { Typography, styled , CardContent, Card } from '@mui/material';

const Cards = styled('div')(() => ({
  margin: '10px',
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
}))

const StyledTypography= styled(Typography)(()=>({
  variant:'h6',
  color:'blue',
  fontWeight:'600',
  backgroundColor:'lightyellow',
  borderRadius:'12px'
}))

const Cardcomponent = (props) => {
  const {data} = props;
  return (
    <>
    <Cards>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          
          <StyledTypography>Name is {data.name}</StyledTypography>

          <StyledTypography>Age is {data.age}</StyledTypography>

          <StyledTypography>City is {data.city}</StyledTypography>

        </CardContent>
      </Card>

    </Cards>
      </>
  )
}

export default Cardcomponent;