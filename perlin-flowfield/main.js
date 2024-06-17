let x_off
let y_off
let z_off = 0
let xy_inc = 0.1
let z_inc = 0.5

let p_amount = 800
let scale = 5
let cols, rows
let particleArr = []
let flowField = []

let clr_bg = 0
let clr_fg = 255
let p_alpha = 20

function setup() {
	createCanvas(800, 400)
	cols = floor(width / scale)
	rows = floor(height / scale)

	background(clr_bg)
	pixelDensity(1)
	frameRate(24)

	particleArr = Array.from({ length: p_amount }, () => new Particle())
}

function draw() {
	y_off = 0
	for (let y = 0; y < rows; y++) {
		x_off = 0
		for (let x = 0; x < cols; x++) {
			let value = noise(x_off, y_off, z_off) * TWO_PI * 2
			flowField[x + y * cols] = p5.Vector.fromAngle(value)
			x_off += xy_inc
		}
		y_off += xy_inc
		z_off += z_inc
	}

	particleArr.forEach((particle) => {
		particle.follow(flowField)
		particle.update()
		particle.show(clr_fg, p_alpha)
		particle.edges()
	})
	// noLoop()
}
