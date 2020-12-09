import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllTemplates, fetchTemplates } from "./valuationTemplatesSlice";

const ValuationTemplateList = () => {
    const dispatch = useDispatch();
    const templates = useSelector(selectAllTemplates);
    const templateStatus = useSelector(
        (state) => state.valuationTemplates.status
    );
    const error = useSelector((state) => state.valuationTemplates.error);

    useEffect(() => {
        if (templateStatus === "idle") {
            dispatch(fetchTemplates());
        }
    }, [templateStatus, dispatch]);

    let content;

    if (templateStatus === "loading") {
        content = <div className="loader">Loading...</div>;
    } else if (templateStatus === "succeeded") {
        content = templates.map((template) => (
            <div key={template._id}>
                <p>{template._id}</p>
                <p>{template.Name}</p>
            </div>
        ));
    } else if (templateStatus === "failed") {
        content = <div>{error}</div>;
    }

    return (
        <section>
            <h2>Valuations</h2>
            {content}
        </section>
    );
};

export default ValuationTemplateList;
