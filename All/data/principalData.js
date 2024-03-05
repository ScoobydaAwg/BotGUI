var APP_DATA = {
  "scenes": [
    {
      "id": "0-reception",
      "name": "Reception",
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
        "yaw": -1.1545220619022647,
        "pitch": -0.104242471427753,
        "fov": 1.3900591270580378
      },
      "linkHotspots": [
        {
          "yaw": -1.4349158612848374,
          "pitch": 0.14419356291083574,
          "rotation": 6.283185307179586,
          "target": "1-bursar-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bursar-room",
      "name": "Bursar Room",
      "audio":"Once you reach the top of the stairs, turn left.Follow the corridors that lead in that direction.",
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
        "yaw": 2.5883826132231835,
        "pitch": -0.0451528512553061,
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
          "yaw": 2.075895233971547,
          "pitch": 0.16350195585475902,
          "rotation": 18.06415775814132,
          "target": "2-principal-room"
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
      "id": "2-principal-room",
      "name": "Principal room",
      "audio":"Continue walking straight until you reach your destination.The location you are looking for will be on the left side of the path",
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
        "yaw": -1.86943889210775,
        "pitch": -0.0017882941208693381,
        "fov": 1.3900591270580378
      },
      "linkHotspots": [
        {
          "yaw": 1.8949569291336994,
          "pitch": 0.349727410672779,
          "rotation": 0,
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
