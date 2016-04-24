var message_categories = [
  {
    categoryId : "weather",
    name : "Weather",
    color : "red",
    options: [
      {
        opID : "weather-wind",
        opName : "High Wind",
        opPriority : 6,
        color : "red"
      },
      {
        opID : "weather-snow",
        opName : "Snowstorm",
        opPriority : 8,
        color : "red"
      }
    ]
  },

  {
    categoryId : "warning",
    name : "Warning",
    color : "red",
    options: [
      {
        opID : "warning-theft",
        opName : "Theft",
        opPriority : 10,
        color : "red"
      },
      {
        opID : "warning-badroute",
        opName : "Bad Route",
        opPriority : 5,
        color : "red"
      }
    ]
  },

  {
    categoryId : "land",
    name : "Land",
    color : "green",
    options: [
      {
        opID : "land-grass",
        opName : "High Grass",
        opPriority : 2,
        color : "green"
      },
      {
        opID : "land-drought",
        opName : "Drought",
        opPriority : 8,
        color : "red"
      }
    ]
  },

  {
    categoryId : "market",
    name : "Market",
    color : "green",
    options: [
      {
        opID : "market-wool",
        opName : "Wool Trade",
        opPriority : 2,
        color : "green"
      },
      {
        opID : "market-herbs",
        opName : "Medicinal Herbs",
        opPriority : 2,
        color : "green"
      }
    ]
  },

  {
    categoryId : "map",
    name : "Location",
    color : "blue"
  }
]