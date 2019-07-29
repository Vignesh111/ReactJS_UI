import Data from './data.json'

import React, { Component } from 'react'

    class Contacts extends Component {
      render(){
      return (
        <div className="div1">
          <h1>Contact List</h1>
          {Data.map((details,index)=>{
            return <div class="card">
            <div className="card-body">
              <h5 className="card-title">{details.artist.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{details.artist.genre}</h6>
              <p className="card-text">{details.song.title}</p>
            </div>
          </div>
          })}
            
           
        </div>
      )
     // console.log(contacts)
    }
  }

    export default Contacts