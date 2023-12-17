import { createSlice } from "@reduxjs/toolkit";

export const storeInfo = createSlice({
  name : "storeInfo",
  initialState: [
    {id : 0, name : 'White and Black', count : 1},
    {id : 2, name : 'Grey Yordan', count : 2},
  ],
  reducers:{
    addQuantity(state, action){
      state[action.payload].count +=1;
    },
    deleteQuantity(state, action){
      const id = action.payload;
      return state.filter((item)=> item.id !== id);
    },
    addProduct(state, action) {
      const id = action.payload.id;
      console.log(id);
      const existingProduct = state.find(i => i.id === id);
      if(existingProduct){
        existingProduct.count+=1;
      } else {
        state.push(action.payload);
      }
    }
  }
});

export const { addQuantity,deleteQuantity, addProduct } = storeInfo.actions;