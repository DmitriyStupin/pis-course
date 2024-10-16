import { Color } from "./point";
import { Direction } from "./pointWithDirection";

const stringRegexp = /^".*"$/;
const numberRegex = /^-?\d+(\.\d+)?$/;
const colorRegex = /^(red|green|blue)$/i;
const directionRegex = /^(up|down|left|right)$/i;

// Всякие проверки

export function isValidString(value: string): boolean {
    return stringRegexp.test(value);
}

export function isNumber(value: string): boolean {
    return numberRegex.test(value);
}

export function isValidColor(value: string): boolean {
    return colorRegex.test(value);
}

export function isValidDirection(value: string): boolean {
    return directionRegex.test(value);
}


// Парсеры данных

export function parseString(text: string) {
    if (!isValidString(text)) {
        throw new Error('Строка передана в неверном формате')
    }
    return text.slice(1, -1);
}

export function parseNumber(text: string) {
    if (!isNumber(text)) {
        throw new Error('Число передано в неверном формате')
    }
    return parseFloat(text);
}

export function parseColor(text: string): Color {
    // Убираем кавычки и приводим к нижнему регистру
    const cleanText = text.replace(/"/g, '').toLowerCase();

    if (!isValidColor(cleanText)) {
        throw new Error('Цвет передан в неверном формате');
    }

    const color = Object.values(Color).find(c => c === cleanText);

    if (!color) {
        throw new Error(`Цвет "${cleanText}" не найден в enum Color`);
    }

    return color as Color;
}

export function parseDirection(text: string): Direction {

    const cleanText = text.replace(/"/g, '').toLowerCase();

    if (!isValidDirection(cleanText)) {
        throw new Error('Направление передано в неверном формате');
    }

    const direction = Object.values(Direction).find(c => c === cleanText);
    if (!direction) {
        throw new Error(`Направление "${cleanText}" не найдено в enum Direction`);
    }

    return direction as Direction;
}