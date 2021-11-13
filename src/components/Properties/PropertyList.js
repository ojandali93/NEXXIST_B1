import React from 'react'

export default function PropertyList(props) {
  const {
    propertyList
  } = props

  console.log(propertyList)
  return (
    <>
      {
        propertyList.map((property) => {
          return(
            <div key={property['zpid']}>
              <p>{property.address}</p>
            </div>
          )
        })
      }
    </>
  )
}
