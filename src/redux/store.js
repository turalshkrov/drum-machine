import { createStore } from 'redux';
import { toggleReducer } from "./reducer";

export const store = createStore(toggleReducer);