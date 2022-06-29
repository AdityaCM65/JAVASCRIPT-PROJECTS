const like = document.querySelector('#like');
const volumeBtn = document.querySelector('#volumeBtn');
const song = document.querySelector('#songTag');
const playBtn = document.querySelector('#playBtn');
const songName = document.querySelector('#songName');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
let diskImage = document.querySelector('.diskImage');
let songRange = document.querySelector('#songRange');
const loopIcon = document.querySelector('#loopIcon');
const listIcon = document.querySelector('#listIcon');
const navBar = document.querySelector('#navBar');
const heading = document.querySelector('#heading');







let count = 0;
let indexNo = 0;


let songs = [
    {
        name: "Aashiqui Aa Gayi",
        path: "http://127.0.0.1:5500/songs/song1.mp3"
    },
    {
        name: "Lambiyaan Si Judaayin",
        path: "http://127.0.0.1:5500/songs/song2.mp3"
    },
    {
        name: "Tera Hua",
        path: "http://127.0.0.1:5500/songs/song3.mp3"
    },
    {
        name: "Tu Hi Mera Meet",
        path: "http://127.0.0.1:5500/songs/song4.mp3"
    },
    {
        name: "Rangdaari",
        path: "http://127.0.0.1:5500/songs/song5.mp3"
    },
    {
        name: "Desh Mere",
        path: "http://127.0.0.1:5500/songs/song6.mp3"
    }

];

const loadSong = (indexNo) => {

    song.src = songs[indexNo].path;
    songName.innerHTML = songs[indexNo].name;
    song.play();
    diskImage.classList.add('circular');


   


};


playBtn.addEventListener('click', () => {
    if (count === 0) {
        playBtn.src = "http://127.0.0.1:5500/images/pauseIcon.png";
        loadSong(indexNo);
        count = 1;
    }
    else {

       
        loadSong(indexNo);
        song.pause();
        playBtn.src = "http://127.0.0.1:5500/images/playIcon.png";
        diskImage.classList.remove('circular');
        count = 0;
    }
});


nextBtn.addEventListener('click', () => {

    if (indexNo < songs.length - 1) {
        indexNo += 1;
        loadSong(indexNo);
        playBtn.src = "http://127.0.0.1:5500/images/pauseIcon.png";


    }
    else {
        indexNo = 0;
        loadSong(indexNo);
        playBtn.src = "http://127.0.0.1:5500/images/pauseIcon.png";



    }

});


prevBtn.addEventListener('click', () => {

    if (indexNo > 0) {
        indexNo -= 1;
        loadSong(indexNo);
        playBtn.src = "http://127.0.0.1:5500/images/pauseIcon.png";


    }
    else {
        indexNo = songs.length - 1;
        loadSong(indexNo);
        playBtn.src = "http://127.0.0.1:5500/images/pauseIcon.png";


    }

});


volumeBtn.addEventListener('click', () => {
    if (count === 0) {
        volumeBtn.src = "http://127.0.0.1:5500/images/volumeMute.png";
        song.muted = true;
        count = 1;
    }
    else {
        volumeBtn.src = "http://127.0.0.1:5500/images/volumeIcon.png";
        song.muted = false;


        count = 0;
    }
});

loopIcon.addEventListener('click', () => {
    if (count === 0) {
        loopIcon.src = "http://127.0.0.1:5500/images/loopOnIcon.png";
       
        count = 1;
    }
    else {
        loopIcon.src = "http://127.0.0.1:5500/images/loopOffIcon.png";
       
     
        count = 0;
    }
});


like.addEventListener('click', () => {
    if (count === 0) {
        like.src = "http://127.0.0.1:5500/images/heartFavIcon.png";
        alert("Add To Favourite");
        count = 1;
    }
    else {
        like.src = "http://127.0.0.1:5500/images/heartOutlineIcon.png";
        alert("Remove From Favourite");
        
        count = 0;
    }
});



song.addEventListener('timeupdate' , () => {

    songRange.setAttribute('max',song.duration);
 songRange.value = song.currentTime;

 if(song.currentTime >= song.duration ) {
    indexNo = indexNo + 1;
    loadSong(indexNo);
    }

});

songRange.addEventListener('click' , () => {
    song.currentTime = songRange.value;
});






