import React from 'react';
import im1 from '../../Assets/Herbal/aloe.jpeg';
import im2 from '../../Assets/Herbal/camailia.webp';
import im3 from '../../Assets/Herbal/eucalyptus.jpeg';
import im4 from '../../Assets/Herbal/kuppaimennai.jpeg';
import im5 from '../../Assets/Herbal/lavender.jpeg';
import im6 from '../../Assets/Herbal/lemonbalm.jpg';
import im7 from '../../Assets/Herbal/rosemerry.jpeg';
import im8 from '../../Assets/Herbal/thyme.jpg';
import im9 from '../../Assets/Herbal/vettiver.jpeg';
import im10 from '../../Assets/Herbal/wildturmeric.jpeg';

import Footer from '../Footer';
import './Herbal.css';

const Herbal = ({ handleAddToCart }) => {
  const herbalItems = [
    { name: 'Aloe Vera (Aloe)', image: im1, price: 10 ,uses:'Aloe vera benefits can include reducing dental plaque, accelerating wound healing, preventing wrinkles, and managing blood sugar.'},
    { name: 'Camellia sinensis (Green Tea)', image: im2, price: 80,uses:'It has been touted as being useful in a wide variety of conditions, including cancer prevention, mostly on relatively slim epidemiological evidence , cardiovascular disorders, and AIDS.' },
    { name: 'Eucalyptus globulus (Eucalyptus)', image: im3, price: 10,uses:'(Eucalyptus globulus) appears in many over-the-counter cough and cold products to relieve congestion. Eucalyptus oil is also used in creams and ointments to relieve muscle and joint pain, and in some mouthwashes.'},
    { name: 'Acalypha indica (Kuppaimeni)', image: im4, price: 10,uses:'It helps in skin problems like pimples, psoriasis, and eczema. It helps in Skin Polishing, Replenishing & Rejuvenation, Skin Brightening, Softening & Smoothening, Anti-acne & Pimples.' },
    { name: 'Lavandula (Lavender)', image: im5, price: 10,uses:'Herbalists treat skin ailments, such as fungal infections (like candidiasis), wounds, eczema, and acne, with lavender oil. It is also used in a healing bath for joint and muscle pain.' },
    { name: 'Melissa officinalis (Lemon balm)', image: im6, price: 15,uses:'It was used as far back as the Middle Ages to reduce stress and anxiety, promote sleep, improve appetite, and ease pain and discomfort from indigestion (including gas and bloating, as well as colic).' },
    { name: 'Salvia rosmarinus (Rosemerry)', image: im7, price: 20,uses:' It is also used for fragrance in soaps and cosmetics. Traditionally, rosemary has been used medicinally to: Improve memory.' },
    { name: 'Thymus vulgaris (Thyme)', image: im8, price: 40,uses:'Thyme contains chemicals that might help bacterial and fungal infections. It also might help relieve coughing and have antioxidant effects.' },
    { name: 'Chrysopogon zizanioides (Vettiver)', image: im9, price: 50,uses:'Vetiver is sometimes applied directly to the skin for relieving stress, as well as for emotional traumas and shock, lice, and repelling insects. It is also used for arthritis, stings, and burns.' },
    { name: 'Curcuma aromatica (Wild Turmeric)', image: im10, price: 60,uses:'It is primarily used for cosmetic purposes and is known to enhance skin glow. This herb possesses anti-inflammatory, antioxidant, and antibacterial properties.' },
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Herbal Plants</h2>
      <div className="gallery">
        {herbalItems.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.image} alt={item.name} style={{ height: '260px' }} />
            <div className="gallery-info">
              <h3>{item.name}</h3>
              <p><b>Benefits: </b>{item.uses}</p>
              <h4>₹ {item.price} per gm</h4>
              <div className="container2">
              <button className="buttonnn buttonn2"  onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Herbal;
