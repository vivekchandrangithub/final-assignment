import { useState } from 'react';
import axios from 'axios';


function App() {
  const [joke, setJoke] = useState({ setup: '', punchline: '' });

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      setJoke({ setup: response.data.setup, punchline: response.data.punchline });
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Random Joke Generator</h1>
      <h2 >Note that when you click the button each time new jokes are here for you ! thankyou for your valuable time</h2>
      <div>
        <h2>{joke.setup}</h2>
        <p>{joke.punchline}</p>
      </div>
      <button
        onClick={fetchJoke}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Get Random Joke
      </button>
    </div>
  );
}

export default App;
