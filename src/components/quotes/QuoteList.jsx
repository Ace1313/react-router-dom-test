import QuoteItem from './QuoteItem';
import styled from 'styled-components';

const QuoteList = (props) => {
   return (
      <Wrapper>
         <div>
            <ul className="list">
               {props.quotes.map((quote) => (
                  <QuoteItem
                     key={quote.id}
                     id={quote.id}
                     author={quote.author}
                     text={quote.text}
                  />
               ))}
            </ul>
         </div>
      </Wrapper>
   );
};
const Wrapper = styled.div`
   .list {
      list-style: none;
      margin: 0;
      padding: 0;
   }

   .sorting {
      padding-bottom: 1rem;
      border-bottom: 3px solid #b2d4d4;
      margin-bottom: 2rem;
   }

   .sorting button {
      font: inherit;
      color: teal;
      border: 1px solid teal;
      background-color: transparent;
      border-radius: 4px;
      padding: 0.5rem 1.5rem;
      cursor: pointer;
   }

   .sorting button:hover {
      background-color: #c2fafa;
   }
`;
export default QuoteList;
