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
const point_1 = require("./point");
const pointWithDirection_1 = require("./pointWithDirection");
const stringRegexp = /^".*"$/;
const numberRegex = /^-?\d+(\.\d+)?$/;
const colorRegex = /^(red|green|blue)$/i;
const directionRegex = /^(up|down|left|right)$/i;
// Всякие проверки
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
    // Убираем кавычки и приводим к нижнему регистру
    const cleanText = text.replace(/"/g, '').toLowerCase();
    if (!isValidColor(cleanText)) {
        throw new Error('Цвет передан в неверном формате');
    }
    const color = Object.values(point_1.Color).find(c => c === cleanText);
    if (!color) {
        throw new Error(`Цвет "${cleanText}" не найден в enum Color`);
    }
    return color;
}
function parseDirection(text) {
    const cleanText = text.replace(/"/g, '').toLowerCase();
    if (!isValidDirection(cleanText)) {
        throw new Error('Направление передано в неверном формате');
    }
    const direction = Object.values(pointWithDirection_1.Direction).find(c => c === cleanText);
    if (!direction) {
        throw new Error(`Направление "${cleanText}" не найдено в enum Direction`);
    }
    return direction;
}
