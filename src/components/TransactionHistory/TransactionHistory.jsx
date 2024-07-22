const TransactionHistory = ({
  items,
}) => {
    return (
        items.map(item => {
            
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Amount</th>
                      <th>Currency</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td key={item.id}>{item.type}</td>
                      <td key={item.id}>{item.Amount}</td>
                      <td key={item.id}>{item.currency}</td>
                    </tr>
                  </tbody>
                </table>;
        })
    
    )
    
}
export default TransactionHistory