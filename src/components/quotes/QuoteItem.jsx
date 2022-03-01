import styled from 'styled-components';
import { Link } from 'react-router-dom';
const QuoteItem = (props) => {
   return (
      <Wrapper>
         <li className="item">
            <figure>
               <blockquote>
                  <p>{props.text}</p>
               </blockquote>
               <figcaption>{props.author}</figcaption>
            </figure>
            <Link to={`/quotes/${props.id}`} className="btn">
               View Fullscreen
            </Link>
         </li>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   .item {
      margin: 1rem 0;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      background-color: #c2e7f0;
   }

   .item:last-of-type {
      border-bottom: none;
   }

   .item figure {
      margin: 0;
      padding: 0;
      width: 70%;
   }

   .item blockquote {
      margin: 0;
      text-align: left;
      font-size: 1.5rem;
      color: #212929;
   }

   .item p {
      margin: 0;
      margin-bottom: 0.25rem;
   }

   .item figcaption {
      font-style: italic;
      color: #566d6d;
   }
`;

export default QuoteItem;
