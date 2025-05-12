import { create } from 'zustand'
import { CounterState } from '../types'


export const useCounterStore = create<CounterState>((set, get) => ({
    count: 0,
    increase: () => {
        // Use the current value and add 1 to it (don't use postfix ++)
        set({
            count: get().count + 1
        })
    },
    decrease: () => {
        // Use the current value and subtract 1 from it (don't use postfix --)
        set({
            count: get().count - 1
        })
    }
}));
