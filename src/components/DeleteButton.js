import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
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

export default function AddButton({open,handleClose,handleClickOpen,submitHandlerD}) {

  const classes = useStyles();

  return (
    <div>
   <Button style={{color:"white"}} variant="outlined" onClick={handleClickOpen} >DELETE</Button>
          <Dialog
          open={open}
          onClose={handleClose}
          classes={{ paper: classes.dialogPaper }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Delete Records"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" style={{ color: "white" }}>
                Are you sure you want to delete these record[s] ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button style={{ color: "white", borderColor: "white" }} fullWidth={true} variant='outlined' onClick={handleClose}> CANCEL </Button>
            <Button style={{ color: "white", borderColor: "white" }} fullWidth={true} variant='outlined' onClick={submitHandlerD} autoFocus> DELETE </Button>
          </DialogActions>
      </Dialog>
    </div>

  );
}
