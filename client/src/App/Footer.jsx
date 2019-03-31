import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({

  })

const Footer = ({classes, rowsPerPage, page, data, handleChangePage, handleChangeRowsPerPage}) => {

    return(
    <TableFooter className={classes.pageNav}>
        <TableRow>
        <TableCell>
            <TablePagination
                labelRowsPerPage={''}
                rowsPerPageOptions={[]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                    'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page',
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </TableCell>
        </TableRow>
    </TableFooter>
    )
}

export default withStyles(styles)(Footer)