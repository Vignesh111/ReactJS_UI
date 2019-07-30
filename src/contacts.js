import Data from './data.json'

import React, { Component } from 'react'

    class Contacts extends Component {
      render(){
      return (
        <div className="div1">
          
          <h1><center>Favorites</center></h1>
          <table>
         
            <tr>
              
              <th className="card-title" ><center>Track</center></th>
              <th className="card-title" ><center>Album</center></th>
              <th className="card-title" ><center>Duration</center></th>
              
            </tr>
          
          {Data.map((details,index)=>{
            return <tr>
           
              <td><center><h5 className="card-title">{details.song.title}</h5></center></td>
              <td><center><h6 className="card-subtitle mb-2 text-muted">{details.artist.genre}</h6></center></td>
              <td><center><p className="card-text">{details.artist.name}</p></center></td>
            
            </tr>
            
          })}
             
          </table>
            
            
        </div>
      )
     // console.log(contacts)
    }
  }

    export default Contacts