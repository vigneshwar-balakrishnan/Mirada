var base64Image = "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";
var imgBlobURL = '';
var textOutput = '';
var playButton = document.getElementById('playButton');

////////////////// I M A G E  U P L O A D  &  B A S E-64  C O N V E R S I O N //////////////////
function encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function (e) {
        let imgDataURL = e.target.result;
        base64Image = imgDataURL.split(',')[1];
        console.log("base64Image:", base64Image);

        imgBlobURL = URL.createObjectURL(file);
        document.getElementById('previewImg').src = imgBlobURL;
        console.log("imgBlobURL:", imgBlobURL);

        // Image => Text
        image2Text();

    }
    reader.readAsDataURL(file);
}
////////////////// ////////////////// ////////////////// ////////////////// //////////////////


function status(response) {
    if (response.status >= 200 && response.status < 300) {
        console.log("Status is 200: ", response.status);
        return Promise.resolve(response)
    } else if (response.status >= 300 && response.status < 400) {
        console.log("Status is 300: ", response.status);
        return Promise.resolve(response)
    } else if (response.status >= 400 && response.status < 500) {
        console.log("Status is 400: ", response.status);
        return Promise.resolve(response)
    } else {
        console.log("Status is (all else): ", response.status);
        return Promise.reject(new Error(response.statusText))
    }
}

function json(response) {
    // console.log(response.json());
    return response.json();
}
function toBlob(response) {
    return response.blob();
}
function toText(response) {
    return response.text();
}

function image2Text() {

    var apiURL = "https://vision.googleapis.com/v1/images:annotate?key=" + GOOGLE_VISION_KEY;
    // var apiURL = "http://www.mocky.io/v2/5a7715fd2c000033003773da";


    // Set Headers
    var myHeaders = new Headers({
        'Content-Type': 'application/json'
    });

    var postRqBody = {
        "requests": [
            {
                "image": {
                    "content": base64Image
                },
                "features": [
                    {
                        "type": "TEXT_DETECTION"
                    }
                ]
            }
        ]
    }

    // myInit
    var myInit = {
        method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(postRqBody)
    };

    fetch(apiURL, myInit)
        .then(status)
        .then(json)
        .then(function (data) {

            console.log('Request succeeded with JSON response', data);
            textOutput = data.responses[0].textAnnotations[0].description.replace(/\n/g, " ");
            console.log(textOutput);

            document.getElementById("displayText").innerText = textOutput;

            // Text => Audio
            text2Audio();

        }).catch(error => console.error('Error:', error));
}

////////////////// ////////////////// ////////////////// ////////////////// //////////////////

////////////////// ////////////////// T E X T to A U D I O ////////////////// //////////////////

function text2Audio() {
    let username = IBM_WATSON_TEXTtoSPEECH_USERNAME;
    console.log(username);
    let password = IBM_WATSON_TEXTtoSPEECH_PASSWORD;
    console.log(password);
    let apiURL = "https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize";
    // let apiURL = "https://stream.watsonplatform.net/authorization/api/v1/token?url=https://stream.watsonplatform.net/text-to-speech/api";
    let myHeaders = new Headers({
        'Accept': 'audio/ogg',
        'Content-Type': 'application/json',
    });
    // 'Accept': 'text/plain',
    // myHeaders.append('Authorization', 'Basic ' + btoa(username + ':' + password))
    myHeaders.append('X-Watson-Authorization-Token', IBM_TOKEN);

    var initObj = {
        method: 'POST',
        mode: 'cors',
        headers: myHeaders,
        credentials: 'include',
        body: JSON.stringify({
            'text': textOutput
        })
    };
    console.log(JSON.stringify({
        'text': textOutput
    }));
    // body: JSON.stringify({
    //     "text": "Ben is a lazy ass!",
    // }),
    // mode: 'cors',

    fetch(apiURL, initObj)
        .then(status)
        .then(toBlob)
        // .then(function (data) {
        //     console.log(data);
        // })
        // .catch(error => console.error('Error:', error));
        .then(function (audioBlob) {
            var audio = document.getElementById('myAudioElement') || new Audio();
            var audioObjURL = URL.createObjectURL(audioBlob);
            audio.src = audioObjURL;
            console.log(audioObjURL);
            // audio.onload = function (evt) {
            //     URL.revokeObjectUrl(audioObjURL);
            // };
            audio.play();
            playButton.style.display = "block";
            playButton.addEventListener("click", function (event) {
                audio.play();
            });

        }).catch(error => console.error('Error:', error));
}


