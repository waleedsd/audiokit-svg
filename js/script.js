
audiosrc = {
    "Big Thwack" : "1.mp3",
    "Boom Chuk" : "2.mp3",
    "First Beat" : "3.mp3",
    "Briving Force": "4.mp3",
    Tamba : "5.mp3",
    basicRock: "6.mp3"
    };
    
    /*console.log(audioSrc["Big Thwack"])  doesnot work with me
    let audioSource = (audiosrc["Big Thwack"]); ---- doesnot work with me :( */
        
    let kickDrum = document.querySelector('.playable');
    let playTheDrum = function() {
     /*HI Rocco
     I also tried to target class, to then target data-source using
      (Event.target.classList.contains('waleed')) {
        but not succeed, the stress is really high :) */
    
    let sfx = new Audio('audio/3.mp3');
 
    sfx.play()
    };
    kickDrum.addEventListener('click', playTheDrum)
    /*let audioDrumKit = document.querySelectorAll('.waleed');
let getclickedDrum;

/*if(audioDrumKit) {
audioDrumKit.forEach(function(path) {
path.onclick = function() {
  //let sfx = new Audio (`Event.target.dataset.audio`);
  //alert(`${audioDrumKit}.innerHTML`);
  var sdn = document.queryselector("data-audio");
  alert('sdn.innerHTML')
}

});

}*/
