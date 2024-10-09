// Точка с заданной скоростью

import { Point } from "./point";

export class pointWithSpeed extends Point {
    speed: number;

    constructor(x: number, y: number, color: Color, speed: number) {
        super(x, y, color);
        this.speed = speed;
      }
}