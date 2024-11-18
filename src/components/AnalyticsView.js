import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default function AnalyticsView({open,clear_date_from, clear_date_to, due_in_date_from, due_in_date_to, baseline_create_date_from, baseline_create_date_to, invoice_currencyy, handleClose, handleClickOpen, changeHandler, submitHandler}) {

const mystyle = {
  borderRadius: 3,
  backgroundColor: "white",
};

  return (
    <div>

    <Button style={{color:"white"}} variant="outlined" onClick={handleClickOpen}>
        ANALYTICS VIEW
    </Button>
    
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle  style={{color:"white",backgroundColor:"#283a46"}}>Analytics View</DialogTitle>
        <DialogContent  style={{color:"white",backgroundColor:"#283a46"}}>
          <DialogContentText>
    
    <Box
    component="form"
    sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
    }}
    noValidate
    autoComplete="off" 
    >
    <Grid style={{color:"white"}} container spacing={3}>
      <Grid item xs={6}>
        Clear Date
        <TextField style={mystyle} margin="dense" id="clear_date_from" value={clear_date_from} label="" type="date" variant="standard" onChange={changeHandler}/>
            <TextField style={mystyle} id="clear_date_to" label="" value={clear_date_to} type="date" variant="standard" onChange={changeHandler}/>

      </Grid>
      <Grid item xs={6}>
        Due Date
        <TextField style={mystyle} id="due_in_date_from" label="" value={due_in_date_from} margin="dense" type="date" variant="standard" onChange={changeHandler}/>
            <TextField style={mystyle} id="due_in_date_to" label="" value={due_in_date_to} type="date" variant="standard" onChange={changeHandler}/>

      </Grid>
      <Grid item xs={6}>
        Baseline Create Date
        <TextField style={mystyle} id="baseline_create_date_from" label="" value={baseline_create_date_from} type="date" margin="dense" variant="standard" onChange={changeHandler}/>
            <TextField style={mystyle} id="baseline_create_date_to" label="" value={baseline_create_date_to} type="date" variant="standard" onChange={changeHandler}/>

      </Grid>
      <Grid item xs={6}>
        Invoice Currency
      <TextField style={mystyle} id="invoice_currencyy" label="Invoice Currency" value={invoice_currencyy} variant="standard" onChange={changeHandler}/>

      </Grid>
    </Grid>
  </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{backgroundColor:"#283a46"}}>
          <Button style={{color:"white",borderColor:"white"}}
            fullWidth={true} type="submit" variant="outlined" onClick={submitHandler}>SUBMIT</Button>
          <Button style={{color:"white",borderColor:"white"}}
            fullWidth={true} variant="outlined" onClick={handleClose}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </div>

  );
}
