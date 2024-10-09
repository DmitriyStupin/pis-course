"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
class Point {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
}
exports.Point = Point;
