import apiConfig from "../api-config/api-config";
import routes from "../api-config/routes";

const users = {
    login: async function (email, password) {
        const user = await apiConfig.postRequest(routes.users.login, {
            email: email,
            password: password
        });

        return user.user;
    },
    signup: async function (name, email, password) {
        const user = await apiConfig.postRequest(routes.users.signup, {
            name: name,
            email: email,
            password: password
        });

        return user;
    },
    generate_link: async function (email) {
        const link = await apiConfig.getRequest(`${routes.users.send_email_link}?email=${email}`);

        return link;
    },
    email_verification: async function (token, otp) {
        const user = await apiConfig.getRequest(`${routes.users.verify_email}?token=${token}&otp=${otp}`);

        return user;
    }
}

export default users;