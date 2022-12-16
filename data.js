var APP_DATA = {
  "scenes": [
    {
      "id": "0-norman-courtyard",
      "name": "Norman Courtyard",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 3.0704418660014223,
        "pitch": 0.09570085214759771,
        "fov": 1.435449789802722
      },
      "linkHotspots": [
        {
          "yaw": 3.0704412512483916,
          "pitch": 0.4361339283787551,
          "rotation": 0,
          "target": "1-ialt-doorway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ialt-doorway",
      "name": "IALT Doorway",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.1128762651364,
        "pitch": 0.02174681799432676,
        "fov": 1.435449789802722
      },
      "linkHotspots": [
        {
          "yaw": -3.1315298922863164,
          "pitch": 0.06948161079771609,
          "rotation": 0,
          "target": "2-ialt-lobby"
        },
        {
          "yaw": -0.0784289670810363,
          "pitch": 0.12772069409056996,
          "rotation": 0,
          "target": "0-norman-courtyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ialt-lobby",
      "name": "IALT Lobby",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 3.063851842876417,
        "pitch": 0.013019901993205352,
        "fov": 1.435449789802722
      },
      "linkHotspots": [
        {
          "yaw": 2.9579730783495135,
          "pitch": 0.23920685318609713,
          "rotation": 0,
          "target": "3-ialt-lobby-hallway"
        },
        {
          "yaw": -0.05571145913696185,
          "pitch": 0.021912928668285758,
          "rotation": 0,
          "target": "1-ialt-doorway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ialt-lobby-hallway",
      "name": "IALT Lobby [Hallway]",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.954869006931167,
        "pitch": -0.004680093264768814,
        "fov": 1.435449789802722
      },
      "linkHotspots": [
        {
          "yaw": 3.0912579044441726,
          "pitch": 0.19811991099975756,
          "rotation": 0,
          "target": "4-ialt-lounge"
        },
        {
          "yaw": -1.4956116039931082,
          "pitch": 0.16401422457378345,
          "rotation": 0,
          "target": "5-club-door-hallway"
        },
        {
          "yaw": -0.10867617200905144,
          "pitch": 0.2446251143145144,
          "rotation": 0,
          "target": "2-ialt-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-ialt-lounge",
      "name": "IALT Lounge",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.4159935146265337,
        "pitch": 0.05564572964937575,
        "fov": 1.435449789802722
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "5-club-door-hallway",
      "name": "Club Door [Hallway]",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.0277418847530075,
        "pitch": 0.013451418809779625,
        "fov": 1.435449789802722
      },
      "linkHotspots": [
        {
          "yaw": 3.119614443979496,
          "pitch": 0.0068892404414508945,
          "rotation": 0,
          "target": "6-club-room"
        },
        {
          "yaw": -1.6687009490477678,
          "pitch": 0.2413613709904645,
          "rotation": 0,
          "target": "7-quiet-room-door-hallway"
        },
        {
          "yaw": 1.57105303803415,
          "pitch": 0.14334541556765146,
          "rotation": 0,
          "target": "3-ialt-lobby-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-club-room",
      "name": "Club Room",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.018100489016609,
          "pitch": 0.04842878309396781,
          "rotation": 0,
          "target": "5-club-door-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6744847541567909,
          "pitch": 0.21856419523878934,
          "title": "Oculus Quest<br>",
          "text": "Interactive VR experiences with the Oculus Quest!<br>"
        },
        {
          "yaw": 2.077725309499278,
          "pitch": 0.11333641487754065,
          "title": "LEGO Mindstorms<br>",
          "text": "<div>Build and program LEGO creations for exposure to mechanical engineering and software engineering!</div>"
        },
        {
          "yaw": -0.18759687720929463,
          "pitch": 0.025506827385175512,
          "title": "Nintendo LABO <br>",
          "text": "Construct physical gaming interfaces and program games using the Nintendo Switch!<br>"
        },
        {
          "yaw": -0.09082145386335583,
          "pitch": 0.22430289659665092,
          "title": "Microbit Logic Board<br>",
          "text": "Learn the fundamentals of Hardware programming by creating experiences on an emotive circuit board!<br>"
        },
        {
          "yaw": -1.9815184370714451,
          "pitch": 0.33147927305275715,
          "title": "Makey Makey<br>",
          "text": "Use an assortment of hardware interfaces to learn the fundamentals of working with hardware controllers<br>"
        }
      ]
    },
    {
      "id": "7-quiet-room-door-hallway",
      "name": "Quiet Room Door [Hallway]",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.05660820690448887,
          "pitch": 0.07929935991054293,
          "rotation": 0,
          "target": "8-quiet-room"
        },
        {
          "yaw": -1.5476873070177586,
          "pitch": 0.25814919438120043,
          "rotation": 0,
          "target": "5-club-door-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-quiet-room",
      "name": "Quiet Room",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": -1.877288601306141,
        "pitch": 0.059032607515781876,
        "fov": 1.435449789802722
      },
      "linkHotspots": [
        {
          "yaw": -1.3168130415806658,
          "pitch": 0.08094867110017745,
          "rotation": 0,
          "target": "7-quiet-room-door-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.018287037941297,
          "pitch": 0.2854135823170161,
          "title": "Quiet Room<br>",
          "text": "A quiet room to rest and re-energize after a session of tinkering with peers!<br>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
