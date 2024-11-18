import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';

export default function AdvanceSearch({open,doc_id,invoice_id,cust_number,buisness_year,handleClose, handleClickOpen, changeHandler, submitHandler}) {

const mystyle = {
  borderRadius: 3,
  backgroundColor: "white",
};

  return (

    <div>
      <Button style={{color:"white"}} variant="outlined" onClick={handleClickOpen}>
        ADVANCE SEARCH
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{color:"white",backgroundColor:"#283a46"}}>Advance Search</DialogTitle>
        <DialogContent style={{color:"white",backgroundColor:"#283a46"}}>
          <DialogContentText>
            
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            
            <TextField  style={mystyle} id="doc_id" value={doc_id} label="Document ID" variant="standard" onChange={changeHandler}/>
            <TextField  style={mystyle} id="invoice_id" value={invoice_id} label="Invoice ID"  variant="standard" onChange={changeHandler}/>
            <TextField  style={mystyle} id="cust_number" value={cust_number} label="Customer Number" variant="standard" onChange={changeHandler}/>
            <TextField  style={mystyle} id="buisness_year" value={buisness_year} label="Business Year" variant="standard" onChange={changeHandler}/>
    
            </Box>
  
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{backgroundColor:"#283a46"}}>
          <Button style={{color:"white",borderColor:"white"}}
            fullWidth={true} type="submit" variant="outlined" onClick={submitHandler}>SEARCH</Button>
          <Button style={{color:"white",borderColor:"white"}}
           fullWidth={true} variant="outlined" onClick={handleClose}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </div>

  );
}
