import React, { Fragment, useState, useCallback, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Collections from "./components/Collections";
import Formsubmit from "./components/Formsubmit";
import Itemsubmit from "./components/Itemsubmit";
import User from "./components/User";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Inventory from "./components/Inventory";
import Settings from "./components/Settings";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import { AppStateProvider } from "./context/useappstate";
import { AppUser } from "./models/models";
import { refreshToken, signOut } from "./services/AuthApi";

import "./index.css";


// const EMPTY_USER: AppUser = {
//   appUserId: 0,
//   username: "",
//   roles: [],
// };

// const WAIT_TIME = 1000 * 60 * 14;

const App: React.FC = () => {
//   const [user, setUser] = useState<AppUser | null>(EMPTY_USER);

//   const refreshUser = useCallback(() => {
//     refreshToken()
//       .then((existingUser) => {
//         setUser(existingUser);
//         setTimeout(refreshUser, WAIT_TIME);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   useEffect(() => {
//     refreshUser();
//   }, [refreshUser]);

//   const auth = {
//     AppUser: user,
//     isLoggedIn() {
//       return !!user?.username;
//     },
//     hasRole(role: string) {
//       return user?.roles.includes(role);
//     },
//     onAunthenticated(user: React.SetStateAction<AppUser | null>) {
//       setUser(user);
//       setTimeout(refreshUser, WAIT_TIME);
//     },
//     signOut() {
//       setUser(EMPTY_USER);
//       signOut();
//     },
//   };

//   const redirect = (component: JSX.Element, role?: string): JSX.Element => {
//     if (!auth.isLoggedIn() || (role && !auth.hasRole(role))) {
//       return <Navigate to="/" />;
//     }
//     return component;
//   };

  return (
    <AppStateProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        {/* <Route
          path="/api/collection"
          element={auth.isLoggedIn() ? <Collections /> : <Navigate to="/" />}
        /> */}
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/user" element={<User />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </AppStateProvider>
  );
};

export default App;
