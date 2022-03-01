import QuoteItem from './QuoteItem';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';

const sortQuotes = (quotes, ascending) => {
   return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
         return quoteA.id > quoteB.id ? 1 : -1;
      } else {
         return quoteA.id < quoteB.id ? 1 : -1;
      }
   });
};

const QuoteList = (props) => {
   const history = useHistory();
   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const isSortingAscding = queryParams.get('sort') === 'asc';
   const soretedQuotes = sortQuotes(props.quotes, isSortingAscding);
   function changeSortHandler() {
      history.push('/quotes?sort=' + (isSortingAscding ? 'desc' : 'asc'));
   }
   return (
      <Wrapper>
         <div>
            <div className="sorting">
               <button onClick={changeSortHandler}>
                  Sort {isSortingAscding ? 'Descending' : 'Ascending'}
               </button>
            </div>
            <ul className="list">
               {soretedQuotes.map((quote) => (
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
