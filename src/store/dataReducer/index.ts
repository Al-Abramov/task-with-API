import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCompanyData, getContacts } from '../../service/dataCompany';
import { ICompanyData } from '../../service/dataCompany/CompanyData.interface';
import { DataState, ICompanyContacts } from './DataState.interface';

const initialState: DataState = {
  name: '',
  isLoading: false,
  companyData: {
    id: '',
    contactId: '',
    name: '',
    shortName: '',
    businessEntity: '',
    contract: {
      no: '',
      issue_date: '',
    },
    type: [],
    status: '',
    photos: [],
    createdAt: '',
    updatedAt: '',
  },
  companyContacts: {
    id: '',
    lastname: '',
    firstname: '',
    patronymic: '',
    phone: '',
    email: '',
    createdAt: '',
    updatedAt: '',
  },
};

export const fetchCompanyData = createAsyncThunk<ICompanyData, string, { rejectValue: string }>(
  'data/companyData',
  async function (id, { rejectWithValue }) {
    try {
      const resp = await getCompanyData(id);
      return resp.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);

export const fetchContacts = createAsyncThunk<ICompanyContacts, string, { rejectValue: string }>(
  'data/contacts',
  async function (id, { rejectWithValue }) {
    try {
      const resp = await getContacts(id);
      return resp.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
      localStorage.setItem('name', state.name);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanyData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCompanyData.fulfilled, (state, action) => {
        state.companyData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.companyContacts = action.payload;
        state.isLoading = false;
      });
  },
});

export const { setName } = dataSlice.actions;

export default dataSlice.reducer;
