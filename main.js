function setup(){
canvas=createCanvas(370,370);
canvas.center();
video=createCapture(VIDEO);
video.size(370,370);
video.hide();

}
function draw(){
    image(video,0,0,370,370);
}