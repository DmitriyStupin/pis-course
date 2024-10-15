export enum Color {
    Red = 'red',
    Green = 'green',
    Blue = 'blue',
}

export class Point {
    x: number;
    y: number;
    color: Color;
  
    constructor(x: number, y: number, color: Color) {
      this.x = x;
      this.y = y;
      this.color = color;
    }
}