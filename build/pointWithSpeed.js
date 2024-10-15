"use strict";
// Точка, которая будет с заданной скоростью
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointWithSpeed = void 0;
const point_1 = require("./point");
class PointWithSpeed extends point_1.Point {
    constructor(x, y, color, speed) {
        super(x, y, color);
        this.speed = speed;
    }
}
exports.PointWithSpeed = PointWithSpeed;
