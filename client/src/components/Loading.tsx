import Container from './Container';

const Loading = () => {
  return (
    <Container>
      <img
        style={{ height: '100px', width: '100px' }}
        src='/loading-animation.svg'
      />
    </Container>
  );
};

export default Loading;
