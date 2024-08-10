import React from 'react';
import im1 from '../../Assets/Medicinal/andrographis.jpeg';
import im2 from '../../Assets/Medicinal/ashwagandha-plant.jpg';
import im3 from '../../Assets/Medicinal/astargulas.jpeg';
import im4 from '../../Assets/Medicinal/blackco.jpeg';
import im5 from '../../Assets/Medicinal/goldensal.jpeg';
import im6 from '../../Assets/Medicinal/kaarporavalli.jpeg';
import im7 from '../../Assets/Medicinal/phylanthus.jpeg';
import im8 from '../../Assets/Medicinal/rhodila.jpeg';
import im9 from '../../Assets/Medicinal/valarai1.jpeg';
import im10 from '../../Assets/Medicinal/wildgoose.jpeg';
import Footer from '../Footer';
import './Medicinal.css';

const Medicinal = ({ handleAddToCart }) => {
  const medicinalItems = [
    { name: 'Andrographis (Green Chireta)', image: im1, price: 10, uses: 'Andrographis is used to enhance the immune system and increase the body\'s resistance.' },
    { name: 'Withania somnifera (Ashwagandha)', image: im2, price: 20, uses: 'Ashwagandha is used to reduce anxiety , support restful sleep, and improve cognitive functioning.' },
    { name: 'Chrysopogon zizanioides (Vetiver)', image: im3, price: 15, uses: 'Vetiver essential oil is widely used in aromatherapy for its calming and grounding effects.' },
    { name: 'Black cohosh (Black bugbane)', image: im4, price: 25, uses: 'Used to treat musculoskeletal pain, fever and menstrual irregularities.' },
    { name: 'Goldenseal (Hydrastis canadensis)', image: im5, price: 30, uses: 'Traditionally used to treat digestive issues such as gastritis, ulcers, and diarrhea.' },
    { name: 'Mexican Mint (Karpooravalli)', image: im6, price: 12, uses: 'Used in the treatment of skin infections, mouth ulcers, hiccups, indigestion, and colic asthma.' },
    { name: 'Phyllanthus niruri (Keezhanelli)', image: im7, price: 18, uses: 'Helps treat high blood pressure and other conditions, used as a diuretic.' },
    { name: 'Rhodiola Rosea (Golden Root)', image: im8, price: 22, uses: 'Stimulates the body\'s resistance to physical, environmental, and emotional stressors.' },
    { name: 'Centella Asiatica (Vallarai)', image: im9, price: 28, uses: 'Used to treat varicose veins and chronic venous insufficiency.' },
    { name: 'European Gooseberry (Wild Gooseberry)', image: im10, price: 35, uses: 'High in nutrients, including vitamin C, with anti-aging, antioxidant, and anti-carcinogenic properties.' },
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Medicinal Plants</h2>
      <div className="gallery">
        {medicinalItems.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.image} alt={item.name} style={{ height: '260px' }} />
            <div className="gallery-info">
              <h3>{item.name}</h3>
              <p><b>Benefits: </b>{item.uses}</p>
              <h4>₹ {item.price} per gm</h4>
             
             <div className="container1">
                <button className="buttonn buttonn1" onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Medicinal;
