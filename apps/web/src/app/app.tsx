import { SearchBar } from '@jbabin91/web-theme';
import { Box, Button, Stack } from '@mui/material';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <Stack spacing={1}>
      <Box>
        <Button onClick={() => alert('Hello world!')}>Click Me</Button>
      </Box>
      <SearchBar />
      {/* <NxWelcome title="web" /> */}
    </Stack>
  );
}
