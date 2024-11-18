import React, { useState } from 'react';
import './App.css';
import Grid from './components/grid2';
import BoxButton from './components/BoxButton'
import Footer from './components/footer'
import Header from './components/header'

function App() {
  const [editData, setEdit] = useState([]);
  const [row_id, setId] = useState([]);
  const [res, setRes] = useState();
  const [count, setCount] = useState(0);

  const checkHandler = (c,index, index2) => {
    if (c) {
      setEdit((editData)=> {return [...editData,index]});
      setId((row_id)=> {return [...row_id,index2]});
      setCount(count + 1);
    }
    else {
      setEdit((editData)=>{return editData.filter(ed => ed !== index )})
      setId((row_id)=>{return row_id.filter(id => id !== index2 )})
      setCount(count - 1);
    }
  };
  const responseHandler = (S_res) => {
    setRes(S_res)
  }
  return (
    <div className="App">
      <Header />
      <section className='buttons'>
        <BoxButton
          id={row_id}
          editData={editData}
          responseHandler={responseHandler}
          count={count}
        />
      </section>
      <Grid
        checkHandler={checkHandler}
        res={res}
      />
      <Footer />
    </div>
  );
}

export default App;
