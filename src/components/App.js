import React, { useState, useEffect,  } from 'react'
import '../css/App.css';
import Header from './Header/Header.js'
import PropertyList from './Properties/PropertyList.js'
import Property from './Properties/Property.js'

const axios = require("axios").default
export const PropertyListContext = React.createContext()

let options = {
  method: 'GET',
  url: 'https://zillow-com1.p.rapidapi.com/propertyExtendedSearch',
  params: {location: 'santa monica, ca', home_type: 'Houses'},
  headers: {
    'x-rapidapi-host': 'zillow-com1.p.rapidapi.com',
    'x-rapidapi-key': ''
  }
}

let propertyOptions = {
  method: 'GET',
  url: 'https://zillow-com1.p.rapidapi.com/property',
  headers: {
    'x-rapidapi-host': 'zillow-com1.p.rapidapi.com',
    'x-rapidapi-key': ''
  }
}

function App() {

  const [propertyList, setPropertyList] = useState([])
  const [selectedPage, setSelectedPage] = useState('LOADING')
  const [selectedProperty, setSelectedProperty] = useState({})

  function requestInitialListings(){
    axios.request(options).then(function (response) {
      let resultList = response.data.props
      let listOfProperties = []
      for(let i = 0; i < 6; i++){
        let currentProperty = resultList[i]
        let createdProperty = {
          'address': currentProperty['address'],
          'bathrooms': currentProperty['bathrooms'],
          'bedrooms': currentProperty['bedrooms'],
          'country': currentProperty['country'],
          'currency': currentProperty['currency'],
          'hasImage': currentProperty['hasImage'],
          'imgSrc': currentProperty['imgSrc'],
          'listingStatus': currentProperty['listingStatus'],
          'livingArea': currentProperty['livingArea'],
          'lotAreaUnit': currentProperty['lotAreaUnit'],
          'lotAreaValue': currentProperty['lotAreaValue'],
          'price': currentProperty['price'],
          'propertyType': currentProperty['propertyType'],
          'zpid': currentProperty['zpid'],
        }
        listOfProperties.push(createdProperty)
      }
      buildCompleteProperties(listOfProperties) 
    }).catch(function (error) {
      console.error(error);
    });
  }

  function buildCompleteProperties(listOfProperties){
    let i = 0;
    function next() {
      propertyOptions['params'] = {
        zpid: listOfProperties[i]['zpid']
      };
      axios.request(propertyOptions).then(function (response) {
        let results = response.data
        console.log(results)
        listOfProperties[i]['brokerageName'] = results['brokerageName']
        listOfProperties[i]['daysOnZillow'] = results['resoFacts']['daysOnZillow']
        listOfProperties[i]['propertyTaxRate'] = results['propertyTaxRate']
        listOfProperties[i]['zestimate'] = results['zestimate']
        listOfProperties[i]['rentZestimate'] = results['rentZestimate']
        listOfProperties[i]['associationFee'] = results['resoFacts']['associationFee']
        listOfProperties[i]['hasAssociation'] = results['resoFacts']['hasAssociation']
        listOfProperties[i]['hasHomeWarranty'] = results['resoFacts']['hasHomeWarranty']
        listOfProperties[i]['depositsAndFees'] = results['resoFacts']['depositsAndFees']
        listOfProperties[i]['hoaFee'] = results['resoFacts']['hoaFee']
        listOfProperties[i]['armRate'] = results['mortgageRates']['arm5Rate']
        listOfProperties[i]['fifteenYearFixedRate'] = results['mortgageRates']['fifteenYearFixedRate']
        listOfProperties[i]['thirtyYearFixedRate'] = results['mortgageRates']['thirtyYearFixedRate']
        listOfProperties[i]['mlsid'] = results['mlsid']
        listOfProperties[i]['listingAgent'] = results['listed_by']['display_name']
        listOfProperties[i]['taxAnnualAmount'] = (((listOfProperties[i]['propertyTaxRate'] / 100) * listOfProperties[i]['price'])/12).toFixed(2)
        listOfProperties[i]['annualHomeInsurance'] = (parseInt(listOfProperties[i]['price']) * .0042).toFixed(2)
        i++;
        if (i < listOfProperties.length) {
          next()
        } else {
          setPropertyList(listOfProperties)
        }
      });
    }
    next();
  }

  useEffect(() => {
    requestInitialListings()
  }, [])

  useEffect(() =>{
    console.log('succesfully added propertyList')
    setSelectedPage('HOME')
  }, [propertyList])

  const handlePageSelect = (page, zpid) => {
    for(let i = 0; i < propertyList.length; i++){
      if(propertyList[i]['zpid'] === zpid){
        setSelectedProperty(propertyList[i])
      }
    }
    setSelectedPage(page)
  }

  const propertyListContextValue = {
    selectedPage,
    setSelectedPage,
    handlePageSelect
  }

  return (
    <div className="App">
      <PropertyListContext.Provider value={propertyListContextValue}>
        <Header />
        {
          propertyList.length === 0 ? <h1 className='loading-screen'>Loading Properties...</h1> : null
        }
        {
          {
            'HOME': <PropertyList propertyList={propertyList}/>,
            'SINGLE PROPERTY': <Property property={selectedProperty}/>
          }[selectedPage]
        }
      </PropertyListContext.Provider>
    </div>
  );
}

export default App;
