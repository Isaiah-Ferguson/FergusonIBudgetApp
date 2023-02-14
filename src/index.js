import {
    saveToLocalStorageByName,
    getLocalStorage,
    removeFromLocalStorage,
    subtractFromLocalStorage,
    saveToLocalStorageByName2,
    getLocalStorage2,
    removeFromLocalStorage2,
    addToLocalStorage,
    resetFromLocalStorage2
} from "./localstorage.js";

let budget = document.getElementById("budget");
let budgetBtn = document.getElementById("budgetBtn");
let expenseName = document.getElementById("expenseName");
let expenseAmount = document.getElementById("expenseAmount");
let expenseBtn = document.getElementById("expenseBtn");
let deleteBtnHere = document.getElementById("deleteBtnHere");
let injectExpenseName = document.getElementById("injectExpenseName");
let totalBudget = document.getElementById("totalBudget");
let resetBtn = document.getElementById("resetBtn");
let budgetVar = 0;
let expenseVar = 0;

budgetBtn.addEventListener('click', function () {
    budgetVar = budget.value;
    saveToLocalStorageByName(budgetVar);
    CreateBudgetElement();
});

expenseBtn.addEventListener('click', function () {
    budgetVar = getLocalStorage();
    expenseVar = expenseAmount.value;

    subtractFromLocalStorage(budgetVar[0], expenseVar);
    saveToLocalStorageByName2(expenseName.value + " " + expenseAmount.value);
    CreateExpenseElement();
    CreateBudgetElement();
});


resetBtn.addEventListener('click', function () {
    removeFromLocalStorage();
    resetFromLocalStorage2();
    injectExpenseName.innerHTML = "";
    deleteBtnHere.innerHTML = "";
    totalBudget.innerHTML = "";
});

function CreateBudgetElement() {
    let budgets = getLocalStorage();
    totalBudget.innerHTML = "";
    budgets.map((budget) => {
        let div = document.createElement("div");
        let p = document.createElement("p");

        p.textContent = budget;
        p.value = budget;

        div.appendChild(p);
        totalBudget.append(div);
    });
}


function CreateExpenseElement() {
    let expenses = getLocalStorage2();
    injectExpenseName.innerHTML = "";
    deleteBtnHere.innerHTML = "";

    expenses.map((expense) => {
        let div = document.createElement("div");
        let p = document.createElement("p");

        p.textContent = expense + "$";
        p.value = expense;

        let h3 = document.createElement("h3");
        let div2 = document.createElement("div");
        const deleteBtn = document.createElement('button');
        const deleteImg = document.createElement('img');
        deleteImg.src = './assets/trashpng.png';
        deleteImg.style.width = "30px";
        deleteImg.style.paddingTop = "13px";
        deleteImg.alt = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.classList.add('delete-btn:hover');
        deleteBtn.classList.add('delete-btn:active');
        deleteBtn.appendChild(deleteImg);

        deleteBtn.addEventListener("click", function () {

            div2.parentNode.removeChild(div2);
            div.parentNode.removeChild(div);
            h3.parentNode.removeChild(h3);
            
            budgetVar = getLocalStorage();
            addToLocalStorage(budgetVar[0], expenseVar);
            removeFromLocalStorage2(expense);
            
            CreateBudgetElement();
        });

        h3.appendChild(deleteBtn);
        div2.appendChild(h3);
        deleteBtnHere.append(div2);

        div.appendChild(p);
        injectExpenseName.append(div);
    });
};