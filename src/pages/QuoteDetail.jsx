import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuotes';
const DUMMY_DATA = [
   { id: 'q1', autohor: 'Alex', text: 'Learning react is fun!!!' },
   { id: 'q2', autohor: 'Bubble', text: 'Swimming is cool' },
];

function QuoteDetail() {
   const match = useRouteMatch();
   const params = useParams();

   const quote = DUMMY_DATA.find((e) => e.id === params.quoteId);
   if (!quote) {
      return <p>No quote found</p>;
   }

   return (
      <div>
         <h1>Quote Detail</h1>
         <HighlightedQuote text={quote.text} author={quote.author} />
         <Route path={match.path} exact>
            <div className="centered">
               <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
                  Load Comments
               </Link>
            </div>
         </Route>
         <Route path={`${match.path}/comments`}>
            <Comments />
         </Route>
      </div>
   );
}

export default QuoteDetail;
