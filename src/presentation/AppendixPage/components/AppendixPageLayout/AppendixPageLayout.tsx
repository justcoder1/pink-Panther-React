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
import React, { useEffect, useState } from 'react';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';

import AppModal from '../../../../_utils/globals/forms/Modal/Modal'
import AppendixForm from '../AppendixForm/AppendixForm';
import { AppendixProps, AppendixDataProps } from '../../pages/use-appendix-page.view-model';
import './AppendixPageLayout.css';

const AppendixPageLayout: React.FC<AppendixProps> = ({ title, columns, rows, types, topics, onDeleteClick, onFormClick }) => {
  const [showIconId, setshowIconId] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  const [formType, setformType] = useState<'Create' | 'Update'>('Create');
  const [nextId, setNextId] = useState(0);
  const [formData, setFormData] = useState<AppendixDataProps>(null);
  
  const openModal = (type, rowData) => {
    if (type === 'Update') {      
      setFormData(rowData)
    }
    setformType(type);
    setShowModal(true);
  };

  const onFormSubmit = (data) => {
    if (formType === 'Create') {
      setNextId(data.id + 1)
    }
    setShowModal(false)
    setFormData(null)
    onFormClick(data)
  }

  useEffect(() => {
    if (rows.length) {
      setNextId(rows[rows.length - 1][2] + 1);
    }
  }, [rows]);

  return (
    <Stack justifyContent={'center'} alignItems={'center'}>
      <AppModal show={showModal} hide={() => setShowModal(false)} title={`${formType} Reference`}><AppendixForm type={formType} nextId={nextId} types={types} topics={topics} formData={formData} onFormSubmit={onFormSubmit}/></AppModal>
      <Box margin={10} sx={{ textAlign: 'center' }}>
        <Typography variant="h2" id="appendix_h2">
          {title}
        </Typography>
        <Stack alignItems={'end'} sx={{ margin: '20px 0px' }}>
          <Button color="secondary" variant="contained" onClick={() => openModal('Create', null)}>
            Add Reference
          </Button>
        </Stack>
        {rows.length && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {columns.map((col, i) => (
                    <TableCell key={`appendix_th_${i}`}>{col}</TableCell>
                  ))}
                  <TableCell width={75}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow
                    key={`appendixTable_${i}`}
                    onMouseEnter={() => {
                      setshowIconId(row[1]);
                    }}
                    onMouseLeave={() => setshowIconId(-1)}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    className="appendixTable_row"
                  >
                    {row.map((r, id) =>
                      id === 3 ? (
                        <TableCell key={`appendix_td_${i}_${id}`}>
                          <Link key={`appendix_a_${i}_${id}`} href={r.link} rel="noreferrer" target="_blank" className='linkStyle'>
                            {r.reference}
                          </Link>
                        </TableCell>
                      ) : id > 1  ? (
                        <TableCell key={`appendix_td_${i}_${id}`}>{r}</TableCell>
                      ) : null
                    )}
                    <TableCell key={`appendix_td_${i}_end`}>
                      <IconButton
                        key={`appendix_t_btn_${i}`}
                        onClick={() => onDeleteClick(row[1], row[2])}
                        className="tableIcon"
                        color="primary"
                        sx={{ display: row[1] === showIconId ? 'inline' : 'none' }}
                      >
                        <FaTrash key={`appendix_t_${i}`} title="delete" id="trashIcon" />
                      </IconButton>
                      <IconButton
                        key={`appendix_e_btn_${i}`}
                        onClick={() => openModal('Update', row[0])}
                        className="tableIcon"
                        color="primary"
                        sx={{ display: row[1] === showIconId ? 'inline' : 'none' }}
                      >
                        <FaPencilAlt key={`appendix_e_${i}`} title="edit" id="pencilIcon" />
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
