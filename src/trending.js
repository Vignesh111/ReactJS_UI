import React from 'react'
import Data2 from './trending.json'
import { Component } from 'react'

    class Trending extends Component {
      render(){
      return (
        <div className="card2">
          <h1>Trending</h1>
          {Data2.map((details,index)=>{
            return <div >
            <div className ="card-body">
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

    export default Trending