import React from 'react';
import RoomList from './RoomList';
import RoomFilter from './RoomFilter';
import {RoomConsumer} from '../Context';
import Loading from '../components/Loading';

function RoomsContainer(){
    return(
        <RoomConsumer>

    {       (value) => {
        const {loading, sortedRooms, rooms} = value;
        if(loading) {
            return <Loading/>
        }
              return(
                <div> 
                <RoomFilter rooms={rooms}/>
                <RoomList rooms={sortedRooms}/>
               </div>
              )
          }
    }

        </RoomConsumer>
        
    )
}

export default RoomsContainer;