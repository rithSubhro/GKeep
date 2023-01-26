import { Box } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import { styled } from '@mui/material/styles'
import Notes from './notes/Notes'
import SwipeDrawer from './SwipeDrawer'
import DeleteNotes from './delete/DeleteNotes'
import Archives from './archives/Archives'

const DrawerHeader = styled('div')(({ theme })=>({
    ...theme.mixins.toolbar,
}));

const Home = () => {
  return (
    <Box >
        <Router>
            <SwipeDrawer />
            <Routes>
                <Route path="/" element={<Notes />} />
                <Route path="/archive" element={<Archives />} />
                <Route path="/delete" element={<DeleteNotes />} />
            </Routes>
        </Router>
        
    </Box>
  )
}

export default Home