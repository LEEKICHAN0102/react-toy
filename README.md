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
    1. state 변경 시 쓸데 없는 것 까지 렌더링
    2. 성능이 떨어짐 ㅠㅠ

2. redux