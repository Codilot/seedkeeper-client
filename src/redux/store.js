import { configureStore } from "@reduxjs/toolkit";
import valuationTemplatesReducer from "./valuationTemplatesSlice";

export default configureStore({
    reducer: {
        valuationTemplates: valuationTemplatesReducer,
    },
});
