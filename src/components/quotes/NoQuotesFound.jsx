import styled from 'styled-components';

const NoQuotesFound = () => {
   return (
      <Wrapper>
         <div className="noquotes">
            <p>No quotes found!</p>
            <a className="btn">Add a Quote</a>
         </div>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   .noquotes {
      height: 20rem;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   .noquotes p {
      color: #262c2c;
      font-size: 3rem;
      font-weight: bold;
   }
`;

export default NoQuotesFound;
