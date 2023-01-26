import { Box , Grid} from '@mui/material'
import { styled } from '@mui/material/styles'
import { useContext } from 'react'
import { DataContext } from '../../context/DataProvider';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { reorder } from '../../utils/common-utils';

import React from 'react'

//Components
import Form from './Form'
import Note from './Note'
import EmptyNotes from './EmptyNotes';


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

const Notes = () => {

    const { notes, setNotes } = useContext(DataContext);

    const onDragEnd = (result) => {
        if (!result.destination) 
          return;
    
        const items = reorder(notes, result.source.index, result.destination.index);    
        setNotes(items);
    }

  return (
    <>
    <Box>
        <DrawerHeader />
        <DrawerHeader />
    </Box>
    <Container style={{ margin:'auto'}}>
        <Form />
    </Container>
    <Box sx={{display: 'flex', width: '100%'}}>
        <Box sx={{p:10, width: '100%'}}>
        { notes.length > 0 ? 
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <Grid container style={{ marginTop: 16}}
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                {
                                    notes.map((note, index) => (
                                        <Draggable key={note.id} draggableId={note.id} index={index}>
                                            {(provided, snapshot) => (
                                                <Grid ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    item
                                                >
                                                    <Note note={note} />
                                                </Grid>
                                            )}
                                        </Draggable >
                                    ))
                                }
                                </Grid>
                            )}
                        </Droppable >
                    </DragDropContext>
                : <EmptyNotes /> }
        </Box>
    </Box>
    </>
  )
}

export default Notes