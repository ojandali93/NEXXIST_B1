import React from 'react'
import PropertyListItem from './PropertyListItem.js'

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
              <PropertyListItem property={property}/>
            </div>
          )
        })
      }
    </div>
  )
}
