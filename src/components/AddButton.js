import * as React from 'react';
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
    maxWidth: "60rem !important",
    backgroundColor: "#283a46 !important",
    color: "#FFFFFF !important",
  },
  txtBox: {
    backgroundColor: "#FFFFFF !important",
    borderRadius: "0.3rem !important",
  },
}));

export default function AddButton({ open, business_code, cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id, handleClose, handleClickOpen, changeHandler, submitHandler }) {

  const classes = useStyles();
  return (
    <div>
      <Button style={{ color: "white", paddingLeft: "2rem", paddingRight: "2rem" }} variant="outlined" onClick={handleClickOpen}>
        ADD
      </Button>
      <Dialog 
        open={open} onClose={handleClose} 
        classes={{ paper: classes.dialogPaper }}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle>ADD</DialogTitle>
        <DialogContent>
          <DialogContentText>

            <Box
              component="form"
              sx={{ '& > :not(style)': { m: 1, width: '30ch' }, }}
              noValidate
              autoComplete="off"
            >
              <TextField className={classes.txtBox} id="business_code" label="Business" value={business_code} variant="outlined" onChange={changeHandler} />
              <TextField className={classes.txtBox} id="cust_number" label="Customer" value={cust_number} variant="outlined" onChange={changeHandler} />
              <TextField className={classes.txtBox} id="clear_date" label="Clear Date" value={clear_date} type="date" variant="filled" InputLabelProps={{ shrink: true }} onChange={changeHandler} />
              <TextField className={classes.txtBox} id="buisness_year" label="Business Year" value={buisness_year} variant="outlined" onChange={changeHandler} />
              <TextField className={classes.txtBox} id="doc_id" label="Document ID" value={doc_id} variant="outlined" onChange={changeHandler} />
              <TextField className={classes.txtBox} id="posting_date" label="Posting Date" value={posting_date} type="date" variant="filled" InputLabelProps={{ shrink: true }} onChange={changeHandler} />
              <TextField className={classes.txtBox} id="document_create_date" label="Document Create Date" value={document_create_date} type="date" variant="filled" InputLabelProps={{ shrink: true }} onChange={changeHandler} />
              <TextField className={classes.txtBox} id="due_in_date" label="Due Date" value={due_in_date} type="date" variant="filled" InputLabelProps={{ shrink: true }} onChange={changeHandler} />
              <TextField className={classes.txtBox} id="invoice_currency" label="Invoice Currency" value={invoice_currency} variant="outlined" onChange={changeHandler} />
              <TextField className={classes.txtBox} id="document_type" label="Document Type" value={document_type} variant="outlined" onChange={changeHandler} />
              <TextField className={classes.txtBox} id="posting_id" label="Posting ID" value={posting_id} variant="outlined" onChange={changeHandler} />
              <TextField className={classes.txtBox} id="total_open_amount" label="Total Open Amount" value={total_open_amount} variant="outlined" onChange={changeHandler} />
              <TextField className={classes.txtBox} id="baseline_create_date" label="Baseline create Date" value={baseline_create_date} type="date" variant="filled" InputLabelProps={{ shrink: true }} onChange={changeHandler} />
              <TextField className={classes.txtBox} id="cust_payment_terms" label="Customer Payment Term" value={cust_payment_terms} variant="outlined" onChange={changeHandler} />
              <TextField className={classes.txtBox} id="invoice_id" label="Invoice ID" value={invoice_id} variant="outlined" onChange={changeHandler} />
            </Box>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{ color: "white", borderColor: "white" }} fullWidth={true} type="submit" variant="outlined" onClick={submitHandler}>ADD</Button>
          <Button style={{ color: "white", borderColor: "white" }} fullWidth={true} variant="outlined" onClick={handleClose}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
