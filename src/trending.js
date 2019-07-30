import React from 'react'
import Data2 from './trending.json'
import { Component } from 'react'

    class Trending extends Component {
      render(){
      return (
        <div className="card2">
          <center><h1>Trending</h1></center>
          {Data2.map((details,index)=>{
            return <div >
            <div className ="card-body">
            <center><h5 className="card-title">{details.song.title}</h5></center>
            <center><h6 className="card-subtitle mb-2 text-muted">{details.artist.genre}</h6></center>
            <center><p className="card-text">{details.artist.name}</p></center>
            </div>
          </div>
          })}
            
         
        </div>
      )
     // console.log(contacts)
    }
  }

    export default Trending