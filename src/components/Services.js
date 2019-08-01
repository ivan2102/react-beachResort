import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer }  from 'react-icons/fa';

class Services extends Component{
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "Free Cocktails",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
            },

            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
            },

            {
                icon: <FaShuttleVan/>,
                title: "Free Shuttle",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
            },

            {
                icon: <FaBeer/>,
                title: "Strongest Beer",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
            }
        ]
    }
    render(){
        return(
            <div className="services">
             <Title title="services"/>
             <div className="services-center">
                 {this.state.services.map((service, index) => {
                     return(
                         <div key={index} className="service">
                             <span>{service.icon}</span>
                             <h6>{service.title}</h6>
                             <p>{service.info}</p>

                         </div>
                     )
                 })}
             </div>
            </div>

        )
    }
}

export default Services;