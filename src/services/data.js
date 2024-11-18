import axios from "axios";

export const Data = async () => {
    let response = await axios.get("http://localhost:8080/hrc_proj/DataLoading");
    return response.data;
}
export const addData = async ({ business_code, cust_number, clear_date, buisness_year, doc_id, posting_date, document_create_date, invoice_currency, document_type, posting_id, total_open_amount, baseline_create_date, cust_payment_terms, invoice_id }) => {
    let data = "business_code=" + business_code + "&cust_number=" + cust_number + "&clear_date=" + clear_date + "&buisness_year=" + buisness_year + "&doc_id=" + doc_id + "&posting_date=" + posting_date + "&document_create_date=" + document_create_date + "&invoice_currency=" + invoice_currency + "&document_type=" + document_type + "&posting_id=" + posting_id + "&total_open_amount=" + total_open_amount + "&baseline_create_date=" + baseline_create_date + "&cust_payment_terms=" + cust_payment_terms + "&invoice_id=" + invoice_id;
    let response = await axios.get("http://localhost:8080/hrc_proj/addData?" + data);
    return response.data;
}
export const edit = async ({id, invoice_currency, cust_payment_terms}) => {
    let data = "invoice_currency=" + invoice_currency + "&cust_payment_terms=" + cust_payment_terms + "&id=" + id;
    let response = await axios.get("http://localhost:8080/hrc_proj/update?" + data);
    return response.data;
}
export const Delete = async (id) => {
    let jsonObj = JSON.stringify(Object.assign({},id));
    let data = "id=" + jsonObj;
    await axios.get("http://localhost:8080/hrc_proj/Delete",{params:{id:jsonObj}});
}
export const Search_bar = async (search) => {
    let data = "cust_number=" + search;
    let response = await axios.get("http://localhost:8080/hrc_proj/Search?" + data);
    return response.data;
}
export const advanceSearch = async ({doc_id,invoice_id,cust_number,buisness_year}) => {
    let data = "doc_id=" + doc_id + "&invoice_id=" + invoice_id + "&cust_number=" + cust_number + "&buisness_year=" + buisness_year;
    let response = await axios.get("http://localhost:8080/hrc_proj/Advance_Serach?" + data);
    return response.data;
}
export const analyticView = async ({clear_date_from, clear_date_to, due_in_date_from, due_in_date_to, baseline_create_date_from, baseline_create_date_to, invoice_currencyy}) => {
    let data = "clear_date_from=" + clear_date_from + "&clear_date_to=" + clear_date_to + "&due_in_date_from=" + due_in_date_from + "&due_in_date_to=" + due_in_date_to + "&baseline_create_date_from=" + baseline_create_date_from + "&baseline_create_date_to=" + baseline_create_date_to + "&invoice_currencyy=" + invoice_currencyy;
    let response = await axios.get("http://localhost:8080/hrc_proj/AnalyticView?" + data)
    return response.data;
}
export const predictData = async ({aging_bucket,doc_id}) => {
    let data = "aging_bucket=" + aging_bucket + "&doc_id=" + doc_id;
    let response = await axios.get("http://localhost:8080/hrc_proj/Predict?" + data);
    return response.data;
}