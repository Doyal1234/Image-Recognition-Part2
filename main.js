Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
})
document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">'
})
}
console.log('Version of ML5',ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/dkyK85VVv/model.json",Model_Loaded);
function Model_Loaded() {
console.log("Your model has been loaded");
}