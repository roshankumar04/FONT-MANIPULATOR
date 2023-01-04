  difference=0;
  rightwrist_x=0;
  leftwrist_x=0;
  function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function draw(){
    background("gray");
    document.getElementById("font_move").innerHTML="font size of text will be "+difference+" px";
    textSize(difference);
    fill("red");
    text('Roshan',50,400);
}
function gotPoses(results){
  if(results.length>0){
    console.log(results);
    rightwrist_x=results[0].pose.rightWrist.x;
    leftwrist_x=results[0].pose.leftWrist.x;
    difference=floor(leftwrist_x-rightwrist_x);
  }  
}