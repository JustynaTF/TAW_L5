export class Point {
constructor(public x: number, public y: number) {}

move(dx: number, dy: number) {
this.x += dx;
this.y += dy;
}
}

export class Rectangle {
constructor(private point1: Point, private point2: Point, private point3: Point, private point4: Point) {}

move(dx: number, dy: number): void {
this.point1.move(dx, dy);
this.point2.move(dx, dy);
this.point3.move(dx, dy);
this.point4.move(dx, dy);
}

getArea(): number {
const width = this.point2.x - this.point1.x;
const height = this.point3.y - this.point2.y;
return width * height;
}
}

const point1 = new Point(2, 2);
const point2 = new Point(5, 2);
const point3 = new Point(2, 0);
const point4 = new Point(5, 0);

const rect = new Rectangle(point1, point2, point3, point4);

console.log(rect.getArea());