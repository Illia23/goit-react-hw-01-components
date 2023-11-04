import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';




export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transaction_history}>
  <thead>
    <tr className={css.type}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
            {items.map(({ id, type, amount, currency }) => {
                return (
                        <tbody key={id}>
                            <tr >
                                <td>{type}</td>
                                <td>{amount}</td>
                                <td>{currency}</td>
                            </tr>
                        </tbody>
    )
})}
   
</table>
    )
}

TransactionHistory.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string
}