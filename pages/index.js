import * as React from 'react';
import { styled, AppBar, Toolbar, Typography, Button, blue} from '@mui/material';

import Cardcomponent from '../organisms/Cardcomponent';

const Styledbutton = styled(Button)(({ theme }) => ({
  color: 'inherit',
  variant: "contained",
  padding: theme.spacing(3)
}))

const Styledbutton2 = styled(Button)(({ theme }) => ({
  color: 'white',
  variant: "outlined",
  fontSize: 16,
  border: '1px solid black',
  backgroundColor: 'darkblue',
  borderColor: '#0063cc',
  padding: '6px 12px',
  borderRadius: '10px',
  size:'small',
  '&:hover': {
    backgroundColor: blue,
  },
}));

const Space=styled('div')(({theme})=>({
  paddingRight: '250px',
  [theme.breakpoints.down('md')]: {
    width: '50px',
    paddingRight:'150px'
  },
}))

let arr = [
  {
    name: "kunal",
    age: 22,
    city: "Jaipur"
  },
  {
    name: "Mahesh",
    age: 24,
    city: "Jaipur"
  },
  {
    name: "Arnav",
    age: 24,
    city: "Jaipur"
  },
  {
    name: "Milind",
    age: 23,
    city: "Jaipur"
  }
]

export default function ButtonAppBar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>NavBar</Typography>

        <Space>
          <Styledbutton >Home</Styledbutton>
          <Styledbutton >About</Styledbutton>
          <Styledbutton >Contact</Styledbutton>
        </Space>

          <Styledbutton2 >Login</Styledbutton2>
          <Styledbutton2 >Signup</Styledbutton2>

        </Toolbar>
      </AppBar>

    {
       arr.map((item)=>(
        <Cardcomponent data={item} />
        )
        )
    }
      
    </>
  );
}