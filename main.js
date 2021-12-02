function preload(){

}
function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet=ml5.poseNet(video,POSENET_LOADED);
    posenet.on('pose',gotALL);
}
function draw(){
    image(video,0,0,300,300);



}
function take_snapshot(){
    save('King.png');
}
function POSENET_LOADED(){
    console.log("posenet loaded successfully!!");
}
function gotALL(keypoints){
    if(keypoints.length > 0){
        console.log(keypoints);
        console.log("nose x="+keypoints[0].pose.nose.x);
        console.log("nose y="+keypoints[0].pose.nose.y);
        console.log("left eye x="+keypoints[0].pose.leftEye.x);
        console.log("left eye y="+keypoints[0].pose.leftEye.y);

    }
    
}
