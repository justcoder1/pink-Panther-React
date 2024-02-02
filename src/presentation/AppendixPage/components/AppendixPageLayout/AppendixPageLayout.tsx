import {
  Box,
  Button,
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
import React, { useState } from 'react';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';

import AppModal from '../../../../_utils/globals/forms/Modal/Modal';
import { AppendixProps } from '../../pages/use-appendix-page.view-model';
import './AppendixPageLayout.css';

const AppendixPageLayout: React.FC<AppendixProps> = ({ title, columns, rows, onDeleteClick, onFormClick }) => {
  const [showIconId, setshowIconId] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  const [formType, setformType] = useState('');

  const openModal = (type) => {
    setformType(type);
    setShowModal(true);
  };

  return (
    <Stack justifyContent={'center'} alignItems={'center'}>
      <AppModal show={showModal} hide={() => setShowModal(false)} title={formType}></AppModal>
      <Box margin={10} sx={{ textAlign: 'center' }}>
        <Typography variant="h2" id="appendix_h2">
          {title}
        </Typography>
        <Stack alignItems={'end'} sx={{ margin: '20px 0px' }}>
          <Button color="secondary" variant="contained" onClick={() => openModal('Create Reference')}>
            Add Reference
          </Button>
        </Stack>
        {rows.length && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {columns.map((col, i) => (
                    <TableCell>{col}</TableCell>
                  ))}
                  <TableCell width={75}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow
                    key={`appendixTable_${i}`}
                    onMouseEnter={() => {
                      setshowIconId(row[0]);
                    }}
                    onMouseLeave={() => setshowIconId(-1)}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    className="appendixTable_row"
                  >
                    {row.map((r, id) =>
                      id === 2 ? (
                        <TableCell key={`appendix_td_${i}_${id}`}>
                          <Link href={r.link} rel="noreferrer" target="_blank" className='linkStyle'>
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
                        color="primary"
                        sx={{ display: row[0] === showIconId ? 'inline' : 'none' }}
                      >
                        <FaTrash title="delete" id="trashIcon" />
                      </IconButton>
                      <IconButton
                        key={`appendix_e_${i}`}
                        onClick={() => openModal('Update Reference')}
                        className="tableIcon"
                        color="primary"
                        sx={{ display: row[0] === showIconId ? 'inline' : 'none' }}
                      >
                        <FaPencilAlt title="edit" id="pencilIcon" />
                      </IconButton>
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
