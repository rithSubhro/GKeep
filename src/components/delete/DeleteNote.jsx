import { useContext } from 'react';
import { Card,CardActions, CardContent, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { RestoreFromTrashOutlined as Restore, DeleteForeverOutlined as Delete} from '@material-ui/icons';
import React from 'react'
import { DataContext } from '../../context/DataProvider';

const StyledCard = styled(Card)`
    width: 240px;
    margin: 8px;
    box-shadow: none;
    border: 1px solid #e0e0e0;
    border-radius: 8px
`

const DeleteNote = ({note}) => {

    const { notes, setNotes, setArchiveNotes, deletedNotes , setDeletedNotes } = useContext(DataContext);

    const restoreNote = (note)=> {
        const updatedNotes = deletedNotes.filter(data => data.id !== note.id)
        setDeletedNotes(updatedNotes);
        setNotes(prevArr=> [note,...prevArr]);
    }
    const deleteNote= (note)=>{
        const updatedNotes = notes.filter(data => data.id !== note.id)
        setDeletedNotes(updatedNotes);
    }

  return (
    <StyledCard>
        <CardContent>
            <Typography>{note.heading}</Typography>
            <Typography>{note.text}</Typography>
        </CardContent>
        <CardContent>
            <Delete fontSize='medium'
                style ={{float: 'right',margin: '2px'}}
                onClick={()=> deleteNote(note)}/>
            <Restore 
                fontSize='medium'
                style ={{float: 'right',margin: '2px'}}
                onClick={()=> restoreNote(note)}
            />
        </CardContent>
    </StyledCard>
  )
}

export default DeleteNote;