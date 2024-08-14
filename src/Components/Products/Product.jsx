import React from 'react';
import im1 from '../../Assets/products/aloeveragel.webp';
import im2 from '../../Assets/products/face.jpg';
import im3 from '../../Assets/products/tablet1.webp';
import im4 from '../../Assets/products/sandalwood.webp';
import im5 from '../../Assets/products/oil.webp';
import im6 from '../../Assets/products/perfume.webp';
import im7 from '../../Assets/products/Faceserum.webp';
import im8 from '../../Assets/products/neemcomb.webp';
import im9 from '../../Assets/products/shampoo.jpg';
import im10 from '../../Assets/products/HerbalKajal.jpeg';
import Footer from '../Footer';
import './Product.css';

const Product = ({ handleAddToCart }) => {
  const productItems = [
    { name: 'Aloe Vera Gel', image: im1, price: 150, uses: 'an excellent natural moisturizer and providing deep hydration without clogging pores.' },
    { name: 'Face Cleanser', image: im2, price: 250, uses: 'Cleanses the skin without stripping its natural oils.Helps to prevent acne by removing excess oil.' },
    { name: 'Ashwagandha Tablets', image: im3, price: 400, uses: 'Reduces stress and anxiety. Boosts energy levels and stamina.' },
    { name: 'Sandalwood Powder', image: im4, price: 500, uses: 'Reduces inflammation and redness caused by acne, rashes, or sunburn.' },
    { name: 'Herbal Oil', image: im5, price: 250, uses: 'Strengthens hair follicles and promotes healthy hair growth.' },
    { name: 'Chamomile Perfume', image: im6, price: 400, uses: ' The calming scent helps reduce stress and anxiety.' },
    { name: 'Face Serum', image: im7, price: 700, uses: 'Targets specific skin concerns like aging and dullness.' },
    { name: 'Neem Comb', image: im8, price: 150, uses: 'The natural properties of neem help in reducing dandruff.' },
    { name: 'Herbal Shampoo', image: im9, price: 600, uses: 'Contains a blend of Ayurvedic herbs like neem, bhringraj, and hibiscus.' },
    { name: 'Herbal Kajal', image: im10, price: 500, uses: 'Made with natural ingredients like almond oil, ghee, and natural wax.' },
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Our Products</h2>
      <div className="gallery">
        {productItems.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.image} alt={item.name} style={{ height: '260px' }} />
            <div className="gallery-info">
              <h3>{item.name}</h3>
              <p><b>Benefits: </b>{item.uses}</p>
              <h4>₹ {item.price} </h4>
             
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

export default Product;
