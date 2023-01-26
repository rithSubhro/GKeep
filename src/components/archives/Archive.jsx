import { useContext } from 'react';
import { Card,CardActions, CardContent, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { UnarchiveOutlined as Unarchive, DeleteOutlineOutlined as Delete} from '@material-ui/icons';
import React from 'react'
import { DataContext } from '../../context/DataProvider';

const StyledCard = styled(Card)`
    width: 240px;
    margin: 8px;
    box-shadow: none;
    border: 1px solid #e0e0e0;
    border-radius: 8px
`

const Archive = ({note}) => {

    const { notes, setNotes, archiveNotes ,setArchiveNotes, setDeletedNotes } = useContext(DataContext);

    const UnarchiveNote = (note)=> {
        const updatedNotes = archiveNotes.filter(data => data.id !== note.id)
        setArchiveNotes(updatedNotes);
        setNotes(prevArr=> [note,...prevArr]);
    }
    const deleteNote= (note)=>{
        const updatedNotes = archiveNotes.filter(data => data.id !== note.id)
        setArchiveNotes(updatedNotes);
        setDeletedNotes(prevArr=> [note,...prevArr]);
    }

  return (
    <StyledCard>
        <CardContent>
            <Typography>{note.heading}</Typography>
            <Typography>{note.text}</Typography>
        </CardContent>
        <CardContent>
            <Unarchive 
                fontSize='medium'
                style ={{float: 'right',margin: '2px'}}
                onClick={()=> UnarchiveNote(note)}
            />
            <Delete fontSize='medium'
            style ={{float: 'right',margin: '2px'}}
            onClick={()=> deleteNote(note)}/>
        </CardContent>
    </StyledCard>
  )
}

export default Archive;