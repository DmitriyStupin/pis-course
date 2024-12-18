import fs from 'fs';
import { readFromFile, splitTextToLines, splitLine, create, FooError } from '../src/logic';
import { Point, Color } from '../src/point';
import { PointWithSpeed } from '../src/pointWithSpeed';
import { PointWithDirection, Direction } from '../src/pointWithDirection';
import { error } from 'console';

test('split text to lines', () => {
  expect(splitTextToLines('s\nb')).toStrictEqual(['s', 'b']);

  expect(splitTextToLines('l')).toStrictEqual(['l']);

  expect(splitTextToLines('\nl\n')).toStrictEqual(['цукцплпдадлрпрлоывролырлопррвылрплоыарплоыарплывар']);

  expect(splitTextToLines('\n\n')).toStrictEqual([]);
});

test('split line', () => {
  expect(splitLine('a  b')).toStrictEqual(['a', 'b']);

  expect(splitLine('a b')).toStrictEqual(['a b']);
})

test('read text from file', () => {
  expect(readFromFile()).toBe(fs.readFileSync('data.txt').toString());
})

test('create points', () => {
  expect(
    create('"base"', '5.6', '3.4', '"green"')
  ).toStrictEqual(new Point(5.6, 3.4, Color.Green));

  expect(
    () => create('"base"', '5,6', '3.4', '"green"')
  ).toThrow();

  expect(
    () => create('"base"', '5,6', '3.4')
  ).toThrow();

  expect(
    () => create('"base"', '5.6', '3.4', '"no color"')
  ).toThrow();

  expect(
    () => create('"base"', '5.6', '3.4', 'red')
  ).toThrow();

  expect(
    create('"speed"', '34.2', '45', '"red"', '12')
  ).toStrictEqual(
    new PointWithSpeed(34.2, 45, Color.Red, 12)
  );

  expect(
    () => create('"speed"', '34.2', '45', '"red"', '1,2')
  ).toThrow();

  expect(
    () => create('"speed"', '34.2', '45', '"red"', 'no speed')
  ).toThrow();

  expect(
    () => create('"speed"', '34.2', '"red"', 'no speed')
  ).toThrow();

  expect(
    () => create('"speed"', '34.2', '45', 'red', 'no speed')
  ).toThrow();

  expect(
    create('"direction"', '12.2', '18.2', '"blue"', '"right"')
  ).toStrictEqual(
    new PointWithDirection(12.2, 18.2, Color.Blue, Direction.Right)
  );

  expect(
    () => create('"direction"', '12.2', '18.2', '"blue"', 'rightdown')
  ).toThrow(new FooError('Направление должно быть строкой'));


  expect(
    () => create('"direction"', '12.2', '"blue"', 'rightdown')
  ).toThrow();

  expect(
    () => create('"speed"', '12.2', '18.2', '"blue"', '90km/ch')
  ).toThrow();
  
  expect(
    () => create('"direction"', '12.2', '18.2', 'blue', '"right"')
  ).toThrow();

  expect(() => create('random')).toThrow();

  expect(() => create('')).toThrow();

  expect(() => create('"random"')).toThrow();

  expect(() => create('"supertype"')).toThrow();

  expect(
    () => create('"random"', 'random string')
  ).toThrow();

  expect(
    () => create('random string')
  ).toThrow();
})
