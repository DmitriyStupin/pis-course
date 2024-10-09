// Точка с заданным направлением

import { Point } from "./point";

enum Direction {
    Up = 'up',
    Right = 'right',
    Down = 'down',
    Left = 'left'
}

export class pointWithDirection extends Point {
    direction: Direction;

    constructor(x: number, y: number, color: Color, direction: Direction) {
        super(x, y, color);
        this.direction = direction;
    }
}