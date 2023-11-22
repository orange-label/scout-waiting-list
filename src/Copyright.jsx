import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{display: 'inline',
      padding: '1em 1em',
      background: '#A57AFF',
      color: '#ffffff'}}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
      ₿.Scout
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
