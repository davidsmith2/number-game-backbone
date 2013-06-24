define([
],

function () {

    return {

        maxTiles: 100,
        maxTopScores: 10,

        strings: {
            currentGuess: {
                low: 'Low',
                high: 'High',
                equal: 'Match'
            },
            results: {
                win: 'win',
                lose: 'lose',
                quit: 'quit'
            }
        },

        skillLevels: [
            {
                guessesAllowed: 13,
                description: 'naive novices',
                selected: true
            },
            {
                guessesAllowed: 10,
                description: 'aspirational amateurs',
                selected: false
            },
            {
                guessesAllowed: 7,
                description: 'polished professionals',
                selected: false
            }
        ],

        overlays: {
            closeOnClick: false,
            closeOnEsc: false,
            left: 'left',
            mask: {
                color: '#333',
                loadSpeed: 100,
                maskId: 'mask',
                opacity: 0.75,
                zIndex: 9998
            },
            load: true,
            oneInstance: false
        }
    };

});