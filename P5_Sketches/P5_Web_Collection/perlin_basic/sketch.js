let off1, start;
start = 50
function setup(){
    // createCanvas(640, 480)
    createCanvas(windowWidth, windowHeight)
    // fullScreen()
    colorMode(HSB, 360, 100, 100)
    background(0, 0,100)
    // frameRate(120)
    // noiseSeed(1400)
}
function draw(){
    PerlinIn1D_2()
}

function PerlinIn1D_2(){
    off1 = start
    off2 = 0
    background(190, 90,100)
    noFill()
    noStroke()
    for(let y = 0; y < height/20; y++){
        fill(140,90,  map(y, 0, height/20, 10, 100))
        beginShape()
        vertex(0, height)
        for (let x = 0; x< width; x++){
            hpt = map(noise(off1, off2), 0, 1, 0, height/2)
            hpt =constrain(hpt, 0, height/2)
            vertex(x, hpt+y*20)
            off1 += 0.005
        }
        off2 += 0.05
        vertex(width, height)
        endShape()
    }
    start+=0.01
    // start=off1

}