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
} from "@mui/material";
import React, { useId } from "react";
import { HistoryProps } from "../../pages/use-history-page.view-model";

import "./HistoryPageLayout.css";

const HistoryPageLayout: React.FC<HistoryProps> = ({ title, content }) => {
  // FIX: Need to make the content HTMl not a string
  // content.data.rows.map((row) => (
  //   row.map((r) => new DOMParser().parseFromString('<span>test</span>', 'text/html'))
  // ))

  return (
    <Stack key={`about_${useId()}`} justifyContent={"center"} alignItems={"center"}>
      <Box key={`about_${useId()}`} maxWidth={1000} margin={10} sx={{ textAlign: "center" }}>
        <Typography key={`about_${useId()}`} variant="h2" id="about_h2">
          {title}
        </Typography>
        <Typography key={`about_${useId()}`} variant="h3" id="about_h3">
          {content.title}
        </Typography>
        {content.data.columns.length && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {content.data.columns.map((col) => (
                    <TableCell>{col}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {content.data.rows.map((row, i) => (
                  <TableRow key={`historyTable_${i}`} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    {row.map((r) => (                      
                      <TableCell>{r}</TableCell>
                    ))}
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

export default HistoryPageLayout;
