import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";

export default function HostLayout() {
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}