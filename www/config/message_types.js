var message_categories = [
  {
    categoryId = "weather",
    name = "Weather",
    color = "red",
    options: [
      {
        opID = "weather-wind",
        opName = "High Wind",
        opPriority = 6,
        color = "red"
      },
      {
        opID = "weather-snow",
        opName = "Snowstorm",
        opPriority = 8,
        color = "red"
      }
    ]
  },

  {
    burstID = "warning",
    name = "Warning",
    color = "red",
    options: [
      {
        opID = "warning-theft",
        opName = "Theft",
        opPriority = 10,
        color = "red"
      },
      {
        opID = "warning-badroute",
        opName = "Bad Route",
        opPriority = 5,
        color = "red"
      }
    ]
  },

  {
    burstID = "land",
    name = "Land",
    color = "green",
    options: [
      {
        opID = "land-grass",
        opName = "High Grass",
        opPriority = 2,
        color = "green"
      },
      {
        opID = "land-drought",
        opName = "Drought",
        opPriority = 8,
        color = "red"
      }
    ]
  },

  {
    burstID = "market",
    name = "Market",
    color = "green",
    options: [
      {
        opID = "market-wool",
        opName = "Wool Trade",
        opPriority = 2,
        color = "green"
      },
      {
        opID = "market-herbs",
        opName = "Medicinal Herbs",
        opPriority = 2,
        color = "green"
      }
    ]
  },

  {
    burstID = "info",
    name = "Information",
    color = "blue",
    options: [
      {
        opID = "info-loc",
        opName = "My Location",
        opPriority = 1,
        color = "blue"
      },
      {
        opID = "info-meet",
        opName = "Meeting Location",
        opPriority = 8,
        color = "blue"
      }
    ]
  }
]
