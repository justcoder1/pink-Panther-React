import { CircularProgress, Skeleton, Stack } from '@mui/material';
import React from 'react';

interface I_Spinner {
  height?: string
}

export const Spinner: React.FC<I_Spinner> = ({height}) => {
  return (
    <Stack
      justifyContent={'center'}
      alignItems={'center'}
      sx={{ height: height ?? '100%'}}
    >
      <CircularProgress color="secondary" />
    </Stack>
  );
};

export const SkeletonMain: React.FC = () => {
  return (
    <Stack
      justifyContent={'center'}
      alignItems={'center'}
      spacing={1}
      sx={{ height: '100%' }}
    >
      <Skeleton key='SM_1' variant="text" width={610} sx={{ fontSize: '5rem' }} />
      <Skeleton key='SM_2' variant="rounded" width={710} height={400} />
      <Skeleton key='SM_3' variant="text" width={510} sx={{ fontSize: '3rem' }} />
    </Stack>
  );
};

export const SkeletonNavBar: React.FC = () => {
  return (
    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ width: '100%' }}>
      <Skeleton key='SNB_1' variant="text" width={350} sx={{ fontSize: '3.5rem' }} />
      <Stack direction={'row'} spacing={2}>
        <Skeleton key='SNB_2' variant="text" width={80} sx={{ fontSize: '2rem' }} />
        <Skeleton key='SNB_3' variant="text" width={80} sx={{ fontSize: '2rem' }} />
        <Skeleton key='SNB_4' variant="text" width={80} sx={{ fontSize: '2rem' }} />
        <Skeleton key='SNB_5' variant="text" width={80} sx={{ fontSize: '2rem' }} />
        <Skeleton key='SNB_6' variant="text" width={80} sx={{ fontSize: '2rem' }} />
        <Skeleton key='SNB_7' variant="circular" width={40} height={40} />
      </Stack>
    </Stack>
  );
};

export const ErrorHandler: React.FC = () => {
  return (
    <>
      Something Went Wrong
    </>
  );
};
