import styled from 'styled-components';

const Card = (props) => {
   return (
      <Wrapper>
         <div className={classes.card}>{props.children}</div>;
      </Wrapper>
   );
};

const Wrapper = styled.div`
   .card {
      padding: 1rem;
      margin: 1rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      background-color: white;
   }
`;

export default Card;