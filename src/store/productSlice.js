import { createSlice } from "@reduxjs/toolkit";

export const storeInfo = createSlice({
  name : "storeInfo",
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers:{
    addQuantity(state, index){
      state[index.payload].count +=1;
    }
  }
});

export const { addQuantity } = storeInfo.actions;