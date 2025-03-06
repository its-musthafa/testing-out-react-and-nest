import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    try {
      // Replace with the forwarded URL for your backend
      const response = await fetch('https://symmetrical-succotash-564qrgx497gfp7pr-5000.app.github.dev/message');
      const data = await response.text(); // Get the message text from the backend
      setMessage(data); // Set the message in the state to display it
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };

  return (
    <div>
      <h1>Hello World from React!</h1>
      <button onClick={fetchMessage}>Get Message from Backend</button>
      <p>{message}</p> {/* Display the message here */}
    </div>
  )
}

export default App
