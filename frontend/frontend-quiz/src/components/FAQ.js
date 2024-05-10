import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FAQPage = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sandbox.practical.me/api/faq');
        setFaqData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((item) => (
        <div key={item.id} className="faq-item">
          <h2>{item.question}</h2>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
