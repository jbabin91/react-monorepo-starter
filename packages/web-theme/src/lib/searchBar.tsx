import { Button, Stack, TextField } from '@mui/material';
import * as React from 'react';

export function SearchBar() {
  return (
    <Stack direction="row" spacing={2}>
      <TextField />
      <Button>Submit</Button>
    </Stack>
  );
}
