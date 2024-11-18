import React from 'react'
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import  './App.css'
import Editbutton from './Editbutton';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';
import AdvanceSearch from './AdvanceSearch';
import AnalyticsView from './AnalyticsView';


export default function Create() {

    return (
        <div>
  
        <div class="middle">
            <div class="btn-group-1" >
              <Button variant="contained">PREDICT</Button>
              <AnalyticsView />
              <AdvanceSearch />
            </div>

            <div class="refresh">
                <Button variant='outlined'> <RefreshIcon /></Button>
            </div>
  
            <div>
              <form class="" action="index.html" method="post">
                <input type="text"class="search"  placeholder="Customer id" />
              </form>
            </div>
  
            <div class="btn-group-2">
              <AddButton /> 
              <Editbutton/>
              <DeleteButton />
             
            </div>
        </div>


        </div>
  

    )
  }
  