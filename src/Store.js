import { configureStore } from '@reduxjs/toolkit';
import { customReducer } from './reducers/Incdec';

export const store = configureStore({
  reducer : {
    custom : customReducer,
}
})

 