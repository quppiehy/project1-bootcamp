import React from 'react';
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

class TablePagination extends React.Component {
  render () {
    const theme = useTheme();
    const {count, page,rowsPerPage, onPageChange} = this.props;

    const handleFirstPageButtonClick=(event) => {
      onPageChange(event,0);
    };
    const handleBackButtonClick=(event) => {
      onPageChange(event,page-1);
    };
    const handleNextButtonClick=(event) => {
      onPageChange(event, page+1);
    };
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0,Math.ceil(count/rowsPerPage)-1)
      );
    };
    
    return ( 
      <Box sx={{flexShrink:0,ml:2.5}}>
        <IconButton onclick={handleFirstPageButtonClick}
        disabled={page ===0} aria-label="first page">
          {theme.direction === "rtl" ? <LastPageIcon/>: <FirstPageIcon/>}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page===0} aria-label="previous page"> 
        {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
        </IconButton>
      </Box>)
  }
}
    
  TablePaginationActions.propTypes={
    count: this.propTypes.number.isRequired,onPageChange:this.propTypes.func.isRequired,page:this.propTypes.number.isRequired, rowsPerPage:this.propTypes.number.isRequired};

  class CustomPaginationActionsTable extends React.Component {
    constructor(props) {
      super(props); 
      this.state={
        page:0;
        rowsPerPage: 5,
      };
    }

    handleChangePage=(event,newPage) => {
      this.setState({page:newPage});
    };

    handleChangeRowsPerPage=(event) => {
      this.setState({rowsPerPage:parseInt(event.target.value, 10), page:0})
    }

    render () {
      const {page, rowsPerPage} = this.state;
      //Avoid a layout jump when reaching the last page with empty rows.
      const emptyRows = page>0?Math.max(0, (1+page) * rowsPerPage - rowsPerPage.length) : 0;
      return ()
    }
    }
