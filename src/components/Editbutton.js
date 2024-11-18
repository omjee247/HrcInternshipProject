import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    backgroundColor: "#283a46 !important",
    color: "#FFFFFF !important",
  },
  txtBox: {
    backgroundColor: "#FFFFFF !important",
    borderRadius: "0.3rem !important",
  },
}));

export default function Editbutton({open, invoice_currency, cust_payment_terms, handleClose, handleClickOpen, changeHandlerE, submitHandlerE, count}) {
  
  const classes = useStyles();
  const [dis, setDis] = useState(true);

  useEffect(() => {
    if(count === 1)
    {
      setDis(false);
    }
    else
    {
      setDis(true);
    }
  },[count])
  return (
    <div>

      <Button style={{color:"white"}} disabled={dis} variant="outlined" onClick={handleClickOpen}>
        EDIT
      </Button>
      <Dialog 
        open={open} 
        onClose={handleClose}
        classes={{ paper: classes.dialogPaper }}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                      }}
                        noValidate
                        autoComplete="off"
                        >
      <TextField className={classes.txtBox} id="invoice_currency" label="Invoice Currency" value={invoice_currency} variant="filled" onChange={changeHandlerE}/>
      <TextField className={classes.txtBox} id="cust_payment_terms" label="Customer Payment Terms" value={cust_payment_terms} variant="filled" onChange={changeHandlerE}/>
    </Box>
  
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{ color: "white", borderColor: "white" }} fullWidth={true} type="submit" variant="outlined" onClick={submitHandlerE}>EDIT</Button>
          <Button style={{ color: "white", borderColor: "white" }} fullWidth={true} variant="outlined" onClick={handleClose}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
  