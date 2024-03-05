var APP_DATA = {
  "scenes": [
    {
      "id": "0-reception",
      "name": "Reception",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.8553660386366122,
        "pitch": -0.06342659497863323,
        "fov": 1.3900591270580378
      },
      "linkHotspots": [
        {
          "yaw": -1.4057596869000548,
          "pitch": 0.123597439463909,
          "rotation": 0,
          "target": "1-bursar-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.27800871773835567,
          "pitch": -0.04496650621098297,
          "title": "Reception<div><br></div>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-bursar-room",
      "name": "Bursar Room",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.5393450509262792,
        "pitch": -0.005429086872901223,
        "fov": 1.3900591270580378
      },
      "linkHotspots": [
        {
          "yaw": 1.510100916671079,
          "pitch": 0.09281243867494737,
          "rotation": 4.71238898038469,
          "target": "0-reception"
        },
        {
          "yaw": -0.9162857875963102,
          "pitch": 0.08339696255120366,
          "rotation": 7.853981633974483,
          "target": "0-reception"
        },
        {
          "yaw": 0.29116067037828586,
          "pitch": 0.06590759186743078,
          "rotation": 0,
          "target": "2-vice-principal"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.5454565863856153,
          "pitch": -0.29253039103872425,
          "title": "Bursar's Office",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-vice-principal",
      "name": "Vice Principal",
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
        "yaw": -2.4906754422028303,
        "pitch": -0.03916277312304217,
        "fov": 1.3900591270580378
      },
      "linkHotspots": [
        {
          "yaw": -0.5854263394973334,
          "pitch": 0.060959005441603153,
          "rotation": 7.853981633974483,
          "target": "1-bursar-room"
        },
        {
          "yaw": 1.7743735244422947,
          "pitch": 0.025111752433868872,
          "rotation": 4.71238898038469,
          "target": "1-bursar-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
