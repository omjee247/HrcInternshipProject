import React from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import Button from '@mui/material/Button';

export default function Refresh () {

    return (
        <Button 
          variant="outlined"
          onClick={() => window.location.reload(false)}
          >
          <RefreshIcon/>
        </Button>
    );
  };