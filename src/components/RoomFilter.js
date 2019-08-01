import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';

// GET ALL UNIQUE VALUES

const getUnique = (rooms, value) => {
    return [...new Set(rooms.map(room => room[value]))]
}

function RoomFilter({rooms}){
    const context = useContext(RoomContext);
    const {
        handleChange,
         type, 
         capacity,
          price,
           minPrice,
            maxPrice,
             minSize,
              maxSize,
               breakfast,
                pets } = context;

        // GET UNIQUE TYPES
        let types = getUnique(rooms, 'type');
        //ADD ALL TYPES
        types = ['all', ...types];
        //MAP TO JSX
        types = types.map((item, index) => {
            return (<option value={item} key={index}>{item}</option>)
        });

        let people = getUnique(rooms, 'capacity');
        people = people.map((item, index) => {
         return <option key={index} value={item}>{item}</option>
        })
        

    return(
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>{types}</select>
                </div>
                {/* end of select type */}

                  {/* guests */}
                   <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>{people}</select>
                </div>
                {/* end of guests */}

                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
                </div>
                {/*end of room price*/}

                {/* size*/}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                    <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/>

                    <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
                     </div>
                    </div>
                   {/* end of size */}

                   {/*extras */}
                   <div className="form-group">
                       <div className="single-extra">
                           <label htmlFor="breakfast">breakfast</label>
                           <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                           </div>
                           <div className="single-extra">
                           <label htmlFor="pets">pets</label>
                           <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                           </div>
                       </div>
                   {/*end of extras */}
                   </form>
                   </section>
               )
            }

             export default RoomFilter;