import { createSlice } from '@reduxjs/toolkit';
//an object of reducer functions, a slice name, 
//and an initial state value, and automatically generates
//a slice reducer with corresponding action creators and action types.
export default createSlice({
  name: 'Equip',
  initialState: {
    dataEquip: [],
    dataEquipAdded: {},
    dataEquipUpdated: {},

    selectedActive: 'Tất cả',
    selectedConnect: 'Tất cả',
  },
  reducers: {
    saveDataEquip: (state, action) => {
      state.dataEquip = action.payload;
    },
    setSelectedActive: (state, action) => {
      state.selectedActive = action.payload;
    },
    setSelectedConnect: (state, action) => {
      state.selectedConnect = action.payload;
    },
    addNewEquip: (state, action) => {
      state.dataEquipAdded = action.payload;
    },
    updateNewAccount: (state, action) => {
      state.dataEquipUpdated = action.payload;
    },
    resetAdded: (state) => {
      state.dataEquipAdded = {};
    },
  },
});