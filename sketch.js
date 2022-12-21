let permission = false;
var C4, D4, E4, F4, G4, A4, B4, C5, D5, E5;
var pitches = [261.6256, 293.6648, 329.6276, 349.2282, 391.9954, 440, 493.8833, 523.2511, 587.3295, 659.2551];
var val;
var wd;
var margin = 50;

function setup() {
  createCanvas(780, 480);
  
  //ios check start
  if(typeof DeviceMotionEvent.requestPermission == "function"){
    background(0);
    textSize(50);
    fill(255);
    textAlign(CENTER);
    text("Touch Piano", width / 2, height /3 );
    textSize(20);
    text("아래의 버튼을 눌러 허용해주세요",  width / 2, height /3 * 1.5);
    button = createButton("Click to iOS Sensor");
    button.mousePressed(iosAccess);
  }
  else{
    background(0, 225, 0);
    fill(255);
    textSize(20);
    text("IOS 기기로 사용해주세요", width / 2, height /3);
  }
  //ios check end

  
  C4 = new p5.Oscillator();
  C4.amp(0);
  
  D4 = new p5.Oscillator();
  D4.amp(0);
  
  E4 = new p5.Oscillator();
  E4.amp(0);
  
  F4 = new p5.Oscillator();
  F4.amp(0);
  
  G4 = new p5.Oscillator();
  G4.amp(0);
  
  A4 = new p5.Oscillator();
  A4.amp(0);
  
  B4 = new p5.Oscillator();
  B4.amp(0);
  
  C5 = new p5.Oscillator();
  C5.amp(0);
  
  D5 = new p5.Oscillator();
  D5.amp(0);
  
  E5 = new p5.Oscillator();
  E5.amp(0);
  
}

//ios function start
function iosAccess(){
  DeviceOrientationEvent.requestPermission()
    .then((response) => {
      if(response === "granted"){
        permission = true;
      }
  })
  .catch(console.error);
}
//ios funstion end

function draw(){
  
  if(!permission) return;
  
  background(0);
  wd = 60;

  for (var i = 0; i < pitches.length; i++) {
    var x = i * wd;
    fill(255);
    rect(x+margin, wd, wd-1, 200);
  }

  textSize(20);
  text('KEY BOARD', margin+50, 30);
  val = map(rotationX, 0, 100, 0, 1);
  
  if(val <= 0){
    val = 0;
    textSize(14);
    text("기기를 움직여보세요!",225+ margin, 40)
  }
  
  textSize(14);
  text("volume: "+val, 225+ margin, 25)
  

  for(var i = 0; i < touches.length; i++){
    if(wd < touches[i].y && touches[i].y <= wd +200 ){
      if(margin< touches[i].x && touches[i].x < wd-1+ margin){
        fill(255, 0, 0);
        rect(margin, wd, wd-1, 200);
        C4.freq(pitches[0]);
        C4.amp(val, 0.5);
      }
      if(wd + margin < touches[i].x && touches[i].x < (wd*2)-1+ margin){
        fill(255, 100, 0);
        rect(wd+ margin, wd, wd-1, 200);
        D4.freq(pitches[1]);
        D4.amp(val, 0.5);
      }
      if((wd*2) + margin < touches[i].x && touches[i].x < (wd*3)-1 + margin){
        fill(255, 255, 0);
        rect(2*wd+ margin, wd, wd-1, 200);
        E4.freq(pitches[2]);
        E4.amp(val, 0.5);
      }
      if((wd*3) + margin< touches[i].x && touches[i].x < (wd*4)-1+ margin){
        fill(0, 255, 0);
        rect(3*wd+ margin, wd, wd-1, 200);
        F4.freq(pitches[3]);
        F4.amp(val, 0.5);
      }
      if((wd*4)+ margin < touches[i].x && touches[i].x < (wd*5)-1+ margin){
        fill(0, 0, 255);
        rect(4*wd+ margin, wd, wd-1, 200);
        G4.freq(pitches[4]);
        G4.amp(val, 0.5);
      }
      if((wd*5)+ margin < touches[i].x && touches[i].x < (wd*6)-1+ margin){
        fill(0, 5, 128);
        rect(5*wd+ margin, wd, wd-1, 200);
        A4.freq(pitches[5]);
        A4.amp(val, 0.5);
      }
      if((wd*6) + margin< touches[i].x && touches[i].x < (wd*7)-1+ margin){
        fill(100, 0, 255);
        rect(6*wd+ margin, wd, wd-1, 200);
        B4.freq(pitches[6]);
        B4.amp(val, 0.5);
      }
      if((wd*7)+ margin < touches[i].x && touches[i].x < (wd*8)-1+ margin){
        fill(255, 0, 0);
        rect(7*wd+ margin, wd, wd-1, 200);
        C5.freq(pitches[7]);
        C5.amp(val, 0.5);
      }
      if((wd*8)+ margin < touches[i].x && touches[i].x < (wd*9)-1+ margin){
        fill(255, 50, 0);
        rect(8*wd+ margin, wd, wd-1, 200);
        D5.freq(pitches[8]);
        D5.amp(val, 0.5);
      }
      if((wd*9)+ margin < touches[i].x && touches[i].x < (wd*10)-1+ margin){
        fill(255, 255, 0);
        rect(9*wd+ margin, wd, wd-1, 200);
        E5.freq(pitches[9]);
        E5.amp(val, 0.5);
      }
    }
  }
}

function touchStarted(){
  getAudioContext().resume();
  
  for(var i = 0; i < touches.length; i++){
    if(wd < touches[i].y && touches[i].y <= wd + 200){
      if(0 + margin < touches[i].x && touches[i].x < wd-1+ margin){
        C4.start();
      }
      if(wd+margin < touches[i].x && touches[i].x < (wd*2)-1+ margin){
        D4.start();
      }
      if((wd*2) + margin< touches[i].x && touches[i].x < (wd*3)-1+ margin){
        E4.start();
      }
      if((wd*3) + margin< touches[i].x && touches[i].x < (wd*4)-1+ margin){
        F4.start();
      }
      if((wd*4)+ margin < touches[i].x && touches[i].x < (wd*5)-1+ margin){
        G4.start();
      }
      if((wd*5)+ margin < touches[i].x && touches[i].x < (wd*6)-1+ margin){
        A4.start();
      }
      if((wd*6) + margin< touches[i].x && touches[i].x < (wd*7)-1+ margin){
        B4.start();
      }
      if((wd*7)+ margin < touches[i].x && touches[i].x < (wd*8)-1+ margin){
        C5.start();
      }
      if((wd*8) + margin< touches[i].x && touches[i].x < (wd*9)-1+ margin){
        D5.start();
      }
      if((wd+9)+ margin < touches[i].x && touches[i].x < (wd*10)-1+ margin){
        E5.start();
      }
    }
  }
}

function touchEnded() {
  C4.amp(0, 0.5);
  D4.amp(0, 0.5);
  E4.amp(0, 0.5);
  F4.amp(0, 0.5);
  G4.amp(0, 0.5);
  A4.amp(0, 0.5);
  B4.amp(0, 0.5);
  C5.amp(0, 0.5);
  D5.amp(0, 0.5);
  E5.amp(0, 0.5);
}
