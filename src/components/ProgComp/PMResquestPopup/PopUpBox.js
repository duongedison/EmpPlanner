import React from 'react'
import Popup from 'reactjs-popup'
import Submit from './Submit'

export default () => (
  <Popup trigger={<button className="button"> Request form </button>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Request Form </div>
        <div className="content">
          {' '}
            <Submit/>
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Help!? </button>}
            position="top center"
            closeOnDocumentClick
          >
            <span>
              The Requirements for a proper request include:
                Entering the required fields.
                This is a test run.
                No its not perfect.
                Yes you can fill in whatever you want. 
            </span>
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ')
              close()
            }}
          >
            Close.
          </button>
        </div>
      </div>
    )}
  </Popup>
)