import { createSlice } from "@reduxjs/toolkit"

export const user = createSlice({
  name: "user",
  initialState: {name: "kim", age: 20},
  reducers: {
    changeAge(state){
      state.age += 1
    }
  }
});

export const { changeAge } = user.actions; //destructuring || 오른쪽 자료를 변수형으로 빼기위한 문법..