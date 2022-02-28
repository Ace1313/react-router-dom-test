import { useParams } from 'react-router-dom';

function QuoteDetail() {
   const params = useParams();
   return (
      <div>
         <h1>Quote Detail</h1>
         {params.quoteId}
      </div>
   );
}

export default QuoteDetail;
