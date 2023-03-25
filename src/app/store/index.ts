import { configureStore } from '@reduxjs/toolkit';

// import appReducers from '@app/slices';


const store = configureStore({
  reducer: {
    // ...appReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

export default store;
