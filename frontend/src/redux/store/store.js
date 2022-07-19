import { configureStore } from '@reduxjs/toolkit';
import test from '../reducers/test.slice'
export default configureStore({
  reducer: {
    test
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});