function setup() {
	w = 900
	h = 900
	createCanvas(h, w); // make an HTML canvas element width x height pixels
}

function draw() {
	background(225);
	textSize(32);
	fill(180);
	text(hour(), 10, 30);
	fill(100);
	text(minute(), 10, 60);
	fill(0);
	text(second(), 10, 90);

	stroke(51);


	noStroke();
	fill(color('rgba(107, 191, 130, 0.5)'));
	if(hour()%12 == 1) {
		circle(h/2, w/2, 150);
	}
	else if(hour()%12 == 2) {
		line((h/2)+150, (w/2)+60, (h/2)-100, (w/2)-100);
		line((h/2)+100, (w/2)+100, (h/2)-100, (w/2)-100);
	}
	else if(hour()%12 == 12) {
		polygon(h/2, w/2, 82, 12);
	}
	else if(hour()%12 > 2) {
		polygon(h/2, w/2, 150, hour()%12);
	}

	fill(color('rgba(189, 55, 75, 0.5)'));
	circle(h/2, w/2, (minute()/59)*w*.9);

	noStroke();
	fill(color('rgba(0, 0, 255, 0.2)'));
	circle(h/2, w/2, (second()/59)*w*.9);
}

function polygon(x, y, radius, npoints) {
	let angle = TWO_PI / npoints;
	beginShape();
	for (let a = 0; a < TWO_PI; a += angle) {
	  let sx = x + cos(a) * radius;
	  let sy = y + sin(a) * radius;
	  vertex(sx, sy);
	}
	endShape(CLOSE);
}