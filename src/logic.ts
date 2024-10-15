import { Point } from "./point";
import { PointWithSpeed } from "./pointWithSpeed";
import { PointWithDirection } from "./pointWithDirection";
import { 
    parseString,
    parseNumber,
    parseColor,
    parseDirection
 } from "./utils";

const POINT_TYPES = ['base', 'direction', 'speed'];
export type StringPointType = typeof POINT_TYPES[number];
//  export type PointType = Point | PointWithDirection | PointWithSpeed;

import fs from 'fs';

export function readFromFile() {
    return fs.readFileSync('data.txt').toString();
}

export function splitTextToLines(text: string) {
    return text
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
}

export function splitLine(text: string) {
    return text.trim().split(' ');
}

function getLineType(text: string): StringPointType {
    const trimmedText = text.trim();
    if (!POINT_TYPES.includes(trimmedText)) {
        throw new Error('Неверный тип данных объекта');
    }
    return trimmedText as StringPointType;
}