import { CircularProgress } from '@material-ui/core';

import { Container } from './styles';

const Loading = () => {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
};

export default Loading;
