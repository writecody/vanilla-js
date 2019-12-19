// Initialize variables
let preview = document.getElementById("preview");
let recording = document.getElementById("recording");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let downloadButton = document.getElementById("downloadButton");
let logParagraph = document.getElementById("logElement");

let recordingTimeMS = 5000;

// Utility functions
function log(msg) {
  let logParagraph = document.createElement('p');
  logParagraph.innerHTML += msg + "\n";
}

function wait(delayInMS) {
  return new Promise(resolve => setTimeout(resolve, delayInMS));
}

// Start recording
function startRecording(stream, lengthInMS) {
  let recorder = new MediaRecorder(stream);
  let data = [];

  recorder.ondataavailable = event => data.push(event.data);
  recorder.start();
  log(recorder.state + " for " + (lengthInMS / 1000) + " seconds...");

  let stopped = new Promise((resolve, reject) => {
    recorder.onstop = resolve;
    recorder.onerror = event => reject(event.name);
  });

  let recorded = wait(lengthInMS).then(
    () => recorder.state == "recording" && recorder.stop()
  );

  return Promise.all([
    stopped,
    recorded
  ])
    .then(() => data);
}

// Stop the input stream
function stop(stream) {
  stream.getTracks().forEach(track => {
    track.stop();
  });
}

// Get an input stream and set up the recorder
startButton.addEventListener("click", function () {
  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
  }).then(stream => {
    preview.srcObject = stream;
    downloadButton.href = stream;
    preview.captureStream = preview.captureStream || preview.mozCaptureStream;
    return new Promise(resolve => preview.onplaying = resolve);
  }).then(() => startRecording(preview.captureStream(), recordingTimeMS))
    .then(recordedChunks => {
      let recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
      recording.src = URL.createObjectURL(recordedBlob);
      downloadButton.href = recording.src;
      downloadButton.download = "RecordedVideo.webm";

      log("Successfully recorded " + recordedBlob.size + " bytes of " + recordedBlob.type + " media.");
    })
    .catch(log);
}, false);

// Stop button handler
stopButton.addEventListener("click", function () {
  stop(preview.srcObject);
}, false);