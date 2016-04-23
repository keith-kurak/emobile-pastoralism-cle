var clevelandData = [
  {//Hospital
    isBurst: false,  //defines message type; burst (isBurst = true) or beacon (isBurst=false)
    burstDuration: 0,  //if burst, defines initial burst length; beacon default to 0
    priority: 1,  //priority designation of 0 (low) or 1 (high)
    title: 'Fairview Hospital', //name of message
    type: 'hospital',  //placeholder, matches icon name
    address1: '18101 Lorain Avenue', //street address of location, if known
    address2: 'Cleveland, OH 44111', //city, state, zip of location, if known
    phone: '(216) 476-7000',  //telephone of location, if known
    mapUrl: '', //url for map
    detailImgUrl: '', //url for detailed image
    detailText: '', //additional information about message
    locationDesc: 'East of the Rocky River, South of I-90', //additional location description, esp if address unknown
    iconUrl: '', //url for icon
    lonLatCoordinates:[-81.8618, 41.415] //Longitude and latitude for this location 
  },

  {//Police
    isBurst: false,  //defines message type; burst (isBurst = true) or beacon (isBurst=false)
    burstDuration: 0,  //if burst, defines initial burst length; beacon default to 0
    priority: 1,  //priority designation of 0 (low) or 1 (high)
    title: 'Cleveland Police Department', //name of message
    type: 'police',  //placeholder, matches icon name
    address1: '6600 Detroit Avenue', //street address of location, if known
    address2: 'Cleveland, OH 44102', //city, state, zip of location, if known
    phone: '(216) 348-7117',  //telephone of location, if known
    mapUrl: '', //url for map
    detailImgUrl: '', //url for detailed image
    detailText: '', //additional information about message
    locationDesc: 'South of Lake Erie, West of Cuyahoga River', //additional location description, esp if address unknown
    iconUrl: '', //url for icon
  },

  {//Monastery
    isBurst: false,  //defines message type; burst (isBurst = true) or beacon (isBurst=false)
    burstDuration: 0,  //if burst, defines initial burst length; beacon default to 0
    priority: 0,  //priority designation of 0 (low) or 1 (high)
    title: 'Poor Clares Monastery', //name of message
    type: 'monastery',  //placeholder, matches icon name
    address1: '3501 Rocky River Drive', //street address of location, if known
    address2: 'Cleveland, OH 44111', //city, state, zip of location, if known
    phone: '(216) 941-2820',  //telephone of location, if known
    mapUrl: '', //url for map
    detailImgUrl: '', //url for detailed image
    detailText: '', //additional information about message
    locationDesc: 'East of the Rocky River, South of Lake Erie', //additional location description, esp if address unknown
    iconUrl: '', //url for icon
  },

  {//Veterinarian
    isBurst: false,  //defines message type; burst (isBurst = true) or beacon (isBurst=false)
    burstDuration: 0,  //if burst, defines initial burst length; beacon default to 0
    priority: 1,  //priority designation of 0 (low) or 1 (high)
    title: 'Gateway Animal Clinic', //name of message
    type: 'vet',  //placeholder, matches icon name
    address1: '1819 Abbey Avenue', //street address of location, if known
    address2: 'Cleveland, OH 44113', //city, state, zip of location, if known
    phone: '(216) 771-4414',  //telephone of location, if known
    mapUrl: '', //url for map
    detailImgUrl: '', //url for detailed image
    detailText: '', //additional information about message
    locationDesc: 'South of Cuyahoga River, South of Abbey Park', //additional location description, esp if address unknown
    iconUrl: '', //url for icon
  },

  {//Urgent weather message
    isBurst: true,  //defines message type; burst (isBurst = true) or beacon (isBurst=false)
    burstDuration: 5,  //if burst, defines initial burst length; beacon default to 0
    priority: 1,  //priority designation of 0 (low) or 1 (high)
    title: 'High Winds', //name of message
    type: 'weather',  //placeholder, matches icon name
    address1: '', //street address of location, if known
    address2: '', //city, state, zip of location, if known
    phone: '',  //telephone of location, if known
    mapUrl: '', //url for map
    detailImgUrl: '', //url for detailed image
    detailText: '', //additional information about message
    locationDesc: 'Lake Erie lakefront', //additional location description, esp if address unknown
    iconUrl: '', //url for icon
  },

  {//Grass message
    isBurst: true,  //defines message type; burst (isBurst = true) or beacon (isBurst=false)
    burstDuration: 10,  //if burst, defines initial burst length; beacon default to 0
    priority: 0,  //priority designation of 0 (low) or 1 (high)
    title: 'High Grass Growth', //name of message
    type: 'land',  //placeholder, matches icon name
    address1: 'Upper Edgewater Drive', //street address of location, if known
    address2: 'Cleveland, OH 44102', //city, state, zip of location, if known
    phone: '',  //telephone of location, if known
    mapUrl: '', //url for map
    detailImgUrl: '', //url for detailed image
    detailText: '', //additional information about message
    locationDesc: 'Edgewater Park, South of Lake Erie', //additional location description, esp if address unknown
    iconUrl: '', //url for icon
  },

  {//Marketplace message
    isBurst: false,  //defines message type; burst (isBurst = true) or beacon (isBurst=false)
    burstDuration: 0,  //if burst, defines initial burst length; beacon default to 0
    priority: 0,  //priority designation of 0 (low) or 1 (high)
    title: 'West Side Market', //name of message
    type: 'market',  //placeholder, matches icon name
    address1: '1979 W 25th Street', //street address of location, if known
    address2: 'Cleveland, OH 44113', //city, state, zip of location, if known
    phone: '(216) 664-3387',  //telephone of location, if known
    mapUrl: '', //url for map
    detailImgUrl: '', //url for detailed image
    detailText: '', //additional information about message
    locationDesc: 'Ohio City, South of Cuyahoga River', //additional location description, esp if address unknown
    iconUrl: '', //url for icon
  },

]
