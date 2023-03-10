import { createStore } from "@reduxjs/toolkit";
import Reducer from '../redux/reducer';
const store = createStore(Reducer);
export default store;