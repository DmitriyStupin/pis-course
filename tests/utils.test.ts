import { isValidString, isNumber, isValidColor, isValidDirection, parseString, parseNumber, parseColor, parseDirection } from "../src/utils";

test('check strings', () => {
  expect(isValidString('"string"')).toBe(true);
  expect(isValidString('"another string"')).toBe(true);
  expect(isValidString('"""""""')).toBe(true);

  expect(isValidString('')).toBe(false);
  expect(isValidString('"_')).toBe(false);
  expect(isValidString('random string')).toBe(false);
})

test('check numbers', () => {
  expect(isNumber('456')).toBe(true);
  expect(isNumber('0')).toBe(true);
  expect(isNumber('100.55')).toBe(true);
  expect(isNumber('-1')).toBe(true);

  expect(isNumber('1235,6923')).toBe(false);
  expect(isNumber('random string')).toBe(false);
  expect(isNumber('')).toBe(false);
})

test('check colors', () => {
  expect(isValidColor('red')).toBe(true);
  expect(isValidColor('green')).toBe(true);
  expect(isValidColor('blue')).toBe(true);

  expect(isValidColor('black')).toBe(false);
  expect(isValidColor('')).toBe(false);
  expect(isValidColor(' ')).toBe(false);
  expect(isValidColor(' purple ')).toBe(false);
})

test('check direction', () => {
  expect(isValidDirection('up')).toBe(true);
  expect(isValidDirection('down')).toBe(true);
  expect(isValidDirection('left')).toBe(true);
  expect(isValidDirection('right')).toBe(true);

  expect(isValidDirection('updown')).toBe(false);
  expect(isValidDirection('')).toBe(false);
  expect(isValidDirection(' ')).toBe(false);
})


test('parse strings', () => {
  expect(parseString('"string"')).toBe('string');
  expect(parseString('"another string"')).toBe('another string');
  expect(parseString('"""""""')).toBe('"""""');

  expect(() => parseString('"_')).toThrow();
  expect(() => parseString('random string')).toThrow();
  expect(() => parseString('')).toThrow();
})

test('parse numbers', () => {
  expect(parseNumber('123')).toBe(123);
  expect(parseNumber('0')).toBe(0);
  expect(parseNumber('100.55')).toBe(100.55);
  expect(parseNumber('-1')).toBe(-1);

  expect(() => parseNumber('1235,69')).toThrow();
  expect(() => parseNumber('random string')).toThrow();
  expect(() => parseNumber('')).toThrow();
})

test('parse colors', () => {
  expect(parseColor('red')).toBe('red');
  expect(parseColor('GREEN')).toBe('green');
  expect(parseColor('Blue')).toBe('blue');
  expect(parseColor('blUe')).toBe('blue');

  expect(() => parseColor('black')).toThrow();
  expect(() => parseColor('')).toThrow();
  expect(() => parseColor(' ')).toThrow();
})

test('parse directions', () => {
  expect(parseDirection('up')).toBe('up');
  expect(parseDirection('Left')).toBe('left');
  expect(parseDirection('riGhT')).toBe('right');
  expect(parseDirection('DOWN')).toBe('down');

  expect(() => parseDirection('updown')).toThrow();
  expect(() => parseDirection('')).toThrow();
  expect(() => parseDirection(' ')).toThrow();
})