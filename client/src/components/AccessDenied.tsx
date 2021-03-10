import { Typography } from '@material-ui/core';

import Container from './Container';

const AccessDenied = () => {
  return (
    <Container>
      <Typography variant='h5' align='center'>
        Access Denied &#x1F512;
      </Typography>
    </Container>
  );
};

export default AccessDenied;
