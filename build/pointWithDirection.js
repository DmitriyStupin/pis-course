"use strict";
// Точка с заданным направлением
Object.defineProperty(exports, "__esModule", { value: true });
exports.pointWithDirection = void 0;
const point_1 = require("./point");
var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Right"] = "right";
    Direction["Down"] = "down";
    Direction["Left"] = "left";
})(Direction || (Direction = {}));
class pointWithDirection extends point_1.Point {
    constructor(x, y, color, direction) {
        super(x, y, color);
        this.direction = direction;
    }
}
exports.pointWithDirection = pointWithDirection;
