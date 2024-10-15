"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidString = isValidString;
exports.isNumber = isNumber;
exports.isValidColor = isValidColor;
exports.isValidDirection = isValidDirection;
exports.parseString = parseString;
exports.parseNumber = parseNumber;
exports.parseColor = parseColor;
exports.parseDirection = parseDirection;
const stringRegexp = /^".*"$/;
const numberRegex = /^-?\d+(\.\d+)?$/;
const colorRegex = /^(red|green|blue)$/i;
const directionRegex = /^(up|down|left|right)$/i;
// Проверки строк
function isValidString(value) {
    return stringRegexp.test(value);
}
function isNumber(value) {
    return numberRegex.test(value);
}
function isValidColor(value) {
    return colorRegex.test(value);
}
function isValidDirection(value) {
    return directionRegex.test(value);
}
// Парсеры данных
function parseString(text) {
    if (!isValidString(text)) {
        throw new Error('Строка передана в неверном формате');
    }
    return text.slice(1, -1);
}
function parseNumber(text) {
    if (!isNumber(text)) {
        throw new Error('Число передано в неверном формате');
    }
    return parseFloat(text);
}
function parseColor(text) {
    if (!isValidColor(text)) {
        throw new Error('Цвет передан в неверном формате');
    }
    return text.toLowerCase();
}
function parseDirection(text) {
    if (!isValidDirection(text)) {
        throw new Error('Направление передано в неверном формате');
    }
    return text.toLowerCase();
}
