import { Box , Grid} from '@mui/material'
import { styled } from '@mui/material/styles'
import { useContext } from 'react'
import { DataContext } from '../../context/DataProvider';

import React from 'react'

//Components
import Archive from './Archive'



const DrawerHeader = styled('div')(({ theme })=>({
    ...theme.mixins.toolbar,
}));

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 800px;
    padding: 10px 15px;
    border-radius: 8px;
    border-color: #e0e0e0;
    box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
    
`

const Archives = () => {

    const { archiveNotes } = useContext( DataContext ) ;

  return (
    <>
    <Box>
    </Box>
    <Container style={{ margin:'auto'}}>
    </Container>
    <Box sx={{display: 'flex', width: '100%'}}>
        <Box sx={{p:10, width: '100%'}}>
            <Grid container>
                {
                    archiveNotes.map(archive => (
                        <Grid item>
                            <Archive note={archive}/>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    </Box>
    </>
  )
}

export default Archives;