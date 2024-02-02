import { Button, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { AppendixDataProps } from '../../pages/use-appendix-page.view-model';

import './AppendixForm.css';

interface AppendixFormProps {
  type: 'Create' | 'Update';
  nextId?: number;
  topics: string[];
  types: string[];
  data?: AppendixDataProps;
  onFormClick?: (data: AppendixDataProps) => void;
}

const AppendixForm: React.FC<AppendixFormProps> = ({ type, nextId, types, topics, data, onFormClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form>
      <Typography variant="h6">{`ID: ${nextId}`}</Typography>
      <Stack direction={'row'}>
        <TextField
          style={{ width: '300px', margin: '10px 10px 10px 0px' }}
          type="text"
          label="Reference"
          variant="outlined"
        />
        <TextField style={{ width: '300px', margin: '10px 0px' }} type="text" label="Link" variant="outlined" />
      </Stack>
      <Stack direction={'row'}>
        <TextField style={{ width: '300px', margin: '10px 10px 10px 0px' }} select label="Type" variant="outlined" defaultValue="">
          {types.map((type) => <MenuItem key={`form_type_${type}`} value={type}>{type}</MenuItem>)}
        </TextField>
        <TextField style={{ width: '300px', margin: '10px 0px' }} select label="Topic" variant="outlined" defaultValue="">
        {topics.map((topic) => <MenuItem key={`form_topic_${topic}`} value={topic}>{topic}</MenuItem>)}
        </TextField>
      </Stack>
      <TextField style={{ width: '100%', margin: '10px 0px' }} type="text" label="Comments" variant="outlined" />
      <Stack direction={'row'} justifyContent={'end'}>
        <Button variant="contained" color="primary" sx={{ width: 125 }}>
          {type}
        </Button>
      </Stack>
    </form>
  );
};

export default AppendixForm;
