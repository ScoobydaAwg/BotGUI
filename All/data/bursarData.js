var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama-reception-image",
      "name": "panorama reception image",
      "audio":"Begin at the entrance of the building or the starting point.Climb the stairs to the upper level.",
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
        "yaw": -1.3588390976729467,
        "pitch": 0,
        "fov": 1.3401592523986738
      },
      "linkHotspots": [
        {
          "yaw": -1.3979100520047698,
          "pitch": 0.12470292417836149,
          "rotation": 0,
          "target": "1-panorama-image-bursar-room-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-panorama-image-bursar-room-front",
      "name": "panorama image bursar room front",
      "audio":"Once you reach the top of the stairs you will see Bursars office",
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
        "yaw": -2.880063961812265,
        "pitch": 0.0847570898021921,
        "fov": 1.3401592523986738
      },
      "linkHotspots": [
        {
          "yaw": 1.4839466630578748,
          "pitch": 0.3254113653456727,
          "rotation": 10.995574287564278,
          "target": "0-panorama-reception-image"
        },
        {
          "yaw": -0.7844960185916197,
          "pitch": 0.3473987474181257,
          "rotation": 0.7853981633974483,
          "target": "0-panorama-reception-image"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.509336790883598,
          "pitch": 0.036175116089818715,
          "title": "Bursar room",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-panorama-right-side-1st-floor",
      "name": "panorama right side 1st floor",
      "audio":"Once you reach the top of the stairs you will see Bursars office",
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
        "yaw": -1.8230353518934574,
        "pitch": 0.1097236423769612,
        "fov": 1.3401592523986738
      },
      "linkHotspots": [
        {
          "yaw": 2.011631971043327,
          "pitch": 0.46695869217225194,
          "rotation": 0,
          "target": "1-panorama-image-bursar-room-front"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.2704510699402647,
          "pitch": 0.5888284305218754,
          "title": "Principals room",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
