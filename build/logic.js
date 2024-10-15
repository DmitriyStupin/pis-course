"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFromFile = readFromFile;
exports.splitTextToLines = splitTextToLines;
exports.splitLine = splitLine;
exports.createPoint = createPoint;
exports.createPointWithSpeed = createPointWithSpeed;
exports.createPointWithDirection = createPointWithDirection;
exports.create = create;
const point_1 = require("./point");
const pointWithSpeed_1 = require("./pointWithSpeed");
const pointWithDirection_1 = require("./pointWithDirection");
const utils_1 = require("./utils");
const POINT_TYPES = ['base', 'direction', 'speed'];
const fs_1 = __importDefault(require("fs"));
function readFromFile() {
    return fs_1.default.readFileSync('data.txt').toString();
}
function splitTextToLines(text) {
    return text
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0);
}
function splitLine(text) {
    return text.trim().split(' ');
}
function getLineType(text) {
    if (!(0, utils_1.isValidString)(text)) {
        throw new Error('Ожидался тип данных');
    }
    const trimmedText = text.trim().replace(/"/g, '').split(' ')[0];
    if (!POINT_TYPES.includes(trimmedText)) {
        throw new Error('Неверный тип данных объекта');
    }
    return trimmedText;
}
function createPoint(...args) {
    if (args.length !== 3) {
        throw new Error('Неверное количество аргументов!');
    }
    const [x, y, color] = args;
    if (!(0, utils_1.isNumber)(x) || !(0, utils_1.isNumber)(y)) {
        throw new Error('Координаты должны быть числом!');
    }
    const parsedColor = (0, utils_1.parseColor)(color);
    if (!(0, utils_1.isValidColor)(color)) {
        throw new Error('Недопустимое значение цвета!');
    }
    return new point_1.Point((0, utils_1.parseNumber)(x), (0, utils_1.parseNumber)(y), parsedColor);
}
function createPointWithSpeed(...args) {
    if (args.length !== 4) {
        throw new Error('Ожидалось 4 аргумента: x, y, цвет и скорость');
    }
    const [x, y, color, speed] = args;
    if (!(0, utils_1.isNumber)(x) || !(0, utils_1.isNumber)(y)) {
        throw new Error('Координаты должны быть числом!');
    }
    // Проверка на допустимый цвет
    if (!(0, utils_1.isValidColor)(color)) {
        throw new Error('Цвет должен быть одним из допустимых значений: red, green, blue');
    }
    // Проверка, что скорость является числом
    if (!(0, utils_1.isNumber)(speed)) {
        throw new Error('Скорость должна быть числом');
    }
    return new pointWithSpeed_1.PointWithSpeed((0, utils_1.parseNumber)(x), (0, utils_1.parseNumber)(y), color, (0, utils_1.parseNumber)(speed));
}
function createPointWithDirection(...args) {
    if (args.length !== 4) {
        throw new Error('Ожидалось 4 аргумента: x, y, цвет и направление');
    }
    const [x, y, color, direction] = args;
    // Проверка, что x и y являются числами
    if (!(0, utils_1.isNumber)(x) || !(0, utils_1.isNumber)(y)) {
        throw new Error('Координаты должны быть числом!');
    }
    // Проверка на допустимый цвет
    if (!(0, utils_1.isValidColor)(color)) {
        throw new Error('Цвет должен быть одним из допустимых значений: red, green, blue');
    }
    // Проверка на допустимое направление
    if (!(0, utils_1.isValidDirection)(direction)) {
        throw new Error('Направление должно быть одним из допустимых значений: up, down, left, right');
    }
    return new pointWithDirection_1.PointWithDirection((0, utils_1.parseNumber)(x), (0, utils_1.parseNumber)(y), color, direction);
}
function create(...args) {
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
