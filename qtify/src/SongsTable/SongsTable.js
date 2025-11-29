import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import styles from './SongsTable.module.css';
import { useSnackbar } from 'notistack';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
        style={{color: "white"}}
      >
        {theme.direction === 'rtl' ? <LastPageIcon style={{color: "white"}}/> : <FirstPageIcon style={{color: "white"}}/>}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
        style={{color: "white"}}
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight style={{color: "white"}} /> : <KeyboardArrowLeft style={{color: "white"}}/>}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
        style={{color: "white"}}
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft style={{color: "white"}}/> : <KeyboardArrowRight style={{color: "white"}}/>}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
        style={{color: "white"}}
      >
        {theme.direction === 'rtl' ? <FirstPageIcon style={{color: "white"}}/> : <LastPageIcon style={{color: "white"}} />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};


// const rows = [{title : "hello", artist: "rahul", duration: "2345ms"},{title : "hello", artist: "ravi", duration: "777ms"}]

export default function SongsTable({songList = []}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const rows = [...songList];
  const {enqueueSnackbar} = useSnackbar();
  
// let rows = [{title : "some", artist: "rahul", durationInMs: "2345ms"},{title : "hello", artist: "ravi", durationInMs: "777ms"}]




  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSongClick = ()=>{
     enqueueSnackbar('We do not have songs copyright. This is a dummy webpage.', {variant: 'info', anchorOrigin: {vertical: 'bottom', horizontal: 'center'}});
  }
  return (
    <TableContainer component={Paper} sx={{padding: "24px", backgroundColor: "transparent"}}>
      <Table sx={{ minWidth: 500}} aria-label="custom pagination table">
         <TableHead>
             <TableRow>
           <TablePagination sx={{color: "white", fontFamily: "Poppins", backgroundColor: "transparent"}}
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: false,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
            </TableRow>
          
        </TableHead>
        <TableBody style={{color: "white", fontFamily: "Poppins"}}>
          <TableRow sx={{color: "white", fontFamily: "Poppins"}}>
                <TableCell sx={{color: "white", fontFamily: "Poppins", textDecorationLine: "underline"}} align="left">
                  Title
                </TableCell >
                <TableCell sx={{color: "white", fontFamily: "Poppins", textDecorationLine: "underline"}} align="left">
                  Artist
                </TableCell>
                <TableCell sx={{color: "white", fontFamily: "Poppins", textDecorationLine: "underline"}} align="right">
                  Duration
                </TableCell>
            
            </TableRow>  
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows).map((row) => (
            <TableRow key={row.id} onClick={handleSongClick}>
              <TableCell  style={{color: "white", fontFamily: "Poppins"}} align="left" >
                <div className={styles.cellDiv}><img className={styles.songPoster} src={row.image} alt='songPoster'/>{row.title}</div>
              </TableCell>
              <TableCell style={{color: "white", fontFamily: "Poppins"}} align="left">
                {row.artists[0]}
              </TableCell>
              <TableCell style={{color: "white", fontFamily: "Poppins"}} align="right">
                {row.durationInMs}
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
       
      </Table>
    </TableContainer>
  );
}
