import instance from "../components/axios";

export async function getProjects() {
    console.log("actions getProjects");
    try {
        const res = await instance.get("/api/projects");

        if (res.status === 200) {
            return {
                type: "GET_PROJECTS",
                data: res.data,
            };
        }
    } catch (error) {
        return error.message;
    }
}

export async function newProject(formData) {
    console.log("action newProject");
    console.log("action newProject", formData);

    try {
        await instance.post("/api/projects", formData);
        await alert("project upload successfull");
    } catch (error) {
        return {
            type: "GET_ERROR",
            error: error,
        };
    }
}

export async function getSingleProject(projectId) {
    console.log("actions getSingleProject", projectId);
    try {
        const res = await instance.get(`/api/projects/${projectId}`);
        console.log("data in singleProject", res);
        if (res.status === 200) {
            return {
                type: "GET_SINGLEPROJECT",
                singleProject: res.data,
            };
        }
    } catch (error) {
        console.log("error in logout");
        return {
            type: "GET_ERROR",
            error: error,
        };
    }
}

//  ______________  admin login in ____________________

export async function login(email, password) {
    console.log(email, password);
    try {
        const res = await instance.post("/api/auth", {
            email: email,
            password: password,
        });
        if (res.status === 200) {
            return {
                type: "GET_LOGIN",
                admin: res.data,
            };
        }
    } catch (error) {
        return {
            type: "GET_ERROR",
            error: error,
        };
    }
}

export async function registration(first, last, email, password) {
    try {
        const res = await instance.post("/api/admin", {
            first_name: first,
            last_name: last,
            email: email,
            password: password,
        });
        if (res.status === 200) {
            return {
                type: "GET_REGISTRATION",
                admin: res.admin,
            };
        }
    } catch (error) {
        console.log("error in registration");
        return {
            type: "GET_ERROR",
            error: error,
        };
    }
}

export async function getAdmin() {
    try {
        const res = await instance.get("/api/auth/admin");
        if (res.status === 200) {
            return {
                type: "GET_ADMIN",
                admin: res.data,
            };
        }
    } catch (error) {
        console.log("error in get admin");
        return {
            type: "GET_ERROR",
            error: error,
        };
    }
}

export async function logout() {
    try {
        const res = await instance.get("/api/auth/logout");
        if (res.status === 200) {
            console.log("replace / ");
            window.location.replace("/");
        }
    } catch (error) {
        console.log("error in logout");
        return {
            type: "GET_ERROR",
            error: error,
        };
    }
}
