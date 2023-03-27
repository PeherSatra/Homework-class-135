video = "";

function preload()
{
    video = createCapture(VIDEO);
    video.hide();
}
function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
}
function draw()
{
    image(video, 0, 0, 480, 380);
}
function start()
{
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}
function modelLoaded()
{
    console.log("Model loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}