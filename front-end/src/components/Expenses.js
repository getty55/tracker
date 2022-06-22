import { useState } from 'react';
import ExpensesList from './ExpensesList';
import YearFilter from './YearFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = props => {
    const [year, setYear] = useState('2021');
    const yearlyExpenses = props.expenses && props.expenses.filter(expense => new Date(expense.date).getFullYear() === +year);

    return (
        <div className='expenses'>
            <YearFilter
                currYear={year}
                getYear={gottenYear => setYear(gottenYear)} />
            {yearlyExpenses && <ExpensesChart expenses={yearlyExpenses} />}
            <ExpensesList
                expenses={yearlyExpenses}
                onDelete={id => props.onDelete(id)} />
        </div>
    );
};

export default Expenses;