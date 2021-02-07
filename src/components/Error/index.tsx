import { Container } from './styles';

const Error = () => {
  return (
    <Container>
      <img src={`/images/t.png`} alt="Error" />
      <h1>An error has occurred</h1>
      <h3>
        Server is currently under high load.
        <br /> Please hit 'reload' on your browser in a few minutes to try again.
      </h3>
    </Container>
  );
};

export default Error;
