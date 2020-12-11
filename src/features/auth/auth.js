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

const register = (username, email, password) => {
    console.log(`Received values of form: ${username}  ${email} ${password}`);
    axios
        .post("https://seedkeeper.herokuapp.com/users", {
            username: username,
            password: password,
            email: email,
        })
        .then((response) => {
            console.log(response.message);
            if (response.data) {
                console.log(response.data);
            }
        })
        .catch((error) => {
            console.log(error.response.data);
            console.log(error.message);
        });
};

const logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem("token");
    localStorage.removeItem("user");
};

export const auth = {
    login,
    logout,
    register,
};
