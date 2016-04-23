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

]
