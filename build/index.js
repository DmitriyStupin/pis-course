"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Просто строка с какими-то данными
const logic_1 = require("./logic");
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
    const lines = (0, logic_1.splitTextToLines)(text);
    lines.forEach((line) => {
        const args = (0, logic_1.splitLine)(line);
        try {
            console.log('\n Получена строка:', line);
            const point = (0, logic_1.create)(...args);
            console.log('Создан объект:', point);
        }
        catch (error) {
            console.log(error);
        }
    });
}
;
// А тут мы будем стартовать с файла
function startFromFile() {
    const text = (0, logic_1.readFromFile)();
    const lines = (0, logic_1.splitTextToLines)(text);
    lines.forEach((line) => {
        const args = (0, logic_1.splitLine)(line);
        try {
            console.log('\n Получена строка:', line);
            const point = (0, logic_1.create)(...args);
            console.log('Создан объект:', point);
        }
        catch (error) {
            console.log(error);
        }
    });
}
;
startFromLine();
