import {configureStore} from '@reduxjs/toolkit';

import { addtodo , removetodo} from '../feature/todo/todoSlice';

export const store = configureStore({
    reducer:addtodo
});