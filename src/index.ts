// Просто строка с какими-то данными
import { 
    create,
    readFromFile,
    splitLine,
    splitTextToLines
 } from "./logic";
const data = `
"base" 5.6 3.4 "red" 
"speed" 51.6 32.4 "green"

"direction" 2.2 3 "red" 
"direction" 12.2 18.2 "blue" "right"

"speed" 34.2 45 "red" 12
"speed" 3.1 4.5 "green" 1
`;


// Тут мы стартанем со строки
function startFromLine() {
  const text = data;
  const lines = splitTextToLines(text);
  lines.forEach((line) => {
    const args = splitLine(line);
    try{
      console.log('\n Получена строка:', line);
      const point = create(...args);
      console.log('Создан объект:', point)
    } catch (error: any) {
      console.log(error.message);
    }
  })
};

// А тут мы будем стартовать с файла
function startFromFile() {
  const text = readFromFile();
  const lines = splitTextToLines(text);
  lines.forEach((line) => {
    const args = splitLine(line);
    try{
      console.log('\n Получена строка:', line);
      const point = create(...args);
      console.log('Создан объект:', point)
    } catch (error: any) {
      console.log(error.message);
    }
  })
};

startFromLine();