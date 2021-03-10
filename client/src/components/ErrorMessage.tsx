import { Typography } from '@material-ui/core';

import Container from './Container';

const ErrorMessage = ({ msg }: { msg: string }) => {
  return (
    <Container>
      <Typography variant='h5' align='center'>
        {`Error: ${msg} `} &#x1F615;
      </Typography>
    </Container>
  );
};

export default ErrorMessage;
