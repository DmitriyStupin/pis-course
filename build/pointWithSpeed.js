"use strict";
// Точка с заданной скоростью
Object.defineProperty(exports, "__esModule", { value: true });
exports.pointWithSpeed = void 0;
const point_1 = require("./point");
class pointWithSpeed extends point_1.Point {
    constructor(x, y, color, speed) {
        super(x, y, color);
        this.speed = speed;
    }
}
exports.pointWithSpeed = pointWithSpeed;
