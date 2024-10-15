// Просто строка с какими-то данными
const data = `
"base" 5.6 3.4 'red'
"base" 51.6 32.4 'green'
"base" 5.6 3 'blue'
"base" 2.6 3.9 'green'

"direction" 2.2 3 'red' 'up'
"direction" 12.2 18.2 'blue' 'right'
"direction" 9.5 3.2 'blue' 'down'
"direction" 187.2 2.3 'green' 'left'

"speed" 34.2 45 'red' 12
"speed" 3.1 4.5 'green' 1
"speed" 1.0 4 'blue' 2
"speed" 3.6 5.5 'red' 20

`;


// Тут мы стартанем со строки
function startFromLine() {

};

// А тут мы будем стартовать с файла
function startFromFile() {

};




// enum Color {
//     Red = 'red',
//     Green = 'green',
//     Blue = 'blue',
// }
  
//   class Point {
//     x: number;
//     y: number;
//     color: Color;
  
//     constructor(x: number, y: number, color: Color) {
//       this.x = x;
//       this.y = y;
//       this.color = color;
//     }

  
  //   static parseLetter(description: string): Point | null {
  //     const parts = description
  //       .split(/\s*,\s*/)
  //       .map((part) => part.replace(/'/g, '').trim());
  
  //     if (!parts || parts.length !== 3) {
  //       console.error('Некорректное описание объекта. Должно быть 3 части!');
  //       return null;
  //     }
  
  //     const x = parseFloat(parts[0]);
  //     const y = parseFloat(parts[1]);
  
  //     if (isNaN(x) || isNaN(y)) {
  //       console.error(
  //         'Некорректные значения координат. Координаты должны быть числами.',
  //       );
  //       return null;
  //     }
  
  //     const colorString = parts[2].toLowerCase();
  
  //     let isValidColor = false;
  //     for (let key in Color) {
  //       if (Color[key as keyof typeof Color] === colorString) {
  //         isValidColor = true;
  //         break;
  //       }
  //     }
  
  //     if (!isValidColor) {
  //       console.error(
  //         'Заданного цвета нет в списке. Доступные цвета: red, green, blue.',
  //       );
  //       return null;
  //     }
  
  //     const color = colorString as Color;
  
  //     return new Point(x, y, color);
  //   }
  
  //   printInfo(): void {
  //     console.log(
  //       `Точка с координатами (x: ${this.x}, y: ${this.y}). Цвет: ${this.color}`,
  //     );
  //   }
  // }
  
  // const letter = "5.6 , 3.6 , 'red'";
  // const coordinate = Point.parseLetter(letter);
  
  // if (coordinate !== null) {
  //   coordinate.printInfo();
  // } else {
  //   console.log('Не удалось создать точку.');
  // }
  