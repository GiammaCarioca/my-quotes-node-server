const QuoteList = ({ quotes }) => {
  return (
    <ul>
      {quotes.map((quote, idx) => (
        <li key={idx}>{quote}</li>
      ))}
    </ul>
  )
}

export default QuoteList
