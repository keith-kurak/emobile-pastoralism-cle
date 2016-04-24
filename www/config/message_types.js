var message_categories = [
  {
    id : "weather",
    name : "Weather",
    color : "red",
    options: [
      {
        id : "weather-wind",
        name : "High Wind",
        priority : 6,
        color : "red"
      },
      {
        id : "weather-snow",
        name : "Snowstorm",
        priority : 8,
        color : "red"
      },
      {
        id: "weather-storm",
        name: "Storm",
        priority: 8,
        color: "red"
      },
      {
        id: "weather-flood",
        name: "Flood",
        priority: 5,
        color: "red"
      }
    ]
  },

  {
    id : "warning",
    name : "Warning",
    color : "red",
    options: [
      {
        id : "warning-theft",
        name : "Theft",
        priority : 10,
        color : "red"
      },
      {
        id : "warning-badroute",
        name : "Bad Route",
        priority : 5,
        color : "red"
      }
    ]
  },

  {
    id : "land",
    name : "Land",
    color : "green",
    options: [
      {
        id : "land-grass",
        name : "High Grass",
        priority : 2,
        color : "green"
      },
      {
        id : "land-drought",
        name : "Drought",
        priority : 8,
        color : "red"
      },
      {
        id: "land-pest",
        name: "Pest Infestation",
        priority: 6,
        color: "red"
      },
      {
        id: "land-deforest",
        name: "Deforestation",
        priority: 5,
        color: "red"
      }
    ]
  },

  {
    id : "market",
    name : "Market",
    color : "green",
    options: [
      {
        id : "market-wool",
        name : "Wool Trade",
        priority : 2,
        color : "green"
      },
      {
        id : "market-herbs",
        name : "Medicinal Herbs",
        priority : 2,
        color : "green"
      },
      {
        id: "market-food",
        name: "Food Market",
        priority: 5,
        color: "green"
      }
    ]
  },

  {
    id : "map",
    name : "Location",
    color : "blue"
  }
]
