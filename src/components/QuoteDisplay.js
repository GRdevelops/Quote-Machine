import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export function QuoteDisplay({ quote, author, color }) {
  return (
      <>
          <div id="text" style={{ color: color }}>
              <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" style={{ color: color }} />
              {quote}
          </div>
          <span id="author" style={{ color: color }}>
              - {author}
          </span>
      </>
  );
}