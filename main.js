document.addEventListener('DOMContentLoaded', function(){  
    const drumKit = document.getElementById('drum-kit');  
    const keys = [   
        { name: 'BASSELEC', key: 'Z', audio: 'BASSELEC' },
        { name: 'BASSFNK1', key: 'C', audio : 'BASSFNK1' },
        { name: 'BASSFNK2', key: 'X', audio : 'BASSFNK2' },
        { name: 'BD1_ELEC', key: 'C', audio : 'BD1_ELEC' },
        { name: 'BD2_REV', key: 'X', audio : 'BD2_REV' },
        { name: 'BD3_ACOU', key: 'Z', audio : 'BD3_ACOU' },
        // { name: 'CLAP_1', key: 'K', audio : 'CLAP_1' }, 
        // { name: 'CLICK_1', key: 'W', audio : 'CLICK_1' },
        // { name: 'CLICK_2', key: 'W', audio : 'CLICK_2' },
        // { name: 'CLICK_3', key: 'W', audio : 'CLICK_3' },
        { name: 'CRASH', key: 'U', audio : 'CRASH' }, 
        { name: 'ETOM_L', key: 'K', audio : 'ETOM_L' },
        { name: 'ETOM_M', key: 'J', audio : 'ETOM_M' },
        //{ name: 'FLANGED', key: 'F', audio : 'FLANGED' },
        { name: 'HAT_C1', key: 'A', audio : 'HAT_C1' },
        // { name: 'HAT_C2', key: 'A', audio : 'HAT_C2' },
        // { name: 'HAT_C3', key: 'A', audio : 'HAT_C3' },
        // { name: 'HAT_C4', key: 'A', audio : 'HAT_C4' },
        // { name: 'HAT_C5', key: 'A', audio : 'HAT_C5' },
        { name: 'HAT_O1', key: 'S', audio : 'HAT_O1' },
        // { name: 'HAT_O2', key: 'S', audio : 'HAT_O2' },
        // { name: 'HIT_ELEC', key: '', audio : 'HIT_ELEC' },
        // { name: 'HIT_FLNG', key: '', audio : 'HIT_FLNG' },
        // { name: 'HIT_GATE', key: '', audio : 'HIT_GATE' },
        // { name: 'HIT_ORCH', key: '', audio : 'HIT_ORCH' },
        { name: 'REVTOM_H', key: 'J', audio : 'REVTOM_H' },
        { name: 'REVTOM_L', key: 'K', audio : 'REVTOM_L' },
        // { name: 'RIM', key: '', audio : 'RIM' },
        // { name: 'SD1_ELEC', key: 'G', audio : 'SD1_ELEC' },
        // { name: 'SD1_FLAM', key: 'G', audio : 'SD1_FLAM' },
        // { name: 'SD1_GATE', key: 'G', audio : 'SD1_GATE' },
        // { name: 'SD2_FLNG', key: 'G', audio : 'SD2_FLNG' },
        // { name: 'SD2_GATE', key: 'G', audio : 'SD2_GATE' },
        { name: 'SD2_REV', key: 'G', audio : 'SD2_REV' },
        // { name: 'SD3_ACOU', key: 'G', audio : 'SD3_ACOU' },
        // { name: 'SD4_GATE', key: 'G', audio : 'SD4_GATE' },
        // { name: 'SNAP', key: '', audio : 'SNAP' },
        // { name: 'TIMPANI', key: '', audio : 'TIMPANI' },
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
            if ( 'Key' + keys[i]['key'] === e.code){
                play( keys[i]['audio'] ); 
            } 
        };  
    });  
    function play(e){  
        const part = drumKit.children; 
        if( !e.target ){    
            for ( i in part){  

                if( part[i].className === 'audio'){ 
                    var source = part[i].src.substring( part[i].src.lastIndexOf('/') + 1 ); 
                    if ( source === e + '.ogg') { 
                        part[i].load(); 
                        part[i].play();  
                        part[i].play();  
                    } 
                }     
            }  
        } else { 
            e.target.nextElementSibling.load(); 
            e.target.nextElementSibling.play(); 
        }
    } 
});