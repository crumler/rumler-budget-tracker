import './ExpenseItem.css';
import './ExpenseDate';

const ExpenseItem = (props) => {
    return(
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <div className="expense-item__amount">

                </div>
            </div>
        </div>
    )
}

export default ExpenseItem;