var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama-reception",
      "name": "panorama reception",
      "audio":"Begin at the entrance of the building or the starting point.Climb the stairs to the upper level",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.4451963057172321,
        "pitch": 0,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -1.3882702703036145,
          "pitch": 0.10700690363742282,
          "rotation": 6.283185307179586,
          "target": "1-panorama-bursar-office"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.762519659464438,
          "pitch": 0.42764992004817515,
          "title": "Reception",
          "text": "Text"
        },
        {
          "yaw": 0.3747607541275517,
          "pitch": 0.08409029698524861,
          "title": "Turn right",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-panorama-bursar-office",
      "name": "panorama bursar office",
      "audio":"Once you reach the top of the stairs, turn right from the bursars office.Follow the corridors that lead in that direction",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.104884340232214,
        "pitch": 0.01535079787835869,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -0.6483122147338687,
          "pitch": 0.2908853238027689,
          "rotation": 7.0685834705770345,
          "target": "0-panorama-reception"
        },
        {
          "yaw": 1.4317117075322,
          "pitch": 0.2842020278786599,
          "rotation": 4.71238898038469,
          "target": "0-panorama-reception"
        },
        {
          "yaw": -1.567079323200561,
          "pitch": 0.27187969943616785,
          "rotation": 0,
          "target": "2-1st-floor-right"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.032739842204025,
          "pitch": -0.005134574422601901,
          "title": "Bursar office",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-1st-floor-right",
      "name": "1st floor right",
      "audio":"Proceed straight down the corridor beyond the Dinette until you arrive at your destination",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.9158817417447374,
        "pitch": -0.014759826119902897,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -0.9978005676277064,
          "pitch": 0.25308023570429583,
          "rotation": 0,
          "target": "1-panorama-bursar-office"
        },
        {
          "yaw": 2.252360399622882,
          "pitch": 0.35911960527733555,
          "rotation": 0,
          "target": "3-panorama-nursing-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.8081703289937785,
          "pitch": -0.008093587129621937,
          "title": "Senatus hall",
          "text": "Text"
        },
        {
          "yaw": -2.3613160960472896,
          "pitch": 0.05853082124589193,
          "title": "Board room",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-panorama-nursing-room",
      "name": "panorama nursing room",
      "audio":"Your desired location will be situated on the right side of the pathway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.414534890649028,
        "pitch": 0.008464502957307829,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -0.20938741162703423,
          "pitch": 0.2648875843546943,
          "rotation": 0,
          "target": "2-1st-floor-right"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.4145204673662057,
          "pitch": 0.25450733823463345,
          "title": "Nursing station and Staff room",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "nursing station",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
