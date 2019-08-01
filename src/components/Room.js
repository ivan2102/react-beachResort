import React from 'react';
import defaultImg from "../images/room-1.jpeg";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Room({room}){
    const {name,images,slug,price} = room;
    return(
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt=""/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">Features</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.shape.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}
export default Room;