// Utilities
import { useState } from 'react';
import { fetchQuote, generateColor } from './utilities/quoteUtils';

// Styling
import './App.css';

// Components
import { QuoteDisplay } from './components/QuoteDisplay';
import { ControlButtons } from './components/ControlButtons';
import { Footer } from './components/Footer';



function App({myWebsite}) {
	const [quoteData, setQuoteData] = useState({
		id: null,
		quote: '',
		author: '',
		color: '',
	});

	const handleNewQuote = () => {
		fetchQuote(quoteData, setQuoteData);
	}
	
	return (
		<main style={{ backgroundColor: quoteData.color }}>
			<div>
				<div id='quote-box'>
					<QuoteDisplay quote={quoteData.quote} author={quoteData.author} color={quoteData.color} />
					<ControlButtons quote={quoteData.quote} author={quoteData.author} color={quoteData.color} onNewQuote={handleNewQuote} />
				</div>
				<Footer myWebsite={myWebsite} />
			</div>
		</main>
	);
}

export default App;
