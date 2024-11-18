
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import { Data } from '../services/data';


const Grid = (props) => {
  const [rows, setRows] = useState([]);
  const [headCells, setColumn] = useState([]);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // check change and submit fro edit Button
  const checkHandler = (e, row_id) => {
    if (e.target.checked) {
      let editData = rows.filter(row => row.id === row_id)[0];
      props.checkHandler(e.target.checked,editData, row_id);
    }
    else
    {
      let editData = rows.filter(row => row.id === row_id)[0];
      props.checkHandler(e.target.checked,editData, row_id)
    }
  };
  //for DataLoading
  const getResponse = async () => {
    let response = await Data();
    handelResponse(response);
  };
  const handelResponse = (res) => {
    setRows(res.rows);
    setColumn(res.headCells);
  };
  //For Selecting And Sorting
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (newPage) => {
    console.log(newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


  //making component for table head
  function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
      props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              sx={{color: 'white'}}
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all id',
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              sx={{color: 'white'}}
              key={headCell.id}
              align='left'
              padding='normal'
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };
  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };


  useEffect(() => {
      getResponse();
  },[])

  useEffect(() => {
    if(props.res)
    handelResponse(props.res)
  }, [props.res])


  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, color: 'white'}}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750, backgroundColor: '#2d4351', }}
            aria-labelledby="tableTitle"
            size='medium'
          >
            <EnhancedTableHead
              onSelectAllClick={handleSelectAllClick}
              order={order}
              orderBy={orderBy}
              numSelected={selected.length}
              rowCount={rows.length}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          sx={{color: 'white'}}
                          onClick={(e) => checkHandler(e, row.id)}
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{color: 'white'}} >{row.id}</TableCell>
                      <TableCell sx={{color: 'white'}} align="left">{row.business_code}</TableCell>
                      <TableCell sx={{color: 'white'}} align="left">{row.cust_number}</TableCell>
                      <TableCell sx={{color: 'white'}} align="left">{row.clear_date}</TableCell>
                      <TableCell sx={{color: 'white'}} align="left">{row.buisness_year}</TableCell>
                      <TableCell sx={{color: 'white'}} align="left">{row.doc_id}</TableCell>
                      <TableCell sx={{color: 'white'}} align="left">{row.posting_date}</TableCell>
                      <TableCell sx={{color: 'white'}} align="left">{row.document_create_date}</TableCell>
                      <TableCell sx={{color: 'white'}} align="left">{row.document_create_date1}</TableCell>
                      <TableCell sx={{color: 'white'}} align="left">{row.due_in_date}</TableCell>
                      <TableCell sx={{color: 'white'}} align="left">{row.invoice_currency}</TableCell>
                      <TableCell sx={{color: 'white'}} align="left">{row.document_type}</TableCell>
                      <TableCell sx={{color: 'white'}} align="left">{row.posting_id}</TableCell>
                      <TableCell sx={{color: 'white'}} align="left">{row.area_business}</TableCell>
                      <TableCell sx={{color: 'white'}} align="left">{row.total_open_amount}</TableCell>
                      <TableCell sx={{color: 'white'}} align="left">{row.baseline_create_date}</TableCell>
                      <TableCell sx={{color: 'white'}} align="left">{row.cust_payment_terms}</TableCell>
                      <TableCell sx={{color: 'white'}} align="left">{row.invoice_id}</TableCell>
                      <TableCell sx={{color: 'white'}} align="left">{row.isOpen}</TableCell>
                      <TableCell sx={{color: 'white'}} align="left">{row.aging_bucket}</TableCell>
                      <TableCell sx={{color: 'white'}} align="left">{row.is_deleted}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{backgroundColor: '#2d4351', color: 'white'}}
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(event,newPage) => handleChangePage(newPage)}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default Grid;