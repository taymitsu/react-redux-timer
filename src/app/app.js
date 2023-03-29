import { configureStore } from "@reduxjs/toolkit";
import timersReducer from '../features/timers/timersSlice';
import { update } from '../features/timers/timersSlice'

export const store = configureStore({
  reducer: {
    timers: timersReducer
  }
})

let lastUpdateTime = Date.now()

setInterval(() => {
	const now = Date.now()
	const deltaTime = now - lastUpdateTime
	lastUpdateTime = now
	store.dispatch(update(deltaTime))
}, 500)