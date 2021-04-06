import { createSlice } from '@reduxjs/toolkit';

const clise = createSlice( {
name :'counter',
 initialState:{
     pocemonsall:{},
     selectedPokemon:{},
     value:0,
 },
reducers:{
    add:(state, action) =>( {
        ...state,
        pocemonsall : { ...action.payload},
    }),
    addSelected:(state, action) =>( {
        // if(state.selectedPokemon[key]){
        //     const kopyState = {...state.selectedPokemon[key]},
        //     delete kopyState[key],
        //     return kopyState;
        // }else{
            ...state,
            selectedPokemon:{[action.payload.key]:action.payload.selektPO},
        //}      
    }),
    
}
});
export const {add,minus} = clise.actions;
export const selectCoun = state => state.counter.pocemonsall;
export default clise.reducer;
