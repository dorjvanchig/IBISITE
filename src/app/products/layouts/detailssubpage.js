import React from 'react'

function Detailssubpage({ isDetails , children}) {
    if (isDetails === 0) {
      return (
        <div className='mx-[10%]'> 
        { children }
        </div>
      )
    } else {
      return
    }
  }

export default Detailssubpage