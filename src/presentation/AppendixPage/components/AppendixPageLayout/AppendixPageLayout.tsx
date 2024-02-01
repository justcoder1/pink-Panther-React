import {
  Box,
  IconButton,
  Link,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';
import { FaTrash } from 'react-icons/fa';

import FormModal from '../../../../_utils/globals/forms/Modal/Modal';
import { AppendixProps } from '../../pages/use-appendix-page.view-model';
import './AppendixPageLayout.css';

const AppendixPageLayout: React.FC<AppendixProps> = ({ title, columns, rows, onDeleteClick, onFormClick }) => {
  return (
    <Stack justifyContent={'center'} alignItems={'center'}>
      <Box margin={10} sx={{ textAlign: 'center' }}>
        <Typography variant="h2" id="appendix_h2">
          {title}
        </Typography>
        <Stack alignItems={'end'} sx={{ margin: '20px 0px' }}>
          <FormModal buttonColor="success" modalButton="Add Reference"></FormModal>
        </Stack>
        {rows.length && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {columns.map((col, i) => (
                    <TableCell>{col}</TableCell>
                  ))}
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow key={`appendixTable_${i}`} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    {row.map((r, id) =>
                      id === 2 ? (
                        <TableCell key={`appendix_td_${i}_${id}`}>
                          <Link href={r.link} rel="noreferrer" target="_blank">
                            {r.reference}
                          </Link>
                        </TableCell>
                      ) : id !== 0 ? (
                        <TableCell key={`appendix_td_${i}_${id}`}>{r}</TableCell>
                      ) : null
                    )}
                    <TableCell key={`appendix_td_${i}_end`}>
                      <IconButton
                        key={`appendix_t_${i}`}
                        onClick={() => onDeleteClick(row[0], row[1])}
                        className="tableIcon"
                      >
                        <FaTrash title="delete" id="trashIcon" />
                      </IconButton>
                      {/* <AppendixModal buttonVariant='text' onFormClick={onFormClick}><FontAwesomeIcon icon="pencil" key={`appendix_p_${i}`} title='edit' id="pencilIcon" className="tableIcon" /></AppendixModal> */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Stack>
  );
};

export default AppendixPageLayout;
