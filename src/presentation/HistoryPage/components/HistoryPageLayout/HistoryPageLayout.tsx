import {
  Box,
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

import './HistoryPageLayout.css';
import useHistoryPageLayoutModel, { I_HistoryPageLayoutModel } from './use-history-page-layout.view-model';

const HistoryPageLayout: React.FC = () => {
  const vm: I_HistoryPageLayoutModel = useHistoryPageLayoutModel();

  return (
    <Stack justifyContent={'center'} alignItems={'center'}>
      <Box maxWidth={1000} margin={10} sx={{ textAlign: 'center' }}>
        <Typography variant="h2" id="history_h2">
          {vm.title}
        </Typography>
        <Typography variant="h3" id="history_h3">
          {vm.content.title}
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {vm.content.data.columns?.map((col, i) => (
                  <TableCell key={`history_th_${i}`}>{col}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {vm.content.data.rows?.map((row, i) => (
                <TableRow key={`historyTable_${i}`} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  {row?.map((r, id) => (
                    <TableCell key={`history_td_${i}_${id}`}>
                      {r.type === 'string' ? r.value : <div dangerouslySetInnerHTML={{ __html: r.value }} />}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Stack>
  );
};

export default HistoryPageLayout;
