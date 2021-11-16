import React, { useContext } from 'react';
import PropertyImage from './PropertyImage.js';
import PropertyDetails from './PropertyDetails.js';
import PropertyListRevAndExp from './PropertyListRevAndExp.js';
import PropertyListMetrics from './PropertyListMetrics.js';
import PropertyContactAgent from './PropertyContactAgent.js';
import { PropertyListContext } from '../App.js';

export default function PropertyListItem(props) {
  const {
    property
  } = props

  const { handlePageSelect } = useContext(PropertyListContext)

  return (
    <div onClick={() => {handlePageSelect('SINGLE PROPERTY', property['zpid'])}} className="single-property-list-container">
      <PropertyImage property={property}/>
      <PropertyDetails property={property}/>
      <PropertyListRevAndExp property={property}/>
      <PropertyListMetrics property={property}/>
      <PropertyContactAgent property={property}/>
    </div>
  )
}
