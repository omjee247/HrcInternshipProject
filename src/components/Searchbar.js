import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function Searchbar({ search, changeHandlerS, submitHandlerS }) {
    return (
        <TextField
            style={{
                backgroundColor: "white",
                borderRadius: "6px",
            }}
            id="search"
            label="Search Customer Id"
            variant="filled"
            value={search}
            onChange={changeHandlerS}
            onKeyPress={submitHandlerS}
            size='small'
        />
    );
}
