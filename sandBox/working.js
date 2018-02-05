var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
var fs = require('fs');

var text_to_speech = new TextToSpeechV1({
  username: '7880c2a2-bf0a-4968-bf81-d60afdc65b5c',
  password: 'jIdEvZ3r3gxU'
});


var params = {
  text: 'Hello from IBM Watson',
  voice: 'en-US_AllisonVoice', // Optional voice
  accept: 'audio/wav'
};

// Synthesize speech, correct the wav header, then save to disk
// (wav header requires a file length, but this is unknown until after the header is already generated and sent)
text_to_speech.synthesize(params, function(err, audio) {
    if (err) {
      console.log(err);
      return;
    }
    text_to_speech.repairWavHeader(audio);
    fs.writeFileSync('audio.wav', audio);
    console.log('audio.wav written with a corrected wav header');
});
 
function inform() {
  var dog = document.getElementById("say").value;
  console.log(params.text) ;
  params.text = dog;
  console.log(params.text) ;
   console.log(dog) ;
}