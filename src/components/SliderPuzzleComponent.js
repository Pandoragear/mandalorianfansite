import React, { Component } from 'react';
import './SliderPuzzle.css';

class SliderPuzzle extends Component {
  
    render() {
        return(
          <div>
            <h3>Slider Puzzle</h3>

            <div id="table" style={{display: 'table'}}>
               <div id="row1" style={{display: 'table-row'}}>
                  <div id="cell11" class="tile1" style={{display: 'table-cell'}}></div>
                  <div id="cell12" class="tile2" style={{display: 'table-cell'}}></div>
                  <div id="cell13" class="tile3" style={{display: 'table-cell'}}></div>
              </div>
               <div id="row2" style={{display: 'table-row'}}>
                  <div id="cell21" class="tile4" style={{display: 'table-cell'}}></div>
                  <div id="cell22" class="tile5" style={{display: 'table-cell'}}></div>
                  <div id="cell23" class="tile6" style={{display: 'table-cell'}}></div>
              </div>
               <div id="row3" style={{display: 'table-row'}}>
                  <div id="cell31" class="tile7" style={{display: 'table-cell'}}></div>
                  <div id="cell32" class="tile8" style={{display: 'table-cell'}}></div>
                  <div id="cell33" class="tile9" style={{display: 'table-cell'}}></div>
              </div>

            </div>
          </div>
        ); 
      }
  }

export default SliderPuzzle;