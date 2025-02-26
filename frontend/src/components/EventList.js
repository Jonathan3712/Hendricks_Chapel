import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css'

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:4000/api/events')
      .then(response => {
        console.log('Fetched events from API:', response.data);  // Add this to see the response data
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);  // Add this to see if there's an issue with the request
        setError('Error: Failed to load events.');
      });
  // }, []);
  }, [events, error]);

  return (
    <div className='head_of'>
      <h1>Welcome to the Bridge - Evangelical Chalaincy Hendricks Chapel</h1>
      <h2>Syracuse University</h2>
      
    </div>
  );
};

export default EventList;
