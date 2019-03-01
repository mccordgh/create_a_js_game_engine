const basePath = window.location.href;

export default {
    FONT_SIZE: 32,

    FPS: 60,

    // Iphone 7 in Landscape mode
    GAME_HEIGHT: 551,
    GAME_WIDTH: 980,

    PLOT_HEIGHT: 80,
    PLOT_WIDTH: 80,

    CREATURE_SPEED: 40,

    SPATIAL_GRID_SIZE: 64,

    TYPES: {
        MONSTER: 'monster',
        HOUSE: 'house',
        LANE: 'lane',
        HERO: 'hero',
        PLOT: 'plot',
        GARDEN: 'garden',
        UI: 'ui',
    },

    CREATURE_ANIM_STATS:{
        speed:200,
        width:32,
        length:4,
        height:64,
        row:0,
        col:0,
    },

    FINGER_WIDTH: 16,

    rndIndex: (arr) => arr[Math.floor(Math.random() * (arr.length))],

    BASE_PATH: basePath,
    ASSETS_PATH: `${basePath}src/resources`,
}
