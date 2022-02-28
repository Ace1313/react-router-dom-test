import styled from 'styled-components';

const HighlightedQuote = (props) => {
   return (
      <Wrapper>
         <figure className="quote">
            <p>{props.text}</p>
            <figcaption>{props.author}</figcaption>
         </figure>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   .quote {
      background-color: #162b2b;
      color: white;
      border-radius: 6px;
      padding: 3rem;
      margin: 3rem auto;
      width: 90%;
      max-width: 40rem;
   }

   .quote p {
      font-size: 2.5rem;
   }

   .quote figcaption {
      font-style: italic;
      font-size: 1.5rem;
      text-align: right;
      color: #a1e0e0;
   }
`;

export default HighlightedQuote;
