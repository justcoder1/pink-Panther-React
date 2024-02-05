import { yupResolver } from '@hookform/resolvers/yup';
import { Button, MenuItem, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { I_AppendixData } from '../../components/AppendixTable/use-appendix-table.view-model';

import './AppendixForm.css';

interface I_AppendixForm {
  type: 'Create' | 'Update';
  nextId?: number;
  topics: string[];
  types: string[];
  formData?: I_AppendixData;
  onFormSubmit?: (data: I_AppendixData) => void;
}

const AppendixForm: React.FC<I_AppendixForm> = ({ type, nextId, types, topics, formData, onFormSubmit }) => {
  // Styles ---------------------
  const inputLeft = { width: '300px', margin: '10px 10px 10px 0px' };
  const inputRight = { width: '300px', margin: '10px 0px' };
  const inputFull = { width: '100%', margin: '10px 0px' };

  // form Schema ----------------
  let appendixSchema = object({
    reference: string().required('Missing Reference'),
    link: string().url().required('Missing Link'),
    type: string().required('Missing Type'),
    topic: string().required('Missing Topic'),
    comments: string(),
  }).required();

  // form setup ----------------
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    resolver: yupResolver(appendixSchema),
  });
  // ----------------------------

  const onSubmit = (data): void => {
    if (type === 'Update') {
      onFormSubmit({ ...data, id: formData.id, _id: formData._id });
    } else {
      onFormSubmit({ ...data, id: nextId });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6">{`ID: ${type === 'Update' ? formData.id : nextId}`}</Typography>
      <Stack direction={'row'}>
        <TextField
          style={inputLeft}
          type="text"
          label="Reference"
          variant="outlined"
          className="inputLeft"
          {...register('reference')}
          defaultValue={type === 'Update' ? formData.reference : ''}
          error={errors.hasOwnProperty('reference')}
          helperText={errors.hasOwnProperty('reference') ? errors.reference.message : ''}
        />
        <TextField
          style={inputRight}
          type="text"
          label="Link"
          variant="outlined"
          {...register('link')}
          defaultValue={type === 'Update' ? formData.link : ''}
          error={errors.hasOwnProperty('link')}
          helperText={errors.hasOwnProperty('link') ? errors.link.message : ''}
        />
      </Stack>
      <Stack direction={'row'}>
        <TextField
          style={inputLeft}
          select
          label="Type"
          variant="outlined"
          defaultValue={type === 'Update' ? formData.type : ''}
          {...register('type')}
          error={errors.hasOwnProperty('type')}
          helperText={errors.hasOwnProperty('type') ? errors.type.message : ''}
        >
          {types.map((type) => (
            <MenuItem key={`form_type_${type}`} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          style={inputRight}
          select
          label="Topic"
          variant="outlined"
          defaultValue={type === 'Update' ? formData.topic : ''}
          {...register('topic')}
          error={errors.hasOwnProperty('topic')}
          helperText={errors.hasOwnProperty('topic') ? errors.topic.message : ''}
        >
          {topics.map((topic) => (
            <MenuItem key={`form_topic_${topic}`} value={topic}>
              {topic}
            </MenuItem>
          ))}
        </TextField>
      </Stack>
      <TextField
        style={inputFull}
        type="text"
        label="Comments"
        variant="outlined"
        {...register('comments')}
        defaultValue={type === 'Update' ? formData.comments : ''}
      />
      <Stack direction={'row'} justifyContent={'end'} id="formButton">
        <Button type="submit" disabled={!isValid} variant="contained" color="primary" sx={{ width: 125 }}>
          {type}
        </Button>
      </Stack>
    </form>
  );
};

export default AppendixForm;
