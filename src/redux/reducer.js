export default function redux(state = {}, action) {
    console.log("reducer running", typeof action.type);

    if (action.type === "GET_PROJECTS") {
        state = {
            ...state,
            data: action.data,
        };
    }
    if (action.type === "POST_NEWPROJECT") {
        state = {
            ...state,
            data: action.data,
        };
    }

    if (action.type === "GET_LOGIN") {
        console.log("reducer", action.admin);
        state = {
            ...state,
            admin: action.admin,
        };
    }

    if (action.type === "GET_REGISTRATION") {
        state = {
            ...state,
            admin: action.admin,
        };
    }
    if (action.type === "GET_ERROR") {
        console.log("reducer error", action.error);
        state = {
            ...state,
            error: action.error,
        };
    }

    if (action.type === "GET_SINGLEPROJECT") {
        console.log("reducer porjects", action.singleProject);
        state = {
            ...state,
            singleProject: action.singleProject[0],
        };
    }
    return state;
}
