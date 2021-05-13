import Registration from "../components/Registration";
import NewProject from "../components/NewProject";
import AdminNavigation from "../components/AdminNavigation";

import "../css/admin.css";

export default function ManageProjects() {
    console.log("manage porjects");

    return (
        <div className="admin-container">
            <AdminNavigation />

            <h1 className="admin-header">Create new Admin</h1>
            <Registration />
            <h1 className="admin-header">Create Project</h1>
            <NewProject />
        </div>
    );
}
