import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeName, returnName, addCount, minusCount } from "../store";

export default function Cart() {

  let state = useSelector((state) => {
    return state
  });

  let dispatch = useDispatch()

  console.log(state);
  
  return (
    <div>
        {state.user}의 바구니
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
                  dispatch(changeName());
                  dispatch(addCount());
                }}>
                +
              </td>
              <td onClick={()=>{
                  dispatch(returnName());
                  dispatch(minusCount());
                }}>
                -
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}