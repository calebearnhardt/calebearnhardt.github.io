function setup() {
    createCanvas(400, 400);
    background(135, 206, 235); // light blue sky
  
    // Draw the ground
    fill(34, 139, 34); // green grass
    noStroke();
    rect(0, 300, 400, 100); // grass at the bottom
  
    // Draw the golf hole
    fill(0); // black hole
    ellipse(300, 310, 20, 8); // small ellipse for the hole
  
    // Draw the flagstick
    stroke(255); // white flagstick
    strokeWeight(4);
    line(300, 200, 300, 310); // vertical line for the flagstick
  
    // Draw the flag
    noStroke();
    fill(255, 0, 0); // red flag
    triangle(300, 200, 330, 210, 300, 220); // flag shape
  
    // Draw the golf ball
    fill(255); // white golf ball
    ellipse(270, 310, 10, 10); // ball near the hole
  }
  