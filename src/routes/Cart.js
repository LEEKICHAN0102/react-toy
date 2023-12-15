import { Table } from "react-bootstrap"
import { useSelector } from "react-redux"

export default function Cart() {

  let state = useSelector((state) => {
    return state.storeInfo
  });

  console.log(state);
  
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경 하기</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}