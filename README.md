# Работа по дисциплине Проектирование Информационных Систем (Ступин Д.А. КИ23-20Б) ^-^

## Установка зависимостей и работа с программой

```bash
npm i # Установить все зависимости
npm run build # Компиляция проекта
npm run start # Запуск программы
npm run format # Форматирование файла в Prettier
npm test # Запуск тестов
npm test -- --coverage #Посмотреть покрытие
```

## 2.1.1 Практическая работа «Введение в объектно-ориентированное программирование»
Вариант №4. Двумерные точки: координаты (два дробных числа), цвет (строка из списка
"red", "green", "blue").

## 2.1.2 Рефакторинг кода (разбиение на функции). Системы контроля версий git
Добавил два новых объекта. Это класс pointWithSpeed и pointWithDirection. Отделил логику в файл logic.ts, добавил текстовый файл с данными, а также строку с данными. Все проверки вынес в файл util.ts

## 2.1.3 Рефакторинг кода (декомпозиция на классы) и обработка ошибок
Написал тесты для проверок. Покрытие = 100%. 


