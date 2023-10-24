import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './App.css';

function App() {
	const [color, setColor] = useState('');
	const colors = ['blue', 'red', 'green'];

	const handleClick = (event) => {
		let newColor;

		do {
			const randomIndex = Math.floor(Math.random() * colors.length);
			newColor = colors[randomIndex];
		} while (newColor === color);

		setColor(newColor);
	};

	return (
		<main style={{ backgroundColor: color }}>
			<section>
				<div className='container'>
					<div className='quote' style={{ color: color }}>
						<FontAwesomeIcon icon={faQuoteLeft} className='left-quote' style={{ color: color }} />
						Few things can help an individual more than to place responsibility on him, and to let him know that you
						trust him.
					</div>
					<span className='author' style={{ color: color }}>
						- Earl Nightingale
					</span>
					<div className='ctas'>
						<div>
							<a>
								<FontAwesomeIcon icon={faTwitter} className='icon' style={{ backgroundColor: color }} />
							</a>
							<a>
								<FontAwesomeIcon icon={faPaperPlane} className='icon' style={{ backgroundColor: color }} />
							</a>
						</div>
						<button onClick={handleClick} style={{ backgroundColor: color }}>
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
