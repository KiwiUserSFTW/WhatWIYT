import React, { ChangeEventHandler } from 'react';
import { AppBar, Button, Toolbar, Typography, Switch } from '@mui/material';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { useAction } from '../hooks/useAcrion';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '14ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
const DEFAULT_CITY_NAME = 'London'

let status = true;
const AppMapsBar: React.FC = () => {
    let [rotateLeftIconStyles, setRotateLeftIconStyles] = useState(
        {
            cursor:'pointer',
            mr: 10,
            transform: 'rotate(0deg)',
            transition: '1s'
        });
    let [nameCity, setNameCity] = useState(DEFAULT_CITY_NAME);

    const {getCityCode, setLoading, setEditing } = useAction();
    

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setNameCity(e.target.value);
    }

    const reloadFetch = () => {
        if(status) {
            status = false;
            setLoading(status)
        }else {
            status = true;
            setLoading(status)
        }
    }
    const editStatusChange = (e:any) => {
        setEditing(e.target.checked)
        
    }
   
    const handleSubmit = () => {
        getCityCode(nameCity)
        setNameCity('')
    }
    const rotateAnimation = () => {
        setRotateLeftIconStyles(
            {   
                cursor:'pointer',
                mr: 10,
                transform: 'rotate(-360deg)',
                transition: '0.7s',

            });
        setTimeout(() => {
            setRotateLeftIconStyles({
                cursor:'pointer',
                mr: 10,
                transform: 'rotate(0deg)',
                transition: '1s'
            })
        }, 1000)
    }
    return (
        <AppBar position="static" color='inherit' sx={{ flexGrow: 1, display: 'flex' }}>
            <Toolbar>
{/*remark */}
                <RotateLeftIcon sx={rotateLeftIconStyles} fontSize='large' onClick={() => {rotateAnimation(); reloadFetch()}} />


                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    What is the weather in your town ?
                </Typography>
                <Typography>
                    Editing
                </Typography>
                <Switch onChange = {editStatusChange}color='warning'/>

                <Search sx={{ mr: 2, marginRight:"5%"}} onChange={handleChange}>
                    
                    <StyledInputBase
                        placeholder="What`s your town ?"
                        inputProps={{ 'aria-label': 'search' }}
                        value = {nameCity}
                    />
                </Search>
                <Button sx={{ edge: 'end', color: 'black', transition: '1s' }} onClick={handleSubmit}> add </Button>
            </Toolbar>

        </AppBar>
    )
}

export default AppMapsBar;