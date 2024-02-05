import {
  Box,
  Stack,
  Typography
} from '@mui/material';
import React from 'react';

import { I_AppendixModel } from '../../pages/use-appendix-page.view-model';
import AppendixTable from '../AppendixTable/AppendixTable';
import './AppendixPageLayout.css';

const AppendixPageLayout: React.FC<I_AppendixModel> = ({ title }) => {
  return (
    <Stack justifyContent={'center'} alignItems={'center'}>
      <Box margin={10} sx={{ textAlign: 'center' }}>
        <Typography variant="h2" id="appendix_h2">
          {title}
        </Typography>
        <AppendixTable />
      </Box>
    </Stack>
  );
};

export default AppendixPageLayout;
