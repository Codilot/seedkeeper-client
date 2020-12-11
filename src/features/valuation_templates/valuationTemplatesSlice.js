import {
    createSlice,
    createAsyncThunk,
    createSelector,
    createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { authHeader } from "../../helpers/auth-header";

const valuationTemplatesAdapter = createEntityAdapter({
    selectId: (template) => template._id,
    sortComparer: null,
});

const initialState = valuationTemplatesAdapter.getInitialState({
    status: "idle",
    error: null,
});

export const fetchTemplates = createAsyncThunk(
    "valuationTemplates/fetchTemplates",
    async () => {
        try {
            const response = await axios.get(
                    "https://seedkeeper.herokuapp.com/templates",
                    {
                        headers: authHeader(),
                    }
            );
            return response.data;
        } catch (err) {
            console.log(error);
        }
    }
);

const valuationTemplatesSlice = createSlice({
    name: "valuationTemplates",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTemplates.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchTemplates.fulfilled]: (state, action) => {
            state.status = "succeeded";
            // Add any fetched valuationTemplates to the array
            console.log(action.payload);
            if (action.payload) {
                valuationTemplatesAdapter.upsertMany(state, action.payload);
            }
        },
        [fetchTemplates.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
    },
});

export default valuationTemplatesSlice.reducer;

export const {
    selectAll: selectAllTemplates,
} = valuationTemplatesAdapter.getSelectors((state) => state.valuationTemplates);
