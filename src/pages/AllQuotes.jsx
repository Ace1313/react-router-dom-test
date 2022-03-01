import QuoteList from '../components/quotes/QuoteList';

const DUMMY_DATA = [
   { id: 'q1', autohor: 'Alex', text: 'Learning react is fun!!!' },
   { id: 'q2', autohor: 'Bubble', text: 'Swimming is cool' },
];

function AllQuotes() {
   return <QuoteList quotes={DUMMY_DATA} />;
}

export default AllQuotes;
