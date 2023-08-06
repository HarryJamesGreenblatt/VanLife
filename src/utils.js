import { redirect } from "react-router-dom";

export async function requiredAuth() {
    const isLoggedIn = localStorage.getItem("loggedin");
    if(!isLoggedIn)
    {
        const resp = redirect("/login?message=You must log in first.");
        resp.body = true;

        throw resp;
    }
    return null;
} 