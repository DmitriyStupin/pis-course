const stringRegexp = /^".*"$/;
const numberRegex = /^-?\d+(\.\d+)?$/;
const colorRegex = /^(red|green|blue)$/i;
const directionRegex = /^(up|down|left|right)$/i;

// Проверки строк

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

export function parseColor(text: string) {
    if (!isValidColor(text)) {
        throw new Error('Цвет передан в неверном формате');
    }

    return text.toLowerCase();
}

export function parseDirection(text: string) {
    if (!isValidDirection(text)) {
        throw new Error('Направление передано в неверном формате');
    }

    return text.toLowerCase();
}