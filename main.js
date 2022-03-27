function setup() {
video = createCapture(VIDEO)
video.size = (550, 500);

canvas = createCanvas(500, 500);
canvas.position(560,140);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw() {
    background('#42ebad');
}

function modelLoaded() {
    console.log('PoseNet is Intialized')
}

function gotPoses(results) 
{
    if(results.net > 0) 
    {
     console.log(results);    
    }
}