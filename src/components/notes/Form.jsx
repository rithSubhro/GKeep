import { TextField,ClickAwayListener } from '@mui/material'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles'
import React from 'react'
import { useState, useRef , useContext } from 'react'
import { v4 as uuid } from 'uuid';

import { DataContext } from '../../context/DataProvider'

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 800px;
    padding: 10px 15px;
    border-radius: 8px;
    border-color: #e0e0e0;
    // align-items: center;
    justify-content: center;
    min-height: 30px
    
`

const note ={
    id:'',
    heading: '',
    text: ''
}

const Form = () => {
    const [showTextField,setShowTextField] =useState(false);
    const [addNote, setAddNote ] = useState({...note, id:uuid()});
    

    const {notes, setNotes } =  useContext(DataContext);
    const containerRef = useRef();


    const onTextAreaClick = () =>{
        setShowTextField(true);
        containerRef.current.style.minHeight = '70px'
    }


    const handleClickAway =() =>{
        setShowTextField(false);
        containerRef.current.style.minHeight = '30px'
        setAddNote({...note, id: uuid()});

        if(addNote.heading || addNote.text){
            setNotes(prevArr => [addNote, ...prevArr]);
        }
        console.log(notes);
    }

    const onTextChange = (e) =>{
        // console.log(e.target.name,e.target.value);
        let changedNote = {...addNote, [e.target.name]: e.target.value}
        setAddNote(changedNote);
    }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
        <Container ref={containerRef}>
            {  showTextField &&
                <TextField 
                    placeholder='Title'
                    variant='standard'
                    InputProps={{disableUnderline: true}}
                    style={{marginBottom:'10px'}}
                    onChange={(e)=> onTextChange(e)}
                    name='heading'
                    value={addNote.heading}
                />
            }
            <TextField 
                placeholder='Take a note...'
                multiline
                maxRows={Infinity}
                variant='standard'
                InputProps={{disableUnderline: true}}
                onClick= {onTextAreaClick}
                onChange={(e)=> onTextChange(e)}
                name='text'
                value={addNote.text}
            />
        </Container>
    </ClickAwayListener>
  )
}

export default Form