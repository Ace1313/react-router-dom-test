import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';
function NewQuote() {
   const history = useHistory();
   function addQuoteHandler() {
      console.log('Hejsan');

      history.push('/quotes');
   }
   return <QuoteForm onAddQuote={addQuoteHandler} />;
}

export default NewQuote;
