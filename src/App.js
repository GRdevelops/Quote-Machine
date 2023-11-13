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
		color: '',
	});

	// Fetch data and update state
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

	// Randomly picks a new quote and makes sure it's different from the previous one
	const handleClick = (event) => {
		fetchQuote();
	};

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
							<a
								id='tweet-quote'
								href={`https://twitter.com/intent/tweet?text=${quoteData.quote} - ${quoteData.author}`}
								target='_blank'
								aria-label='tweet this quote'
								rel='noopener noreferrer'>
								<FontAwesomeIcon icon={faTwitter} className='icon' style={{ backgroundColor: quoteData.color }} />
							</a>
							<a 
							href='https://www.desengineers.co/' 
							title='go back to Portfolio'
							aria-label='go back to portfolio'>
								<FontAwesomeIcon 
								icon={faPaperPlane} 
								className='icon' 
								style={{ backgroundColor: quoteData.color }} />
							</a>
						</div>
						<button 
						id='new-quote' 
						onClick={handleClick} 
						style={{ backgroundColor: quoteData.color }}>
							New quote
						</button>
					</div>
				</div>
				<div className='me'>
					<span>
						by <a href='https://www.desengineers.co/' title='go back to Portfolio'>giovanni</a>
					</span>
				</div>
			</section>
		</main>
	);
}

export default App;
