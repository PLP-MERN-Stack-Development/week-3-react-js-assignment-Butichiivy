import React, { useState, useEffect } from 'react';
import Button from './Button';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const res = await fetch('https://api.quotable.io/random');
      const data = await res.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      setQuote("Couldn't fetch quote 😢");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-2">Quote of the Moment</h2>
      <p className="italic text-gray-700 dark:text-gray-300">"{quote}"</p>
      <p className="text-sm mt-2 text-right text-gray-500 dark:text-gray-400">— {author}</p>
      <div className="mt-4 text-right">
        <Button variant="success" onClick={fetchQuote}>New Quote</Button>
      </div>
    </div>
  );
};

export default Quote;
