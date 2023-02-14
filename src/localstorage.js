function saveToLocalStorageByName(budget) {
    let budgets = getLocalStorage();

        budgets.pop();
        budgets.push(budget);
    
    localStorage.setItem('Budgets', JSON.stringify(budgets));
}

function getLocalStorage(){
    let localStorageData = localStorage.getItem('Budgets');
    
    if (localStorageData == null) {
        return [];
    }
    return JSON.parse(localStorageData);
}

function removeFromLocalStorage(budget){
    let budgets = getLocalStorage();
    let nameindex = budgets.indexOf(budget);

    budgets.splice(nameindex, 1);
    localStorage.setItem('Budgets', JSON.stringify(budgets));
}

function subtractFromLocalStorage(budget, value) {
    let budgets = getLocalStorage();
    let index = budgets.indexOf(budget);
  
    if (index >= 0) {
      let number = parseInt(budget);
      number -= value;
      budgets[index] = number.toString();
      localStorage.setItem('Budgets', JSON.stringify(budgets));
    }
}

function addToLocalStorage(budget, value) {
    let budgets = getLocalStorage();
    let index = budgets.indexOf(budget);
  
    if (index >= 0) {
      let number = parseInt(budget);
      number += parseInt(value);
      console.log(number)
      budgets[index] = number.toString();
      localStorage.setItem('Budgets', JSON.stringify(budgets));
    }
}

  function saveToLocalStorageByName2(expense) {
    let expenses = getLocalStorage2();

    if(!expenses.includes(expense)){
        expenses.push(expense);
    }
    localStorage.setItem('Expenses', JSON.stringify(expenses));
}

function getLocalStorage2(){
    let localStorageData = localStorage.getItem('Expenses');
    
    if (localStorageData == null) {
        return [];
    }
    return JSON.parse(localStorageData);
}

function removeFromLocalStorage2(expense){
    let expenses = getLocalStorage2();
    let nameindex = expenses.indexOf(expense);

    expenses.splice(nameindex, 1);
    localStorage.setItem('Expenses', JSON.stringify(expenses));
}

function resetFromLocalStorage2(expense){
    let expenses = getLocalStorage2();
  expenses.splice(0, expenses.length);
  localStorage.setItem('Expenses', JSON.stringify(expenses));
}

export {saveToLocalStorageByName, getLocalStorage, removeFromLocalStorage, subtractFromLocalStorage, saveToLocalStorageByName2, getLocalStorage2, removeFromLocalStorage2, addToLocalStorage, resetFromLocalStorage2}