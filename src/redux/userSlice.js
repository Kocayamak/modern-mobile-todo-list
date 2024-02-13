import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  surname: "",
  email: "",
  password: "",
  rpassword: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserValidationInput: (state, action) => {
        const { type, value } = action.payload;

        state[type] = value;
    },
    signInWithEmailAndPassword: (state) => {},
  },
});

export const { setUserValidationInput, signInWithEmailAndPassword } = userSlice.actions;

export default userSlice.reducer;
