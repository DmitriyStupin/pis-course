import { Point } from "./point";
import { PointWithSpeed } from "./pointWithSpeed";
import { PointWithDirection } from "./pointWithDirection";
import { 
    parseString,
    parseNumber,
    parseColor,
    parseDirection,
    isValidString
 } from "./utils";

const POINT_TYPES = ['base', 'direction', 'speed'] as const;
export type StringPointType = typeof POINT_TYPES[number];
export type PointType = Point | PointWithDirection | PointWithSpeed;

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
    if (!isValidString(text)) {
        throw new Error('Ожидался тип данных')
    }
    const string = parseString(text);

    if (!POINT_TYPES.includes(string as StringPointType)) {
        throw new Error('Неверный тип данных объекта');
    }
    return string as StringPointType;
}

export function createPoint(...args: string[]): Point {
    if (args.length !== 3) {
        throw new Error('Неверное количество аргументов!');
    }
    
    const [x, y, sColor] = args;

    if (!isValidString(sColor)) {
        throw new Error('Цвет должен быть строкой!');
    }

    return new Point(
        parseNumber(x),
        parseNumber(y),
        parseColor(sColor)  
    );
}

export function createPointWithSpeed(...args: string[]): PointWithSpeed {
    if (args.length !== 4) {
        throw new Error('Ожидалось 4 аргумента: x, y, цвет и скорость');
    }

    const [x, y, sColor, speed] = args;

    if(!isValidString(sColor)) {
        throw new Error('Цвет должен быть строкой!');
    }

    const color = parseString(sColor);
    return new PointWithSpeed(
        parseNumber(x),
        parseNumber(y),
        parseColor(color),
        parseNumber(speed)
    )
}

export function createPointWithDirection(...args: string[]): PointWithDirection {
    if (args.length !== 4) {
        throw new Error('Ожидалось 4 аргумента: x, y, цвет и направление');
    }
    const [x, y, sColor, sDirection] = args;

    if(!isValidString(sColor)) {
        throw new Error('Цвет должен быть строкой!');
    }

    if (!isValidString(sDirection)) {
        throw new Error('Направление должно быть строкой');
    }

    return new PointWithDirection(
        parseNumber(x),
        parseNumber(y),
        parseColor(sColor),
        parseDirection(sDirection)
    )
}

export function create(...args: string[]): PointType {
    const firstArg = args.shift(); 

    if (!firstArg) {
        throw new Error('Необходимо передать тип точки');
    }

    const type = getLineType(firstArg);
    switch (type) {
        case 'base':
            return createPoint(...args);
        case 'speed':
            return createPointWithSpeed(...args);
        case 'direction':
            return createPointWithDirection(...args);
    }
}