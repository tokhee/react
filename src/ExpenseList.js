import React, { Component } from 'react'
import { ExpenseItem } from './ExpenseItem'
import './ExpenseList.css'
import { FaRegWindowClose } from "react-icons/fa";



const ExpenseList = ({ initialExpense, clearExpense, clearItems }) => {
    console.log(initialExpense);
    return (
        <React.Fragment>
            <ul className='list'>
                {expense.map(expense => {
                    return (
                        <ExpenseItem expense={expense} key={expense.id}
                            clearExpense={clearExpense}
                            editExpense={editExpense}
                            >
                        </ExpenseItem>
                    )
                })}
            </ul>
            {expense.length > 0 && (
                <button className='btn' onClick={clearItems}>

                    목록지우기<FaRegWindowClose />
                </button>
            )}
        </React.Fragment >
    )
}
export default ExpenseList


