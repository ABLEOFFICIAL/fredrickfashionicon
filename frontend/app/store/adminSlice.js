import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers } from "../utils/helper";

const initialState = {
  modalType: "",
  formData: {},
  showModal: false,
  currentItem: null,
  tempSizes: [],
  tempColors: [],
  users: [],
  total: 0,
  page: 1,
  pages: 1,
  loading: false,
  error: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setModalType(state, action) {
      state.modalType = action.payload;
    },
    setFormData(state, action) {
      state.formData = action.payload;
    },
    setShowModal(state, action) {
      state.showModal = action.payload;
    },
    setTempSizes(state, action) {
      state.tempSizes = action.payload;
    },
    setTempColors(state, action) {
      state.tempColors = action.payload;
    },
    setCurrentItem(state, action) {
      state.currentItem = action.payload;
    },
    clearAdminUsersError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users || action.payload; // in case you only return users array
        state.total = action.payload.total || state.users.length;
        state.page = action.payload.page || 1;
        state.pages = action.payload.pages || 1;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load users";
      });
  },
});

export const {
  setModalType,
  setFormData,
  setShowModal,
  setTempSizes,
  setTempColors,
  setCurrentItem,
  clearAdminUsersError,
} = adminSlice.actions;
export default adminSlice.reducer;
