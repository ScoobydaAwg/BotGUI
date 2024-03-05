var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama-reception-image",
      "name": "panorama reception image",
      "audio":"Begin at the entrance of the building or the starting point(Reception).From the Reception, turn left.",
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
        "yaw": -1.4204423280192664,
        "pitch": -0.0032783062983234856,
        "fov": 1.3401592523986738
      },
      "linkHotspots": [
        {
          "yaw": 2.9379813638049237,
          "pitch": 0.30747438829167706,
          "rotation": 0,
          "target": "2-corridor-gnd-floor-left"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-intel-lab",
      "name": "intel lab",
      "audio":"Your desired location will be situated on the right side of the pathway.",
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
        "yaw": -2.6338699838384123,
        "pitch": 0.2117402964055195,
        "fov": 1.3401592523986738
      },
      "linkHotspots": [
        {
          "yaw": -1.0040104789668653,
          "pitch": 0.6105429713337021,
          "rotation": 0,
          "target": "2-corridor-gnd-floor-left"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.614091311190105,
          "pitch": -0.06383058893857552,
          "title": "Intel Unnati Lab",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-corridor-gnd-floor-left",
      "name": "corridor gnd floor left",
      "audio":"Follow the corridors that lead in that direction",
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
        "yaw": -2.514598871066415,
        "pitch": 0.13446144604382582,
        "fov": 1.3401592523986738
      },
      "linkHotspots": [
        {
          "yaw": -2.4470182955835824,
          "pitch": 0.6547441005649919,
          "rotation": 6.283185307179586,
          "target": "1-intel-lab"
        },
        {
          "yaw": 0.43817159550250473,
          "pitch": 0.7554476279195228,
          "rotation": 0,
          "target": "0-panorama-reception-image"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Intel lab",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
