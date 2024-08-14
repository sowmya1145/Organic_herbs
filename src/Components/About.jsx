import React from 'react';
import about from '../Assets/gif/about.gif';
import im1 from '../Assets/gif/aloevera.webp';
import im2 from '../Assets/gif/basil.gif';
import im3 from '../Assets/gif/cha.gif';
import im4 from '../Assets/gif/Echinacea.gif';
import im5 from '../Assets/gif/Lavender.gif';
import im6 from '../Assets/gif/Green_Tea.jpeg';
import im7 from '../Assets/gif/Hydrastis_canadensis.jpeg';


import './About.css'; // Assuming you'll style this separately
import Footer from './Footer';


// PlantCard component
function PlantCard({ name, benefits, image }) {
  return (
    <div className="plant-card">
      <img src={image} alt={name} style={{height: '100px' , maxWidth: '200px'}}/>
      <h3>{name}</h3>
      <p>{benefits}</p>
    </div>
  );
}

// About component
function About() {
  const plants = [
    { name: 'Aloe Vera', benefits: 'Heals burns, improves digestive health', image: im1 },
    { name: 'Basil', benefits: 'Reduces stress, has anti-inflammatory properties', image: im2 },
    { name: 'Chamomile', benefits: 'Promotes sleep, reduces anxiety', image: im3 },
    { name: 'Echinacea', benefits: 'Boosts the immune system, reduces inflammation', image: im4 },
    { name: 'Lavender', benefits: 'Relieves stress, promotes sleep', image: im5 },
    { name: 'Camellia sinensis', benefits: 'Improves Longevity, Lowers Cholesterol.', image: im6 },
    { name: 'Goldenseal', benefits: 'Treat ulcers, wounds, skin, mouth and eye infections', image: im7 },
  ];

  return (
    <div>
      <section className="about-us">
        <div className="about-us-content">
          <h2>About Us</h2>
          <p>
            Our journey into the world of Medicinal and Herbal plants is driven by a passion for natural healing and well-being. We believe in the power of nature to provide remedies that are both effective and gentle on the body. Our products are carefully crafted to offer you the best that nature has to offer.
            <br/>
            <br/>
            We are dedicated to harnessing the natural power of plants to promote health and wellness. Our mission is to provide our customers with the finest, sustainably sourced botanical products that can enhance their quality of life.
          </p>
        </div>
        <div className="about-us-image">
          <img src={about} alt="Our Team with Medicinal Plants" />
        </div>
      </section>

      <div className="App">
        <header className="App-header">
          <h1 style={{ color:'white' }}>Our Mission: Helping Millions Discover Herbal Plants</h1>
          <p>We believe in the power of natural remedies and the importance of growing better together.</p>
        </header>
        <section className="App-story">
          <h2>Our Story</h2>
          <p>Founded with a passion for nature and a commitment to health, Flora was established to bring the benefits of medicinal and herbal plants to everyone. Our journey began with a simple belief: that the natural world holds the key to many of our health needs. Over the years, we have grown from a small local supplier to a respected name in the industry, thanks to our unwavering dedication to quality and customer satisfaction.</p>
        </section>
        <section className="App-plants">
          <h2>List of Medicinal and Herbal Plants</h2>
          <div className="plant-list">
            {plants.map((plant, index) => (
              <PlantCard key={index} name={plant.name} benefits={plant.benefits} image={plant.image} />
            ))}
          </div>
        </section>
        <section className="App-numbers">
          <h2>By the Numbers</h2>
          <div className="numbers">
            <div className="number-card">
              <h3>12</h3>
              <p>Global Offices</p>
            </div>
            <div className="number-card">
              <h3>7,600+</h3>
              <p>Employees</p>
            </div>
            <div className="number-card">
              <h3>2,05,000+</h3>
              <p>Customers</p>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
