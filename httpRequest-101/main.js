console.log("First line in JS file", Date.now());

// create a new request object
let myRequest = new XMLHttpRequest();

function executeThisIfXHRFails() {
  console.log("An error occured while transferring the data");
}

function executeThisAfterFileIsLoaded() {
  // console.log("myRequest", myRequest);
  console.log("event.target", event.target);
  // using json.parse turns the json data into a JS object. so 'data' here is an object
  var data = JSON.parse(event.target.responseText); // can also use 'this.responseText'
  console.log("data", data);
  outputSongs(data.songs);
}

// setup event listeners for completed request and aborted request
myRequest.addEventListener("load", executeThisAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisIfXHRFails);

// CRUD
// Create Retrieve Update Destroy

// Tell it which HTTP verb to use: GET, POST, PUT, DELETE, PATCH
myRequest.open("GET", "songs.json");
// Go get it, boy!
myRequest.send();

// DOM manipulation stuff
function outputSongs(songsArr) {
  let songList = document.getElementById("song-list");
  songsArr.forEach(function(song) {
    console.log("song title", song.title);
    songList.innerHTML += `<h2>${song.title}</h2>`;
  });
}

console.log("Last Line in JS file", Date.now());


