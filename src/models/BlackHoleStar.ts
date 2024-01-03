export default class BlackHoleStar {
  orbital: number;
  x: number;
  y: number;
  yOrigin: number;
  speed: number;
  rotation: number;
  startRotation: number;
  id: number;
  collapseBonus: number;
  color: string;
  hoverPos: number;
  expansePos: number;
  prevR: number;
  prevX: number;
  prevY: number;
  trail: number;
  centerx: number;
  centery: number;

  constructor(cw: number, ch: number, blackHoleStars: BlackHoleStar[]) {
    this.centerx = cw / 2;
    this.centery = ch / 2;

    const maxorbit = 255;

    const rands = [];
    rands.push(Math.random() * (maxorbit / 2) + 1);
    rands.push(Math.random() * (maxorbit / 2) + maxorbit);

    this.orbital = rands.reduce((p, c) => p + c, 0) / rands.length;
    this.x = this.centerx;
    this.y = this.centery + this.orbital;

    this.yOrigin = this.centery + this.orbital;

    this.speed = ((Math.floor(Math.random() * 2.5) + 1.5) * Math.PI) / 180;
    this.rotation = 0;
    this.startRotation =
      ((Math.floor(Math.random() * 360) + 1) * Math.PI) / 180;

    this.id = blackHoleStars.length;

    this.collapseBonus = this.orbital - maxorbit * 0.7;
    if (this.collapseBonus < 0) {
      this.collapseBonus = 0;
    }

    blackHoleStars.push(this);
    this.color = "rgba(255,255,255," + (1 - this.orbital / 255) + ")";

    this.hoverPos = this.centery + maxorbit / 2 + this.collapseBonus;
    this.expansePos =
      this.centery +
      (this.id % 100) * -10 +
      (Math.floor(Math.random() * 20) + 1);

    this.prevR = this.startRotation;
    this.prevX = this.x;
    this.prevY = this.y;
  }

  rotate(
    cx: number,
    cy: number,
    x: number,
    y: number,
    angle: number
  ): [number, number] {
    const radians = angle;
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);
    const nx = cos * (x - cx) + sin * (y - cy) + cx;
    const ny = cos * (y - cy) - sin * (x - cx) + cy;

    return [nx, ny];
  }

  draw(
    expanse: boolean,
    collapse: boolean,
    currentTime: number,
    context: CanvasRenderingContext2D
  ): void {
    if (!expanse) {
      this.rotation = this.startRotation + currentTime * this.speed;

      if (!collapse) {
        if (this.y > this.yOrigin) {
          this.y -= 2.5;
        }

        if (this.y < this.yOrigin - 4) {
          this.y += (this.yOrigin - this.y) / 10;
        }
      } else {
        this.trail = 1;

        if (this.y > this.hoverPos) {
          this.y -= (this.hoverPos - this.y) / -5;
        }

        if (this.y < this.hoverPos - 4) {
          this.y += 2.5;
        }
      }
    } else {
      this.rotation = this.startRotation + currentTime * (this.speed / 2);

      if (this.y > this.expansePos) {
        this.y -= Math.floor(this.expansePos - this.y) / -140;
      }
    }

    context.save();
    context.fillStyle = this.color;
    context.strokeStyle = this.color;
    context.beginPath();
    var oldPos = this.rotate(
      this.centerx,
      this.centery,
      this.prevX,
      this.prevY,
      -this.prevR
    );
    context.moveTo(oldPos[0], oldPos[1]);
    context.translate(this.centerx, this.centery);
    context.rotate(this.rotation);
    context.translate(-this.centerx, -this.centery);
    context.lineTo(this.x, this.y);
    context.stroke();
    context.restore();

    this.prevR = this.rotation;
    this.prevX = this.x;
    this.prevY = this.y;
  }
}
