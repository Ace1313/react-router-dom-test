import styled from 'styled-components';
import MainNavigation from './MainNavigation';

function Layout(props) {
   return (
      <Wrapper>
         <MainNavigation />
         <main className="main">{props.children}</main>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   .main {
      margin: 3rem auto;
      width: 90%;
      max-width: 40rem;
   }
`;

export default Layout;
