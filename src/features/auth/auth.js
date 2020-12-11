import axios from "axios";

const succesAuth = (authData) => {
    console.log(authData);
    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.Username);
};

const login = (username, password) => {
    console.log(`Received values of form: ${username} ${password}`);
    axios
        .post("https://seedkeeper.herokuapp.com/login", {
            Username: username,
            Password: password,
        })
        .then((response) => {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload();
            }
            if (response.data) {
                succesAuth(response.data);
            }
        })
        .catch((e) => {
            console.log(e);
        });
};

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}

export const auth = {
    login,
    logout,
};
