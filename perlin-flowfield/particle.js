class Particle {
	constructor() {
		this.pos = createVector(random(width), random(height))
		this.vel = p5.Vector.random2D()
		this.maxVel = 5
		this.acc = createVector(0, 0)
	}
	update() {
		this.vel.add(this.acc)
		this.vel.limit(this.maxVel)
		this.pos.add(this.vel)
		this.acc.mult(0)
	}
	applyForce(force) {
		this.acc.add(force)
	}
	show(color, opacity) {
		stroke(color, opacity)
		point(this.pos.x, this.pos.y)
	}
	follow(vectors) {
		let x = floor(this.pos.x / scale)
		let y = floor(this.pos.y / scale)
		this.applyForce(vectors[x + y * cols])
	}
	edges() {
		this.pos.x = (this.pos.x + width) % width
		this.pos.y = (this.pos.y + height) % height
	}
}
