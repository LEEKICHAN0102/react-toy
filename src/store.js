import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "kim",
  reducers: {
    changeName(state){
      return `John ${state}`
    },
    returnName(){
      return "kim"
    }
  }
})

export let {changeName, returnName } = user.actions; //destructuring || 오른쪽 자료를 변수형으로 빼기위한 문법..

let storeInfo = createSlice({
  name : "storeInfo",
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers: {
    addCount(state){
      return state.count+1
    },
    minusCount(state){
      return state.count-1;
    }
  }
});

export let { addCount, minusCount } = storeInfo.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    storeInfo : storeInfo.reducer,
  }
}) 