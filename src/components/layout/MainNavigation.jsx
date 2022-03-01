import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
function MainNavigation() {
   return (
      <Wrapper>
         <header className="header">
            <div className="logo">Great Quotes</div>
            <nav className="nav">
               <ul>
                  <li>
                     <NavLink to="/quotes">All Quotes</NavLink>
                  </li>
                  <li>
                     <NavLink to="/new-quote">Add a Quote</NavLink>
                  </li>
               </ul>
            </nav>
         </header>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   .header {
      width: 100%;
      height: 5rem;
      display: flex;
      padding: 0 10%;
      justify-content: space-between;
      align-items: center;
      background-color: #008080;
   }

   .logo {
      font-size: 2rem;
      color: white;
   }

   .nav ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
   }

   .nav li {
      margin-left: 1.5rem;
      font-size: 1.25rem;
   }

   .nav a {
      text-decoration: none;
      color: #88dfdf;
   }

   .nav a:hover,
   .nav a:active,
   .nav a.active {
      color: #e6fcfc;
   }
`;

export default MainNavigation;
