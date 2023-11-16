// Fetches data and updates state, making sure the next color is different from the previous one.
export const fetchQuote = async (quoteData, setQuoteData) => {
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
export const generateColor = () => {
  const colors = ['#34568B', '#FF6F61', '#6B5B95', '#88B04B', '#955251', '#B565A7', '#009B77', '#EFC050', '#5B5EA6'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};