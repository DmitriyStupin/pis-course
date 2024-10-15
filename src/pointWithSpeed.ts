// Точка, которая будет с заданной скоростью

import { Color, Point } from "./point";

export class PointWithSpeed extends Point {
    speed: number;

    constructor(x: number, y: number, color: Color, speed: number) {
        super(x, y, color);
        this.speed = speed;
      }
}