var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama-reception",
      "name": "panorama reception",
      "audio":"Begin at the entrance of the building or the starting point.From the Reception, turn right",
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
          "yaw": 0.5383791434460115,
          "pitch": 0.2344952042447872,
          "rotation": 0,
          "target": "1-panorama-ground-right"
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
      "id": "1-panorama-ground-right",
      "name": "panorama ground right",
      "audio":"Follow the corridors that lead in that direction.Your desired location will be situated on the left side of the pathway.",
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
        "yaw": -1.2662235490585605,
        "pitch": 0.09126183525667031,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": 1.7827228521523928,
          "pitch": 0.24766530887060334,
          "rotation": 0,
          "target": "0-panorama-reception"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.9177066563460556,
          "pitch": 0.2230638363490982,
          "title": "Visitors lounge",
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
