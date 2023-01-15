import styled from 'styled-components';
import Header from './Header/Header';

const Layout = ({ children }) => {
  return (
    <Wrap>
      <Header />
      <div>{children}</div>
    </Wrap>
  );
};

export default Layout;

// styled-components
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
