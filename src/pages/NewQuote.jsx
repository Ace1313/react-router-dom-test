import QuoteForm from '../components/quotes/QuoteForm';

function NewQuote() {
   function addQuoteHandler() {
      console.log('Hejsan');
   }
   return <QuoteForm onAddQuote={addQuoteHandler} />;
}

export default NewQuote;
