import { ButtonGroup } from "@material-ui/core";
import React, { useState } from 'react';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';
import Editbutton from "./Editbutton";
// import RefreshIcon from "@material-ui/icons/Refresh";
// import Button from '@mui/material/Button';
import Refresh from './refresh';
import { addData, edit, Delete, Search_bar, advanceSearch, analyticView, predictData } from '../services/data';
import Searchbar from './Searchbar';
import AdvanceSearch from './AdvanceSearch';
import AnalyticsView from './AnalyticsView';
import Predict from './Predict';
import axios from 'axios';
import { ChartBar } from './Chart';
import './style.css';

const BoxButton = ({ id, editData, responseHandler, count }) => {
    console.log(editData);
    const [open, setOpen] = useState(false);
    const [openE, setOpenE] = useState(false);
    const [openD, setOpenD] = useState(false);
    const [openAS, setOpenAS] = useState(false);
    const [openAV, setOpenAV] = useState(false);
    const [openC, setOpenC] = useState(false);
    // const [D_id,setD] = useState([]);
    const [search_bar, setSearch] = useState({ search: '' });
    const { search } = search_bar;
    const [add, setAdd] = useState({ business_code: '', cust_number: '', clear_date: '', buisness_year: '', doc_id: '', posting_date: '', document_create_date: '', due_in_date: '', invoice_currency: '', document_type: '', posting_id: '', total_open_amount: '', baseline_create_date: '', cust_payment_terms: '', invoice_id: '' });
    const { business_code, cust_number, clear_date, buisness_year, doc_id, posting_date, document_create_date, due_in_date, invoice_currency, document_type, posting_id, total_open_amount, baseline_create_date, cust_payment_terms, invoice_id } = add;
    const [view, setView] = useState({ clear_date_from: '', clear_date_to: '', due_in_date_from: '', due_in_date_to: '', baseline_create_date_from: '', baseline_create_date_to: '', invoice_currencyy: '' })
    const { clear_date_from, clear_date_to, due_in_date_from, due_in_date_to, baseline_create_date_from, baseline_create_date_to, invoice_currencyy } = view;
    const [chart, setChart] = useState({ NOC: [], business: [], USD_COUNT: [], CAD: [], TOA: [] })
    //handle open and close
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickOpenE = () => {
        setOpenE(true);
        const { invoice_currency, cust_payment_terms } = editData[0];
        setAdd({ ...add, 'invoice_currency': invoice_currency, 'cust_payment_terms': cust_payment_terms });
    };
    const handleClickOpenD = () => {
        setOpenD(true);
    };
    const handleClickOpenAS = () => {
        setOpenAS(true);
    };
    const handleClickOpenAV = () => {
        setOpenAV(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseE = () => {
        setOpenE(false);
    };
    const handleCloseD = () => {
        setOpenD(false);
    };
    const handleCloseAS = () => {
        setOpenAS(false);
    };
    const handleCloseAV = () => {
        setOpenAV(false);
    };
    const handleCloseC = () => {
        setOpenC(false);
    };
    //on Change and submit for Add Button
    const changeHandler = (e) => {
        const { id, value } = e.target;
        setAdd({ ...add, [id]: value });
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        setOpen(false);
        let response = await addData(add);
        if (response) {
            setAdd({ business_code: '', cust_number: '', clear_date: '', buisness_year: '', doc_id: '', posting_date: '', document_create_date: '', due_in_date: '', invoice_currency: '', document_type: '', posting_id: '', total_open_amount: '', baseline_create_date: '', cust_payment_terms: '', invoice_id: '' });
            window.location.reload();
        }
    };
    // check change and submit fro edit Button
    const changeHandlerE = (e) => {
        const { id, value } = e.target;
        setAdd({ ...add, [id]: value });
    };
    const submitHandlerE = async (e) => {
        e.preventDefault();
        setOpenE(false);
        let response = await edit({ id, invoice_currency, cust_payment_terms });
        if (response) {
            setAdd({ invoice_currency: '', cust_payment_terms: '' });
            window.location.reload();
        }
    };
    // submitHandler for delete
    const submitHandlerD = async (e) => {
        e.preventDefault();
        setOpenD(false);
        await Delete(id);
        window.location.reload();
    }
    // change handler and submit for search_bar
    const changeHandlerS = (e) => {
        const { id, value } = e.target;
        setSearch({ ...search_bar, [id]: value });
    };
    const submitHandlerS = async (e) => {
        if (e.key === 'Enter') {
            let response = await Search_bar(search);
            responseHandler(response);
            if (response) {
                setSearch({ search: '' });
            }
        }
    }
    // change handler and submit handler for advance search
    const changeHandlerAS = (e) => {
        const { id, value } = e.target;
        setAdd({ ...add, [id]: value });
    }
    const submitHandlerAS = async (e) => {
        e.preventDefault();
        setOpenAS(false);
        let response = await advanceSearch({ doc_id, invoice_id, cust_number, buisness_year });
        if (response) {
            setAdd({ doc_id: '', invoice_id: '', cust_number: '', buisness_year: '' });
        }
        responseHandler(response);
    }
    // change and submit handler for analytic view
    const changeHandlerAV = (e) => {
        const { id, value } = e.target;
        setView({ ...view, [id]: value });
    }
    const submitHandlerAV = async (e) => {
        e.preventDefault();
        setOpenAV(false);
        let response = await analyticView(view);
        setOpenC(true);
        const { NOC, business, USD_COUNT, CAD, TOA } = response
        setChart({ "NOC": NOC, "business": business, "USD_COUNT": USD_COUNT, "CAD": CAD, "TOA": TOA })
        if (response) {
            setView({clear_date_from: '', clear_date_to: '', due_in_date_from: '', due_in_date_to: '', baseline_create_date_from: '', baseline_create_date_to: '', invoice_currency: ''});
        }
    }
    // click handler predict for predict button
    const clickHandlerP = () => {
        var arr = []
        for(var i = 0; i < editData.length; i++)
        {
            const { doc_id } = editData[i];
            arr.push(parseInt(doc_id))
        }
    
        axios.post('http://127.0.0.1:5000/get_prediction', {
            data: arr
        }
        ).then((response) => {
            console.log(response.data);
            submitHandlerP(response.data[0])
        })
        .catch((err) => {
            console.log(err);
        })

    }
    const submitHandlerP = async (res) => {
        let response = await predictData(res);
        console.log(response);
        // if(response)
        // {
        //     window.location.reload();
        // }
    }
    return (
        <>
            <ButtonGroup >
                <Predict
                    clickHandler={clickHandlerP}
                />
                <AnalyticsView
                    open={openAV}
                    clear_date_from={clear_date_from}
                    clear_date_to={clear_date_to}
                    due_in_date_from={due_in_date_from}
                    due_in_date_to={due_in_date_to}
                    baseline_create_date_from={baseline_create_date_from}
                    baseline_create_date_to={baseline_create_date_to}
                    invoice_currencyy={invoice_currencyy}
                    handleClose={handleCloseAV}
                    handleClickOpen={handleClickOpenAV}
                    changeHandler={changeHandlerAV}
                    submitHandler={submitHandlerAV}
                />
                <ChartBar
                    open={openC}
                    NOC={chart.NOC}
                    business={chart.business}
                    USD_COUNT={chart.USD_COUNT}
                    CAD={chart.CAD}
                    TOA={chart.TOA}
                    handelClose={handleCloseC}
                />
                <AdvanceSearch
                    open={openAS}
                    doc_id={doc_id}
                    invoice_id={invoice_id}
                    cust_number={cust_number}
                    buisness_year={buisness_year}
                    handleClose={handleCloseAS}
                    handleClickOpen={handleClickOpenAS}
                    changeHandler={changeHandlerAS}
                    submitHandler={submitHandlerAS}
                />
            </ButtonGroup>
            <Refresh/>
            <Searchbar
                className="searchBox"
                search={search}
                changeHandlerS={changeHandlerS}
                submitHandlerS={submitHandlerS}
            />
            <ButtonGroup className="btnGrp">
                <AddButton
                    open={open}
                    business_code={business_code}
                    cust_number={cust_number}
                    clear_date={clear_date}
                    buisness_year={buisness_year}
                    doc_id={doc_id}
                    posting_date={posting_date}
                    document_create_date={document_create_date}
                    due_in_date={due_in_date}
                    invoice_currency={invoice_currency}
                    document_type={document_type}
                    posting_id={posting_id}
                    total_open_amount={total_open_amount}
                    baseline_create_date={baseline_create_date}
                    cust_payment_terms={cust_payment_terms}
                    invoice_id={invoice_id}
                    handleClose={handleClose}
                    handleClickOpen={handleClickOpen}
                    changeHandler={changeHandler}
                    submitHandler={submitHandler}
                />
                <Editbutton
                    open={openE}
                    invoice_currency={invoice_currency}
                    cust_payment_terms={cust_payment_terms}
                    handleClose={handleCloseE}
                    handleClickOpen={handleClickOpenE}
                    changeHandlerE={changeHandlerE}
                    submitHandlerE={submitHandlerE}
                    count={count}
                />
                <DeleteButton
                    open={openD}
                    handleClose={handleCloseD}
                    handleClickOpen={handleClickOpenD}
                    submitHandlerD={submitHandlerD}
                />
            </ButtonGroup>
        </>
    )
}

export default BoxButton;
