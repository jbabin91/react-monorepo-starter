import { Button } from '@mui/material';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <Button onClick={() => alert('Hello world!')}>Click Me</Button>
      <NxWelcome title="web" />
    </div>
  );
}
