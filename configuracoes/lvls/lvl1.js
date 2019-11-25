export const lvl1Config = {
    "id": 1,
    "urlImagem": "./spritesheets/images.png",
    "qtd_ondas": 1,
    "ondas": [
        {
            "id": "onda_1",
            "qtd_inimigos": 5,
            "tipos_inimigos": [1,1,1,1,1],
            "trajetos": [
                {
                    inicio: {x:0, y:0},
                    fim: {x: 100, y: -50}
                },
                {
                    inicio: {x:200, y:0},
                    fim: {x: 800, y: -100}
                },
                {
                    inicio: {x:0, y:0},
                    fim: {x: 30, y: -50}
                },
                {
                    inicio: {x:0, y:0},
                    fim: {x: 150, y: -500}
                },
                {
                    inicio: {x:0, y:0},
                    fim: {x: 200, y: -100}
                }
            ],
        },
    ]
}