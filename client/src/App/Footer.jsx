import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const Footer = ({rowsPerPage, page, data, handleChangePage, handleChangeRowsPerPage}) => {
    return (
    <TableFooter>
        <TableRow>
            <TableCell>
                <TablePagination
                    labelRowsPerPage={''}
                    rowsPerPageOptions={[]}
                    component="div"
                    count={data && data.length ? data.length : 0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={handleChangePage ? handleChangePage : null}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </TableCell>
        </TableRow>
    </TableFooter>
    )
}

export default Footer