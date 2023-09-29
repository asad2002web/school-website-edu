import React from 'react'
import { loadingSVG } from '../../assets'

const IsLoading = () => {
  return (
    <div>
     <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={loadingSVG} alt="" />
    </div>
    </div>
  )
}

export default IsLoading