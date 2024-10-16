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
    const string = (0, utils_1.parseString)(text);
    if (!POINT_TYPES.includes(string)) {
        throw new Error('Неверный тип данных объекта');
    }
    return string;
}
function createPoint(...args) {
    if (args.length !== 3) {
        throw new Error('Неверное количество аргументов!');
    }
    const [x, y, sColor] = args;
    if (!(0, utils_1.isValidString)(sColor)) {
        throw new Error('Цвет должен быть строкой!');
    }
    return new point_1.Point((0, utils_1.parseNumber)(x), (0, utils_1.parseNumber)(y), (0, utils_1.parseColor)(sColor));
}
function createPointWithSpeed(...args) {
    if (args.length !== 4) {
        throw new Error('Ожидалось 4 аргумента: x, y, цвет и скорость');
    }
    const [x, y, sColor, speed] = args;
    if (!(0, utils_1.isValidString)(sColor)) {
        throw new Error('Цвет должен быть строкой!');
    }
    const color = (0, utils_1.parseString)(sColor);
    return new pointWithSpeed_1.PointWithSpeed((0, utils_1.parseNumber)(x), (0, utils_1.parseNumber)(y), (0, utils_1.parseColor)(color), (0, utils_1.parseNumber)(speed));
}
function createPointWithDirection(...args) {
    if (args.length !== 4) {
        throw new Error('Ожидалось 4 аргумента: x, y, цвет и направление');
    }
    const [x, y, sColor, sDirection] = args;
    if (!(0, utils_1.isValidString)(sColor)) {
        throw new Error('Цвет должен быть строкой!');
    }
    if (!(0, utils_1.isValidString)(sDirection)) {
        throw new Error('Направление должно быть строкой');
    }
    return new pointWithDirection_1.PointWithDirection((0, utils_1.parseNumber)(x), (0, utils_1.parseNumber)(y), (0, utils_1.parseColor)(sColor), (0, utils_1.parseDirection)(sDirection));
}
function create(...args) {
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
