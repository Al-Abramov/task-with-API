import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { companyData } from '../../constants/companyInfoConsts';
import { getCompanyData } from '../../service/dataCompany';
import { ICompanyData } from '../../service/dataCompany/CompanyData.interface';
import { DataState } from './DataState.interface';

const initialState: DataState = {
  name: '',
  isLoading: false,
  companyData: [],
};

export const fetchCompanyData = createAsyncThunk<ICompanyData, string, { rejectValue: string }>(
  'data/companyData',
  async function (id, { rejectWithValue }) {
    try {
      const resp = await getCompanyData(id);
      return resp.data;
    } catch (error) {
      //console.log(error.response.data.error as string);
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
      });
  },
});

export const { setName } = dataSlice.actions;

export default dataSlice.reducer;
