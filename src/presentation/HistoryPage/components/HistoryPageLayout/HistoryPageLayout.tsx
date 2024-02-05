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
import { HistoryProps } from '../../pages/use-history-page.view-model';

import './HistoryPageLayout.css';

const HistoryPageLayout: React.FC<HistoryProps> = ({ title, content }) => {
  return (
    <Stack justifyContent={'center'} alignItems={'center'}>
      <Box maxWidth={1000} margin={10} sx={{ textAlign: 'center' }}>
        <Typography variant="h2" id="history_h2">
          {title}
        </Typography>
        <Typography variant="h3" id="history_h3">
          {content.title}
        </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {content.data.columns?.map((col, i) => (
                    <TableCell key={`history_th_${i}`}>{col}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {content.data.rows?.map((row, i) => (
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
