import React from 'react';
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function Projects({innerRef}) {

   return (
      <Box ref={innerRef} component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
            justifyContent={'center'} minHeight={'calc(100vh - 175px)'} id={'home'}>
         <Box>
            <h1>Hi, this page is under <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>construction</span>⚙️</h1>
         </Box>
      </Box>
   )
}