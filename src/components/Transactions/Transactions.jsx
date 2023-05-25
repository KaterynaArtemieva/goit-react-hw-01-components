import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export const TransactionHistory = props => {
  const { items } = props;
  return (
    <table className={css.transactions}>
      <thead className={css.table}>
        <tr className={css.tableTitle}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={css.table}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.tableData}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
