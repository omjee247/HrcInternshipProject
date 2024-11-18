import * as React from 'react';
import Button from '@mui/material/Button';

export default function AddButton({clickHandler}) {
  return (
    <div>
   <Button variant="contained" onClick={clickHandler} >PREDICT</Button>
    </div>
  );
}
