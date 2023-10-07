import { Cliente } from '@/app/data/models/cliente'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LoginState {
  value: Cliente
}

const initialState: LoginState = {
  value: {} as Cliente,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, cliente: PayloadAction<Cliente>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = cliente.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { login } = loginSlice.actions

export default loginSlice.reducer