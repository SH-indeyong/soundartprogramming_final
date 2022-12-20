var doh, re, mi, fa, sol, ra, si, dodo, rere, dodo;
var freqs = [261.6256, 293.6648, 329.6276, 349.2282, 391.9954, 440, 493.8833, 523.2511, 587.3295, 659.2551];
var soundsChange= [];
var octave;
var w=60;
var volume=5;
var buttonplus, buttonminus;

function setup() {
  createCanvas(680, 480);
  
  buttonminus = createButton('volume down');
  buttonminus.position(10, 10);
  buttonminus.size(70, 40);
  buttonminus.touchStarted(toggledown);
  
  buttonplus = createButton('volume up');
  buttonplus.position(100, 10);
  buttonplus.size(70, 40);
  buttonplus.touchStarted(toggleup);
  
  doh = new p5.Oscillator();
  doh.setType('sine');
  doh.amp(0);
  
  re = new p5.Oscillator();
  re.setType('sine');
  re.amp(0);
  
  mi = new p5.Oscillator();
  mi.setType('sine');
  mi.amp(0);
  
  fa = new p5.Oscillator();
  fa.setType('sine');
  fa.amp(0);
  
  sol = new p5.Oscillator();
  sol.setType('sine');
  sol.amp(0);
  
  ra = new p5.Oscillator();
  ra.setType('sine');
  ra.amp(0);
  
  si = new p5.Oscillator();
  si.setType('sine');
  si.amp(0);
  
  dodo = new p5.Oscillator();
  dodo.setType('sine');
  dodo.amp(0);
  
  rere = new p5.Oscillator();
  rere.setType('sine');
  rere.amp(0);
  
  dodo = new p5.Oscillator();
  dodo.setType('sine');
  dodo.amp(0);
  
}

function draw(){
  background(200);
  // print(volume);

  // 건반
  for (var i = 0; i < 10; i++) {
    var x = i * w;
    fill(255);
    rect(x, 60, w-1, 200);
  }
  
  textSize(20);
  fill(0);
  
  //Y축 기울기에 따라 옥타브 변경
  for (var n = 0; n < freqs.length; n++){
    if(-90<= rotationY && rotationY < -75){
      soundsChange[n] = freqs[n]/8
      octave = 1
    }
    if(-75<= rotationY && rotationY < -45){
      soundsChange[n] = freqs[n]/4
      octave = 2
    }
    if(-45<= rotationY && rotationY < -15){
      soundsChange[n] = freqs[n]/2
      octave = 3
    }
    if(-15<= rotationY && rotationY < 15){
      soundsChange[n] = freqs[n]
      octave = 4
    }
    if(15<= rotationY && rotationY < 45){
      soundsChange[n] = freqs[n]*2
      octave = 5
    }
    if(45<= rotationY && rotationY < 75){
      soundsChange[n] = freqs[n]*4
      octave = 6
    }
    if(75<= rotationY && rotationY < 90){
      soundsChange[n] = freqs[n]*8
      octave = 7
    }
  }
  
  text(octave+"옥타브", 500, 40);
  text("volume: "+volume, 200, 40);
  
  //건반 터치 시 색 변화
  for(var m = 0; m < touches.length; m++){
    if(60 < touches[m].y && touches[m].y < 200 ){
      if(0 < touches[m].x && touches[m].x < w-1){
        fill(255, 0, 0);
        rect(0, 60, w-1, 200);
        doh.freq(soundsChange[0]);
        doh.amp(volume, 0.5);
        // print('now'+volume);    //활인용
      }
      if(w < touches[m].x && touches[m].x < (2*w)-1){
        fill(255, 100, 0);
        rect(w, 60, w-1, 200);
        re.freq(soundsChange[1]);
        re.amp(volume, 0.5);
      }
      if(2*w < touches[m].x && touches[m].x < (3*w)-1){
        fill(255, 255, 0);
        rect(2*w, 60, w-1, 200);
        mi.freq(soundsChange[2]);
        mi.amp(volume, 0.5);
      }
      if(3*w < touches[m].x && touches[m].x < (4*w)-1){
        fill(0, 255, 0);
        rect(3*w, 60, w-1, 200);
        fa.freq(soundsChange[3]);
        fa.amp(volume, 0.5);
      }
      if(4*w < touches[m].x && touches[m].x < (5*w)-1){
        fill(100, 200, 255);
        rect(4*w, 60, w-1, 200);
        sol.freq(soundsChange[4]);
        sol.amp(volume, 0.5);
      }
      if(5*w < touches[m].x && touches[m].x < (6*w)-1){
        fill(0, 0, 255);
        rect(5*w, 60, w-1, 200);
        ra.freq(soundsChange[5]);
        ra.amp(volume, 0.5);
      }
      if(6*w < touches[m].x && touches[m].x < (7*w)-1){
        fill(150, 0, 255);
        rect(6*w, 60, w-1, 200);
        si.freq(soundsChange[6]);
        si.amp(volume, 0.5);
      }
      if(7*w < touches[m].x && touches[m].x < (8*w)-1){
        fill(150, 0, 0);
        rect(7*w, 60, w-1, 200);
        dodo.freq(soundsChange[7]);
        dodo.amp(volume, 0.5);
      }
      if(8*w < touches[m].x && touches[m].x < (9*w)-1){
        fill(200, 50, 0);
        rect(8*w, 60, w-1, 200);
        rere.freq(soundsChange[8]);
        rere.amp(volume, 0.5);
      }
      if(9*w < touches[m].x && touches[m].x < (10*w)-1){
        fill(255, 150, 0);
        rect(9*w, 60, w-1, 200);
        dodo.freq(soundsChange[9]);
        dodo.amp(volume, 0.5);
      }
    }
  }
}

function touchEnded() {
  doh.amp(0, 0.5);
  re.amp(0, 0.5);
  mi.amp(0, 0.5);
  fa.amp(0, 0.5);
  sol.amp(0, 0.5);
  ra.amp(0, 0.5);
  si.amp(0, 0.5);
  dodo.amp(0, 0.5);
  rere.amp(0, 0.5);
  dodo.amp(0, 0.5);
  
}

function touchStarted(){
  // getAudioCon().resume();
  
  for(var j = 0; j < touches.length; j++){
    if(60 < touches[j].y && touches[j].y < 200){
      if(0 < touches[j].x && touches[j].x < w-1){           //도
        doh.start();
      }
      if(w < touches[j].x && touches[j].x < (2*w)-1){       //레
        re.start();
      }
      if(2*w < touches[j].x && touches[j].x < (3*w)-1){     //미
        mi.start();
      }
      if(3*w < touches[j].x && touches[j].x < (4*w)-1){     //파
        fa.start();
      }
      if(4*w < touches[j].x && touches[j].x < (5*w)-1){     //솔
        sol.start();
      }
      if(5*w < touches[j].x && touches[j].x < (6*w)-1){     //라
        ra.start();
      }
      if(6*w < touches[j].x && touches[j].x < (7*w)-1){     //시
        si.start();
      }
      if(7*w < touches[j].x && touches[j].x < (8*w)-1){     //옥타브도
        dodo.start();
      }
      if(8*w < touches[j].x && touches[j].x < (9*w)-1){     //옥타브레
        rere.start();
      }
      if(9*w < touches[j].x && touches[j].x < (10*w)-1){     //옥타브미
        dodo.start();
      }
    }
  }
}

function toggleup(){
  if(volume==100){
    print('max');
  }else{
    volume += 5
  }
}

function toggledown(){
  if(volume==0){
    print('mute');
  }else{
    volume -= 5;
  }
}