import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './App.css';

function App() {
	const [quoteData, setQuoteData] = useState({
		id: null,
		quote: '',
		author: '',
		color: ''
	})

	//To be replaced by an API
	const quotes = [
		{
			id: 0,
			quote:
				'To be yourself in a world that is constantly trying to make you something else is the greatest 	accomplishment.',
			author: 'Ralph Waldo Emerson',
			color: '#567A5B',
		},
		{
			id: 1,
			quote: "In the end, it's not the years in your life that count. It's the life in your years.",
			author: 'Abraham Lincoln',
			color: '#836B61',
		},
		{
			id: 2,
			quote: "In three words I can sum up everything I've learned about life: it goes on.",
			author: 'Robert Frost',
			color: '#4B6CA3',
		},
		{
			id: 3,
			quote: 'The future belongs to those who believe in the beauty of their dreams.',
			author: 'Eleanor Roosevelt',
			color: '#885CC5',
		},
	];


	//Randomly picks a new quote and makes sure it's different from the previous one.
	const handleClick = (event) => {
		let newQuoteData;

		do {
			const randomIndex = Math.floor(Math.random() * quotes.length);
			newQuoteData = quotes[randomIndex];
		} while (newQuoteData.id === quoteData.id);

		setQuoteData(newQuoteData);
	};
	

	//Generate a quote at the start
	if (quoteData.id === null) {
		setTimeout(handleClick, 500);
	}


	return (
		<main style={{ backgroundColor: quoteData.color }}>
			<section>
				<div id='quote-box'>
					<div id='text' style={{ color: quoteData.color }}>
						<FontAwesomeIcon icon={faQuoteLeft} className='quote-icon' style={{ color: quoteData.color }} />
						{quoteData.quote}
					</div>
					<span id='author' style={{ color: quoteData.color }}>
						- {quoteData.author}
					</span>
					<div className='ctas'>
						<div>
							<a id='tweet-quote' href='twitter.com/intent/tweet' target="_blank">
								<FontAwesomeIcon icon={faTwitter} className='icon' style={{ backgroundColor: quoteData.color }} />
							</a>
							<a>
								<FontAwesomeIcon icon={faPaperPlane} className='icon' style={{ backgroundColor: quoteData.color }} />
							</a>
						</div>
						<button id='new-quote' onClick={handleClick} style={{ backgroundColor: quoteData.color }}>
							New quote
						</button>
					</div>
				</div>
				<div className='me'>
					<span>
						by <a>giovanni</a>
					</span>
				</div>
			</section>
		</main>
	);
}

export default App;
