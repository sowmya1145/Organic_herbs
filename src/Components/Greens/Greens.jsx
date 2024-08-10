import React from 'react';
import im1 from '../../Assets/Greens/agathikeerai.jfif';
import im2 from '../../Assets/Greens/araikeerai.jfif';
import im3 from '../../Assets/Greens/brahmi.jfif';
import im4 from '../../Assets/Greens/brindaraj.jfif';
import im5 from '../../Assets/Greens/methileaves.jfif';
import im6 from '../../Assets/Greens/mintleaves.jfif';
import im7 from '../../Assets/Greens/moringa.jfif';
import im8 from '../../Assets/Greens/palak.jfif';
import im9 from '../../Assets/Greens/pulichakeerai.jfif';
import im10 from '../../Assets/Greens/thandu keerai.jfif';
import Footer from '../Footer';
import './Greens.css';

const Greens = ({ handleAddToCart }) => {
  const greenItems = [
    { name: 'Sesbania grandiflora (Agathi Keerai)', image: im1, price: 10, uses: 'Extracts from Agathi Keerai have been used to treat ailments such as rheumatism, digestive disorders, and skin conditions. Its leaves are also valued for their cooling properties, particularly during hot summer months.' },
    { name: 'Amaranthus dubius (Arai keerai)', image: im2, price: 12, uses: 'The high fiber in amaranth keeps you full longer. The oils in amaranth help prevent and treat hypertension and cardiovascular disease.' },
    { name: 'Centella asiatica (Brahmi leaves)', image: im3, price: 15, uses: 'Vallarai Keerai/Brahmi Leaves are used for stomach problems, stress, and depression.' },
    { name: 'False daisy (Bhringraj)', image: im4, price: 18, uses: 'Bhringraj helps to control premature greying of hair and rejuvenates hair. It also aids in wound healing and reducing skin swelling.' },
    { name: 'Trigonella foenum-graecum (Methi leaves)', image: im5, price: 20, uses: 'Methi is a great source of saponins which help reduce cholesterol and lower blood sugar levels.' },
    { name: 'Mentha piperita L. (Peppermint)', image: im6, price: 10, uses: 'Pudina is widely used for its culinary benefits. It aids in gas relief from the stomach.' },
    { name: 'Moringa oleifera (Moringa leaves)', image: im7, price: 22, uses: 'Moringa helps protect cells from damage, decrease inflammation, and reduce pain. It is used for asthma, diabetes, and breast-feeding support.' },
    { name: 'Spinacia oleracea (Spinach leaves)', image: im8, price: 15, uses: 'Spinach is rich in potassium, which helps lower blood pressure.' },
    { name: 'Hibiscus Cannabinus (Pulicha keerai)', image: im9, price: 12, uses: 'Pulicha Keerai or Sorrel Leaves boost immunity, improve digestion, and control blood pressure and cholesterol levels.' },
    { name: 'Love-Lies-Bleeding (Thandu Keerai)', image: im10, price: 14, uses: 'Thandu keerai offers benefits for maintaining brain functions, heart health, and lung, liver, and kidney operations.' },
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Greens</h2>
      <div className="gallery">
        {greenItems.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.image} alt={item.name} style={{ height: '260px' }} />
            <div className="gallery-info">
              <h3>{item.name}</h3>
              <p><b>Uses: </b>{item.uses}</p>
              <h4>₹ {item.price} per gm</h4>
              <div className="container">
                <button className="button button1" onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Greens;
