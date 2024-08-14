import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import StarRatings from 'react-star-ratings';
import './Feedback.css'; // Add your styles here
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles
import client1 from '../../Assets/Background/Register.jpeg';
import client2 from '../../Assets/Background/Register.jpeg';
import client3 from '../../Assets/Background/Register.jpeg';

const Feedback = () => {
    const feedbacks = [
        {
            id: 1,
            name: 'Alice Johnson',
            image: client1,
            feedback: 'The medicinal plants have been life-changing for me! After just a month of use, I feel more energized and balanced. Highly recommend their products!',
            rating: 5,
        },
        {
            id: 2,
            name: 'Michael Brown',
            image: client2,
            feedback: 'Great service and prompt delivery. The herbs I ordered were of excellent quality and the packaging was eco-friendly. Will definitely shop here again.',
            rating: 4.5,
        },
        {
            id: 3,
            name: 'Sarah Lee',
            image: client3,
            feedback: 'The variety of organic herbs is impressive. I’ve incorporated them into my daily routine and the results have been fantastic. The customer support was also very helpful.',
            rating: 4,
        },
    ];

    return (
        <div className="feedback-section">
            <h2>What Our Clients Say</h2>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={5000}
                transitionTime={600}
            >
                {feedbacks.map((client) => (
                    <div key={client.id} className="feedback-card">
                        <img src={client.image} alt={client.name} className="client-image" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
                        <div className="feedback-content">
                            <h3>{client.name}</h3>
                            <StarRatings
                                rating={client.rating}
                                starRatedColor="SeaGreen"
                                numberOfStars={5}
                                starDimension="25px"
                                starSpacing="5px"
                            />
                            <p>"{client.feedback}"</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Feedback;
