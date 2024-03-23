# Отчет об индивидуальной работе

## Инструкции по запуску проекта
- Установите `node js`
- Поместите `transaction.json` заполненный данными о транзакциях в одну директорию
с `main.js`

## Описание индивидуальной работы
Создать консольное приложение, для анализа транзакций. Индивидуальная работа предусматривает использование классов, объектов, а также применение методов для работы со списками.


## Краткая документация к проекту
Класс `TransactionAnalyzer` представляет собой инструмент для анализа списка транзакций. Он содержит методы для работы с транзакциями, такие как добавление новой транзакции, получение списка всех транзакций, вычисление общей суммы транзакций и другие.
<br>
Основные методы:

    constructor(transactions)
    Конструктор класса. Принимает список транзакций и инициализирует поле allTransactions.

    addTransaction(transaction)
    Добавляет транзакцию в список всех транзакций.

    getAllTransaction()
    Возвращает список всех транзакций.

    getUniqueTransactionType()
    Возвращает массив уникальных типов транзакций.

    calculateTotalAmount()
    Возвращает общую сумму всех транзакций.

    calculateTotalAmountByDate(year, month, day)
    Возвращает сумму транзакций за указанный год, месяц и день.

    getTransactionByType(type)
    Возвращает список транзакций по указанному типу.

    getTransactionsInDateRange(startDate, endDate)
    Возвращает список транзакций в указанном диапазоне дат.

    getTransactionsByMerchant(merchantName)
    Возвращает список транзакций для указанного продавца.

    calculateAverageTransactionAmount()
    Возвращает среднюю сумму транзакции.

    getTransactionsByAmountRange(minAmount, maxAmount)
    Возвращает список транзакций в указанном диапазоне суммы.

    calculateTotalDebitAmount()
    Возвращает общую сумму дебетовых транзакций.

    findMostTransactionsMonth()
    Возвращает номер месяца, в котором было наибольшее количество транзакций.

    findMostDebitTransactionMonth()
    Возвращает номер месяца, в котором было наибольшее количество дебетовых транзакций.

    mostTransactionTypes()
    Определяет, какой тип транзакции (кредит или дебет) преобладает.

    getTransactionsBeforeDate(date)
    Возвращает список транзакций, произведенных до указанной даты.

    findTransactionById(id)
    Находит транзакцию по ее идентификатору.

    mapTransactionDescriptions()
    Возвращает список описаний транзакций.

## Примеры использования проекта
Примеры кода или скриншоты с пояснениями.

```javascript
// Пример создания экземпляра класса TransactionAnalyzer
const fs = require('fs');
const buf = JSON.parse(fs.readFileSync('transaction.json','utf8'));
const allTransObj = new TransactionAnalyzer(buf);


// Пример использования методов класса
console.log(allTransObj.getUniqueTransactionType());
console.log(allTransObj.calculateTotalAmountByDate(2019,null,25));
console.log(allTransObj.findTransactionById("3"));
// и т.д.

//РЕЗУЛЬТАТ В КОНСОЛИ
[ 'debit', 'credit' ]
295
{
  transaction_id: '3',
  transaction_date: '2019-01-03',
  transaction_amount: 75,
  transaction_type: 'debit',
  transaction_description: 'Dinner with friends',
  merchant_name: 'RestaurantABC',
  card_type: 'Amex',
  string: [Function (anonymous)]
}
```
## Ответы на контрольные вопросы
- Стандарт ECMAScript определяет 6 типов данных являющихся примитивами: 
1) Undefined
2) Boolean 
3) Number 
4) String 
5) BigInt 
6) Symbol 
7) Null (Null тип ) - Специальный примитив

- Методы массивов использованные для обработки и анализа данных:
1) `forEach(callbackFn, thisArg)`
2) `fill(value[, start, end])`
3) `push(element1)`
4) `indexOf(searchElement)`
<br>
Данные методы полезны для подсчета суммы значений, фильтрации данных, преобразованния данных. Основная их суть упрощение работы с массивами данных и удобный способ их видоизменения.
- Роль конструктора класса и как создавать новые экземпляры класса в JS<br>
Конструктор нужен для создания нового объекта класса (экземпляра). Так-же можно добавить что конструктор есть специальный метод класса который автоматически вызывается при создании нового экземпляра класса.<br>
Для создания нового экземпляра класса в JS надо воспользоваться оператором `new`<br>
```javascript
const obj = new MyClass(param);
```

## Список использованных источников
- https://developer.mozilla.org/en-US/
- https://stackoverflow.com/
- https://metanit.com/web/javascript/