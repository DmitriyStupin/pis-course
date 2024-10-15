import { Color, Point } from "./point";
import { PointWithSpeed } from "./pointWithSpeed";
import { Direction, PointWithDirection } from "./pointWithDirection";
import { 
    parseString,
    parseNumber,
    parseColor,
    parseDirection,
    isValidString,
    isNumber,
    isValidColor,
    isValidDirection
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
    const trimmedText = text.trim().replace(/"/g, '').split(' ')[0];
    if (!POINT_TYPES.includes(trimmedText as StringPointType)) {
        throw new Error('Неверный тип данных объекта');
    }
    return trimmedText as StringPointType;
}

export function createPoint(...args: string[]): Point {
    if (args.length !== 3) {
        throw new Error('Неверное количество аргументов!');
    }
    const [x, y, color] = args;

    if (!isNumber(x) || !isNumber(y)) {
        throw new Error('Координаты должны быть числом!');
    }

    const parsedColor = parseColor(color);
    if (!isValidColor(color)) {
        throw new Error('Недопустимое значение цвета!');
    }
    
    return new Point(parseNumber(x), parseNumber(y), parsedColor as Color);
}

export function createPointWithSpeed(...args: string[]): PointWithSpeed {
    if (args.length !== 4) {
        throw new Error('Ожидалось 4 аргумента: x, y, цвет и скорость');
    }

    const [x, y, color, speed] = args;

    if (!isNumber(x) || !isNumber(y)) {
        throw new Error('Координаты должны быть числом!');
    }

    // Проверка на допустимый цвет
    if (!isValidColor(color)) {
        throw new Error('Цвет должен быть одним из допустимых значений: red, green, blue');
    }

    // Проверка, что скорость является числом
    if (!isNumber(speed)) {
        throw new Error('Скорость должна быть числом');
    }

    return new PointWithSpeed(parseNumber(x), parseNumber(y), color as Color, parseNumber(speed));
}

export function createPointWithDirection(...args: string[]): PointWithDirection {
    if (args.length !== 4) {
        throw new Error('Ожидалось 4 аргумента: x, y, цвет и направление');
    }

    const [x, y, color, direction] = args;

    // Проверка, что x и y являются числами
    if (!isNumber(x) || !isNumber(y)) {
        throw new Error('Координаты должны быть числом!');
    }

    // Проверка на допустимый цвет
    if (!isValidColor(color)) {
        throw new Error('Цвет должен быть одним из допустимых значений: red, green, blue');
    }

    // Проверка на допустимое направление
    if (!isValidDirection(direction)) {
        throw new Error('Направление должно быть одним из допустимых значений: up, down, left, right');
    }

    return new PointWithDirection(parseNumber(x), parseNumber(y), color as Color, direction as Direction);
}

export function create(...args: string[]): PointType {
    const firstArg = args.shift(); // Убираем первый аргумент

    if (!firstArg) {
        throw new Error('Необходимо передать тип точки'); // Проверка на undefined
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