
import {
  Box,
  Button,
  Link,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import React, { useId } from 'react';
import { FaTrash } from 'react-icons/fa';

import FormModal from '../../../../_utils/globals/forms/Modal/Modal';
import { AppendixProps } from '../../pages/use-appendix-page.view-model';
import './AppendixPageLayout.css';


const AppendixPageLayout: React.FC<AppendixProps> = ({ title, columns, rows, onDeleteClick, onFormClick }) => {
  return (
    <Stack key={`appendix_${useId()}`} justifyContent={'center'} alignItems={'center'}>
      <Box key={`appendix_${useId()}`} margin={10} sx={{ textAlign: 'center' }}>
        <Typography key={`appendix_${useId()}`} variant="h2" id="appendix_h2">
          {title}
        </Typography>
        <Stack alignItems={'end'} sx={{margin: '20px 0px'}}><FormModal buttonColor='success' modalButton='Add Reference'></FormModal></Stack>
        {rows.length && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {columns.map((col, i) => (
                    <TableCell key={`appendix_th_${i}`}>{col}</TableCell>
                  ))}
                  <TableCell key={`appendix_th_end`}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow key={`appendixTable_${i}`} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    {row.map((r, id) =>
                      id === 2 ? (
                        <TableCell key={`appendix_td_${i}_${id}`}><Link href={r.link} rel="noreferrer" target="_blank">{r.reference}</Link></TableCell>
                      ) : id !== 0 ? (
                        <TableCell key={`appendix_td_${i}_${id}`}>{r}</TableCell>
                      ) : (null)
                    )}
                    <TableCell key={`appendix_td_${i}_end`}>
                    <Button key={`appendix_t_btn_${i}`} onClick={() => onDeleteClick(row[0], row[1])} variant={'text'}><span className="tableIcon"><FaTrash title='delete' id="trashIcon" /></span></Button>
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
