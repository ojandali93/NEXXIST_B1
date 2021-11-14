import React from 'react'
import SinglePropertyList from './SinglePropertyList.js'

export default function PropertyList(props) {
  const {
    propertyList
  } = props

  console.log(propertyList)
  return (
    <div className='property-list-container'>
      {
        propertyList.map((property) => {
          return(
            <div key={property['zpid']}>
              <SinglePropertyList property={property}/>
            </div>
          )
        })
      }
    </div>
  )
}
