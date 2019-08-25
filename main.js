document.addEventListener('DOMContentLoaded', function(){ 
    const url = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/audios/';
    const drumKit = document.getElementById('drum-kit');  
    const keys = [  
        { name: 'Kick Left', key: 'C', audio: 'BD1_ELEC' }, 
        { name: 'Snare', key: 'G', audio: 'SD2_REV' },
        { name: 'Closed Hit-Hat', key: 'S', audio: 'HAT_C1' },
        { name: 'Open Hit-Hat', key: 'A', audio: 'HAT_O1' },
        { name: 'Ride', key: 'J', audio: 'HIT_ELEC' },
        { name: 'Crash', key: 'U', audio: 'CRASH' },
        { name: 'Tom High', key: 'T', audio: 'ETOM_H' },
        { name: 'Tom Mid', key: 'R', audio: 'ETOM_M' },
        { name: 'Tom Low', key: 'E', audio: 'ETOM_L' }
    ];
    for( i in keys) {
        drumKit.innerHTML += `
            <button class="key"> ${ keys[i].key } <span>${ keys[i].name }</span></button>             
            <audio class="audio" src="audios/${ keys[i].audio }.ogg" type="audio/ogg"></audio>  
        `;
    };   
    document.addEventListener('click', function(e){
        if( e.target.className === 'key'){
            play(e);
        }
    });
    document.addEventListener('keydown', function(e){  
        for( i in keys){ 
            if ( 'Key' + keys[i]['key'] === e.code ){ 
                play( keys[i]['audio'] );
            } 
        };  
    }); 
    function play(e){ 
        if( !e.target ){
            console.log('ok');
            for ( i in drumKit.children ){ 
                if ( drumKit.children[i].src === url + e + '.ogg' ) {
                    drumKit.children[i].play(); 
                }
            }  
        } else {
            e.target.nextElementSibling.play();
        }
    }
});