import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"


const App = () => {
  const [expenses, setExpenses] = useState(
    [
      { id: 1, charge: "LUNCH", amount: 50000 },
      { id: 2, charge: "OIL", amount: 40000 },
      { id: 3, charge: "BOOK", amount: 30000 }
    ]
  )


  const expenseSubmit=(e)=>{
    e.preventSubmit();
    if(charge !== "" && amount >0){
      if(edit){
        const newExpense =expenses.map(item =>{
          return item.id === id ? {...item,charge,amount} : item
        })
        setExpenses(newExpenses);
        setEdit(false);
        handleAlert({type:'success' , text :'수정완료'});
        }else{
          const newExpense = {id : crypto.randomUUID(),charge,amount}
          const newExpenses ={...expenses, newExpense};
          setExpenses(newExpenses);
          setCharge("");
          setAmount(0);
          handleAlert({type:'success', text:"항목이 추가되었음"})
        }
      }else{
        console.log("error");
        handleAlert({type :'danger',text:'데이터 입력'});
        return false;
      }
    }
    const clearItem = () => {
      setExpenses([]);
    }
        
      
    }
  
  const clearExpense = (id) => {
    const newExpense = expenses.filter(expense => expense.id != id)
    setExpenses(newExpense);
  }
  return (
    <main className='main-container'>
      <h1>예산 계산</h1>
      <div className='box'>
        <ExpenseForm />
      </div>
      <div className='box'>
        <ExpenseList
          initialExpense={expenses}
          clearExpense={clearExpense}
          clearItem={clearItems}
        />
      </div>
      <div className="box2">
        <p className="t_price">총지출 :
          <span>{expenses.reduce((acc, curr) => {
            return (acc += curr.amount)
          },0)
          }원</span>
        </p>
      </div>
    </main>
  )
}
export default App;