import css from './TransactionHistory.module.css'
const TransactionHistory = ({
  items,
}) => {
    return (
      <table className={css.table}>
        <thead className={css.headTable}>
          <tr>
            <th className={css.headText}>Type</th>
            <th className={css.headText}>Amount</th>
            <th className={css.headText}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, amount, currency, type }) => (
            <tr key={id} className={css.bodyTable}>
              <td className={css.bodyText}>{type}</td>
              <td className={css.bodyText}>{amount}</td>
              <td className={css.bodyText}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
    
}
export default TransactionHistory