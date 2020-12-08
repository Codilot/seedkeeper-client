import axios from "axios";

export const getValuationTemplates = (token) => {
    axios
        .get("https://seedkeeper.herokuapp.com/templates", {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
};
