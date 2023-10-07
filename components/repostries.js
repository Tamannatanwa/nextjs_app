import axios from "axios";
import { useSearchParams } from "next/navigation";
import  { useEffect, useState } from "react";
import Container from "@mui/material/Container";

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const Repostries = () => {
  const searchparams = useSearchParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const username = searchparams.get("username");
    if (username == null) return;
    axios.get(`https://api.github.com/users/${username}`).then((data) => {
      setUser(data.data);
      console.log(data);
      console.log(user);
    });
  }, [searchparams]);
  return (
    <div>
      <h4></h4>
    </div>
  );
};
export default Repostries;
