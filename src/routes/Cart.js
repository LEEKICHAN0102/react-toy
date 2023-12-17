import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeAge } from "../store/userSlice";
import { addQuantity, deleteQuantity } from "../store/productSlice";

export default function Cart() {

  let state = useSelector((state) => {
    return state
  });

  let dispatch = useDispatch()

  return (
    <div>
        {state.user.name}의 바구니 {state.user.age}
        <button onClick={()=>{
          dispatch(changeAge())
        }}></button>
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
          {state.storeInfo.map((a,i) => (
            <tr key={i}>
              <td>{state.storeInfo[i].id}</td>
              <td>{state.storeInfo[i].name}</td>
              <td>{state.storeInfo[i].count}</td>
              <td onClick={()=>{
                  dispatch(addQuantity(state.storeInfo[i].id))
                }}>
                +
              </td>
              <td onClick={()=>{
                  dispatch(deleteQuantity(state.storeInfo[i].id))
                }}>
                상품 삭제
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}