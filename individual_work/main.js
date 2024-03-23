class TransactionAnalyzer
{
  allTransactions = [{}];
/**
 * constructor of a TransactionAnalyzer.
 * @constructor
 * @param {Array} transactions - The list of objects which represents a transaction.
 */
  constructor(transactions){
    this.allTransactions = transactions;
    this.allTransactions.forEach(obj => {
      obj.string = function() {
          return JSON.stringify(obj);
      };
    });
  }
/**
 * Adds a transaction object to the list of all transactions.
 * @param {Object} transaction - The transaction object to add.
 */
  addTransaction(transaction){
    this.allTransactions.push(transaction);
  }
/**
 * 
 * @returns list of objects which represents a transaction
 */
  getAllTransaction(){
    return this.allTransactions
  }
/**
 * 
 * @returns list of strings, which are types of transactions
 */
  getUniqueTransactionType(){
    const typeSet = new Set();
    this.allTransactions.forEach((obj)=>{typeSet.add(obj.transaction_type)});
    return [...typeSet];
  }
/**
 * 
 * @returns sum of every transaction amount
 */
  calculateTotalAmount(){
    let totalAmount = 0;
    this.allTransactions.forEach((obj)=>totalAmount+=obj.transaction_amount)
    return totalAmount;
  }
/**
 * params can be null or nothing
 * @param {Number} year 
 * @param {Number} month 
 * @param {Number} day 
 * @returns the sum of transactions by the given date
 */
  calculateTotalAmountByDate(year=null, month=null, day=null){
    let totalAmount = 0;
    this.allTransactions.forEach((obj)=>{
      if(!year || obj.transaction_date.split('-')[0] == year)
        if(!month || obj.transaction_date.split('-')[1] == month)
          if(!day || obj.transaction_date.split('-')[2] == day){
            totalAmount += obj.transaction_amount;
          }
    });
    return totalAmount;
  }
/**
 * 
 * @param {String} type 
 * @returns list of transactions by the given type
 */
  getTransactionByType(type){
    let transByType = [];
    this.allTransactions.forEach((obj)=>{
      if (obj.transaction_type == type){
        transByType.push(obj);
      }
    });
    return transByType;
  }
/**
 * example of param "2019-04-24"
 * @param {string} startDate 
 * @param {string} endDate 
 * @returns list of transactions in the given date range
 */
  getTransactionsInDateRange(startDate, endDate){
    let transByDate = [];
    this.allTransactions.forEach((obj)=>{
      let startDate1 = new Date(...startDate.split('-'));
      let endDate1 = new Date(...endDate.split('-'));
      let transDate = new Date(...obj.transaction_date.split('-'));
      if(transDate >= startDate1 && transDate <= endDate1){
        transByDate.push(obj);
      }
    });
    return transByDate;
  }
/**
 * 
 * @param {string} merchantName 
 * @returns list of transactions of the specified merchant
 */
  getTransactionsByMerchant(merchantName){
    let transByMerchant = [];
    this.allTransactions.forEach((obj)=>{
      if(merchantName == obj.merchant_name)
        transByMerchant.push(obj);
    });
    return transByMerchant;
  }
/**
 * 
 * @returns finds the average amount of money per transaction 
 */
  calculateAverageTransactionAmount(){
    return this.calculateTotalAmount()/this.allTransactions.length;
  }
/**
 * 
 * @param {Number} minAmount 
 * @param {Number} maxAmount 
 * @returns list of transactions in the given amount range of transactions
 */
  getTransactionsByAmountRange(minAmount, maxAmount){
    let transByAmount = [];
    this.allTransactions.forEach((obj)=>{
      if(obj.transaction_amount >= minAmount && obj.transaction_amount <= maxAmount )
        transByAmount.push(obj);
    });
    return transByAmount;
  }
/**
 * 
 * @returns sum of debit transactions amount
 */
  calculateTotalDebitAmount(){
    let totalDebitSum=0;
    this.allTransactions.forEach((obj)=>{
      if(obj.transaction_type=="debit")
        totalDebitSum+=obj.transaction_amount;
    });
    return totalDebitSum;
  }
/**
 * 
 * @returns the number of the Number of the month in which took place most amount of transactions
 */
  findMostTransactionsMonth(){
    let monthCounterArr = Array(12);
    monthCounterArr.fill(0);
    this.allTransactions.forEach((obj)=>{
      let month = parseInt(obj.transaction_date.split('-')[1]);
      monthCounterArr[month]++;
    });
    return monthCounterArr.indexOf(Math.max(...monthCounterArr));
  }
/**
 * 
 * @returns the number of the Number of the month in which took place most amount of debit transactions
 */
  findMostDebitTransactionMonth(){
    let monthCounterArr = Array(12);
    monthCounterArr.fill(0);
    this.allTransactions.forEach((obj)=>{
      if(obj.transaction_type == "debit"){
        let month = parseInt(obj.transaction_date.split('-')[1]);
        monthCounterArr[month]++;
      }
    });
    return monthCounterArr.indexOf(Math.max(...monthCounterArr));
  }
/**
 * 
 * @returns string of type which had most transactions
 */
  mostTransactionTypes(){
    let transDebit = 0;
    let transCredit = 0;
    this.allTransactions.forEach((obj)=>{
      if(obj.transaction_type=="debit"){
        transDebit++;
      }
      else{
        transCredit++;
      }
    });
    if(transCredit > transDebit){
      return "credit";
    }
    else if (transCredit < transDebit){
      return "debit";
    }
    else{
      return "equal";
    }
  }
/**
 * 
 * @param {String} date 
 * @returns list of transactions before given date
 */
  getTransactionsBeforeDate(date){
    let transByDate = [];
    this.allTransactions.forEach((obj)=>{
      let endDate1 = new Date(...date.split('-'));
      let transDate = new Date(...obj.transaction_date.split('-'));
      if(transDate < endDate1){
        transByDate.push(obj);
      }
    });
    return transByDate;
  }
/**
 * 
 * @param {string} id 
 * @returns transaction found by id
 */
  findTransactionById(id){
    for(let i = 0;i<this.allTransactions.length;i++){
      if(this.allTransactions[i].transaction_id == id){
        return this.allTransactions[i];
      }
    }
  }
/**
 * 
 * @returns list of strings consists of transaction_description in transaction object
 */
  mapTransactionDescriptions(){
    let transDescr = [];
    this.allTransactions.forEach((obj)=> transDescr.push(obj.transaction_description));
    return transDescr;
  }
}



const fs = require('fs');
const buf = JSON.parse(fs.readFileSync('transaction.json','utf8'));

const allTransObj = new TransactionAnalyzer(buf);


// console.log(allTransObj.getAllTransaction());
console.log(allTransObj.getUniqueTransactionType());
// console.log(allTransObj.calculateTotalAmount());
console.log(allTransObj.calculateTotalAmountByDate(2019,null,25));
// console.log(allTransObj.getTransactionByType("credit"));
// console.log(allTransObj.getTransactionsInDateRange("2019-04-05", "2019-04-10"));
// console.log(allTransObj.getTransactionsByMerchant("Steakhouse123"));
// console.log(allTransObj.calculateAverageTransactionAmount());
// console.log(allTransObj.getTransactionsByAmountRange(50,60));
// console.log(allTransObj.findMostDebitTransactionMonth());
// console.log(allTransObj.mostTransactionTypes());
// console.log(allTransObj.getTransactionsBeforeDate("2019-01-02"));
console.log(allTransObj.findTransactionById("3"));
// console.log(allTransObj.mapTransactionDescriptions());