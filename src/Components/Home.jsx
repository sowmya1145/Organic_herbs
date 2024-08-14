import React from 'react';
import banner1 from '../Assets/Background/banner1.jpeg';
import banner2 from '../Assets/Background/banner2.jpg';
import banner3 from '../Assets/Background/banner3.jpeg';
import Icon1 from '../Assets/serviceicons/authencity1.png';
import Icon2 from '../Assets/serviceicons/bestoffer1.png';
import Icon5 from '../Assets/serviceicons/biode1.jpg';
import Icon3 from '../Assets/serviceicons/freedelivery.png';
import Icon4 from '../Assets/serviceicons/shoplocation.png';
import Icon6 from '../Assets/serviceicons/worldwideshipp.png';


import Footer from './Footer';

import { NavLink } from 'react-router-dom';

import './Home.css';
export default function Home() {
  return (
    <div>
       <section class="home">
        <div class="home-box">
            <div style={{  justifyContent: 'center',
            display:'flex',
                alignItems: 'center',
                textAlign:'right',
                 padding: '0 80px',
                 height: '90vh',
                color:'white' }}>
               
           <h1 style={{ fontSize:'45px', color:'white' }}>Plants are all chemists, tirelessly assembling<br/> the molecules of the worlds <br/>-Gray Snyder</h1>
     
                </div>
        </div>
    </section>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br/>
<div className="products">
  <h1 style={{ textAlign:'center' }}>Products</h1>
</div>


    <div className="containerr">
    
      <div className="section section1">
    
        <img src={banner1} style={{ width: '318px',
  height: '175px',
  border: '2px solid black' }}></img>
 <br></br>
 <br></br>
        <div className="header" style={{textAlign:'center'  }}>Medicinal Plants</div>
        <div className="content">Medicinal plants are defined as those capable of alleviating or curing diseases and they have a traditional use as a remedy in a population or community.</div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
        <NavLink to='Medicinal'><button style={{ padding: '10px 30px', fontSize: '16px', backgroundColor:'SeaGreen' }} >Explore</button></NavLink>
        </div>

      </div>


      <div className="section section2">
      <img src={banner2} style={{ width: '318px',
  height: '175px',
  border: '2px solid black' }}></img>
<br></br>
<br></br>
        <div className="header" style={{textAlign:'center'  }}>Herbal Plants</div>
        <div className="content">Herbal plants refer to any part of the plant like fruit, seed, stem, bark, flower, leaf, stigma, or a root, as well as a non-woody plant..</div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
        <NavLink to='Herbal'>  <button style={{ padding: '10px 30px', fontSize: '16px', backgroundColor:'SeaGreen' }} >Explore</button> </NavLink>
        </div>
      </div>
      <div className="section section3">
      <img src={banner3} style={{ width: '318px',
  height: '175px',
  border: '2px solid black' }}></img>
  <br></br>
  <br></br>
        <div className="header"style={{textAlign:'center' }}>Greens</div>
        <div className="content">Greens can refer to a variety of leafy green vegetables and plants that are often used in cooking and salads. </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
        <NavLink to='Greens'> <button style={{ padding: '10px 30px', fontSize: '16px', backgroundColor:'SeaGreen' }} >Explore</button></NavLink>
        </div>
      </div>
    </div>
   { /*<div className="services">
  <h1 style={{ textAlign:'center' }}>Services</h1>
</div>*/}
<div className="product">
  <h1 style={{ textAlign:'center' }}>Services</h1>
</div>
<section className="features">
 
      <div className="feature-item">
        <img src={Icon1} alt="Seamless Travel Planning" />
        <h3>100% Authentication</h3>
        <p>DNA testing is the most accurate method of plant authentication. This method can be used to identify a plant at the species level.</p>
      </div>
      <div className="feature-item">
        <img src={Icon2} alt="Tailored Experiences" />
        <h3>Best Offers</h3>
        <p>
        We provide best offers and discounts through the year and there will be a festival offers accordingly </p>
      </div>
      <div className="feature-item">
        <img src={Icon3} alt="Reliable and Trustworthy" />
        <h3>Free Delivery on orders above Rs 249-/-</h3>
        <p>On all orders above 249 is facilized to have no delivery fee </p>
      </div>
      </section>


     
      <section className="features">
      <div className="feature-item">
        <img src={Icon4} alt="Reliable and Trustworthy" />
        <h3>Shop Locations</h3>
        <p> We have our shop across major cities in India. We wish our customers can access through it also.</p>
      </div>

    
    
      <div className="feature-item">
        <img src={Icon5} alt="Seamless Travel Planning" />
        <h3>Biodegradable packaging</h3>
        <p>Glad to mention that all our products are packed in bio-degradable substances and are eco-friendly to our environment</p>
      </div>
      <div className="feature-item">
        <img src={Icon6} alt="Tailored Experiences" />
        <h3>World wide shipping</h3>
        <p>
        Our services are extended across world wide and it will be delivered within 2-4 working days across world-wide</p>
      </div>

      
     
      </section>
   
<Footer/>
      
    </div>
  )
}
