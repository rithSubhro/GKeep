import { useContext } from 'react';
import { Card,CardActions, CardContent, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete} from '@material-ui/icons';
import React from 'react'
import { DataContext } from '../../context/DataProvider';

const StyledCard = styled(Card)`
    width: 240px;
    margin: 8px;
    box-shadow: none;
    border: 1px solid #e0e0e0;
    border-radius: 8px
`

const Note = ({note}) => {

    const { notes, setNotes, setArchiveNotes, setDeletedNotes } = useContext(DataContext);

    const archiveNote = (note)=> {
        const updatedNotes = notes.filter(data => data.id !== note.id)
        setNotes(updatedNotes);
        setArchiveNotes(prevArr=> [note,...prevArr]);
    }
    const deleteNote= (note)=>{
        const updatedNotes = notes.filter(data => data.id !== note.id)
        setNotes(updatedNotes);
        setDeletedNotes(prevArr=> [note,...prevArr]);
    }

  return (
    <StyledCard>
        <CardContent>
            <Typography>{note.heading}</Typography>
            <Typography>{note.text}</Typography>
        </CardContent>
        <CardContent>
            <Archive 
                fontSize='medium'
                style ={{float: 'right',margin: '2px'}}
                onClick={()=> archiveNote(note)}
            />
            <Delete fontSize='medium'
            style ={{float: 'right',margin: '2px'}}
            onClick={()=> deleteNote(note)}/>
        </CardContent>
    </StyledCard>
  )
}

export default Note