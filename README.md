### React-Toy


> 상태관리 
1. context API
  
    ```
    1. createContext()
    2. 사용 될 자식 컴포넌트를 createContext().provider 로 묶어 준다
    3. value = {props} 설정
    4. 해당 자식 컴포넌트에서 createContext() 를 import
    5. useContext( createContext());

    createContext() // 보관함 만들기
    보관함으로 감싸기 // provider
    보관함 안에 props 넣기 // value
    useContext() // 보관함 해체하기 (사용)
    꺼내 쓸 때 destructuring 문법 사용 가능 
    ```
    요새 안쓰는 이유
    > state 변경 시 쓸데 없는 것 까지 렌더링
    > 성능이 떨어짐 ㅠㅠ
    <br></br>
2. redux
    props 를 사용하지 않고 store의 상태를 공유 가능
    Context API 보다 좋은 성능

    ```
    1. store 생성 configureStore()
    2. index를 Provider 로 묶어주기 <Provider store={store}>
    3. createSlice() 생성, name, initialState생성 //useState() 와 동일하게 동작
    4. configureStore({
        reducer: {
            Name: configureStore.reducer
        }
    })
    5. useSelector() 로 state 가져와서 사용 // (state) => { return state} 는
    모든 state를 가져오기 떄문에 원하는 것을 return 하려면 return state.variable 로 사용이 가능.
    ```
    
    외부 라이브러리 이기 떄문에 설치해야함
    규모가 작을떄는 굳이 사용 안해도 되긴함.
    <br></br>

    ```
    store 의 state 변경

    1. createSlice({
        reducers: { // 이름 틀리면 안됨;
            changeStateFunc(state // prevValue){
                return "state state"
            }
        }
    }) reducers 를 추가하고 변경 함수 선언

    2. 이걸 다른데서 사용하려면 export 해주어야 함. 하지만 reducers 객체 내에서 export 해줄 수 없음.
    3. 그래서 밖에서 변수로 빼준 뒤 destructuring 하여 사용하는 것이 관습임. 
    Ex// export let { changeStateFunc , returnStateFunc} = ${sliceName}.action  
    // .action (대충 변경해 줄 함수 감지한다는 뜻)

    4. 이것도 그냥 사용 가능한 것이 아니라 dispatch 라는 것을 해주어야 한다.

    let dispatch = useDispatch();
    ()=>{dispatch(changeStateFunc())} 이런 식으로 사용이 가능함.
    ```
    
    과정이 꽤나 복잡하긴 한데, 효율적인 방법이라고 함. 
    dispatch() 요청하다라는 뜻으로 말에서 알 수 있듯 dispatch() 가 변경하는 것이 아니라
    store에 변경함수를 요청할 뿐임. 변경은 결국 store 에서 한다. // 이것은 장점: 버그 추적이 쉬워진다..
    