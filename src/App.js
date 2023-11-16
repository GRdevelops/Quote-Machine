import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { QuoteDisplay } from './components/QuoteDisplay';
import { ControlButtons } from './components/ControlButtons';
import { Footer } from './components/Footer';

function App() {
	const [quoteData, setQuoteData] = useState({
		id: null,
		quote: '',
		author: '',
		color: '',
	});

	const myWebsite = 'https://www.desengineers.co/';

	// Fetches data and updates state, making sure the next quote is different from the previous one.
	const fetchQuote = async () => {
		try {
			const response = await fetch('https://api.quotable.io/random');
			const data = await response.json();

			let newColor = generateColor();
			while (newColor === quoteData.color) {
				newColor = generateColor(); // Generate a new color until it's different from the current one
			}

			setQuoteData((prevState) => {
				console.log('Setting quote data:', data);
				return {
					id: data._id,
					quote: data.content,
					author: data.author,
					color: newColor,
				};
			});
		} catch (error) {
			console.error('Error fetching the quote:', error);
		}
	};

	

	// Generate a random color
	const generateColor = () => {
		const colors = ['#34568B', '#FF6F61', '#6B5B95', '#88B04B', '#955251', '#B565A7', '#009B77', '#EFC050', '#5B5EA6'];
		const randomIndex = Math.floor(Math.random() * colors.length);
		return colors[randomIndex];
	};

	return (
		<main style={{ backgroundColor: quoteData.color }}>
			<section>
				<div id='quote-box'>
					<QuoteDisplay quote={quoteData.quote} author={quoteData.author} color={quoteData.color} />
					<ControlButtons quote={quoteData.quote} author={quoteData.author} color={quoteData.color} onNewQuote={fetchQuote} />
				</div>
				<Footer myWebsite={myWebsite} />
			</section>
		</main>
	);
}

export default App;
