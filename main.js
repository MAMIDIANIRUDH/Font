function setup(){
    video = createCapture(VIDEO);
    video.size(700, 700);
    
    canvas = createCanvas(1000, 700);
    canvas.position(800,150);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
    }
    
    function modelLoaded(){
        console.log('PoseNet Is Initialized!');
    }
    
    function draw(){
        background('lightgreen');
    }
    function gotPoses(results)
    {
        if(results.length > 0)
        {
            console.log(results);
        }
    }