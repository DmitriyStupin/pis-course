// Точка, которая будет с заданным направлением

import { Color, Point } from "./point";

export enum Direction {
    Up = 'up',
    Right = 'right',
    Down = 'down',
    Left = 'left'
}

export class PointWithDirection extends Point {
    direction: Direction;

    constructor(x: number, y: number, color: Color, direction: Direction) {
        super(x, y, color);
        this.direction = direction;
    }
}