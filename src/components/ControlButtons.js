import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';



export function ControlButtons({ quote, author, color, onNewQuote }) {
  return (
    <div className='ctas'>
      <div>
        <a
          id='tweet-quote'
          href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
          target='_blank'
          aria-label='tweet this quote'
          rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faTwitter} className='icon' style={{ backgroundColor: color }} />
        </a>
        <a 
        href='https://www.desengineers.co/' 
        title='go back to Portfolio'
        aria-label='go back to portfolio'>
          <FontAwesomeIcon 
          icon={faPaperPlane} 
          className='icon' 
          style={{ backgroundColor: color }} />
        </a>
      </div>
      <button 
      id='new-quote' 
      onClick={onNewQuote} 
      style={{ backgroundColor: color }}>
        New quote
      </button>
    </div>
  )
}