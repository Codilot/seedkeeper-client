import { configureStore } from "@reduxjs/toolkit";
import valuationTemplatesReducer from "./features/valuation_templates/valuationTemplatesSlice";

export default configureStore({
    reducer: {
        valuationTemplates: valuationTemplatesReducer,
    },
});
