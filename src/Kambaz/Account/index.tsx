import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";

export default function Account() {
    return (
        <div id="wd-account-screen">
            <h1>Accounts</h1>
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <AccountNavigation />
                </div>
                <div className="wd-margin-left">
                    <Routes>
                        <Route path="/" element={<Navigate to="Signin" />} />
                        <Route path="Signin" element={<Signin />} />
                        <Route path="Profile" element={<Profile />} />
                        <Route path="Signup" element={<Signup />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

