import React from 'react'
import './Home.css'

const Home: React.FC = () => {
  return (
    <section className="home">
      <h2>Welcome, Householder</h2>
      <p>
        In a world buzzing with unrest, this is your corner of calm. 
        Take a breath. Smile at the absurdity. 
        Maybe even laugh before you meditate.
      </p>

      <button onClick={() => alert('Deep breath in... and out. Nicely done.')}>
        Begin a Mindful Moment
      </button>
    </section>
  )
}

export default Home
