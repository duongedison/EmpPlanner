import React, { Component } from 'react';
import DateEx from './DateEx';
import "react-datepicker/dist/react-datepicker.css";

class Dropdown extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div>
        <button class="button button2" onClick={this.showMenu}>
          Switch Projects ▼
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <div>
               <DateEx/>
                </div>
                <button class ='button button5'> Menu item 1 </button>
                <button class ='button button6'> Menu item 2 </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Dropdown;