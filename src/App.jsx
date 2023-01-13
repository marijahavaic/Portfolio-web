import React, { Suspense, useState } from "react";
import "./sass/App.scss";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import { useThemeDetector } from "./hooks/ThemeDetector";

import { useTranslation } from "react-i18next";
import { Outlet } from "react-router";
import { useNavigation } from "react-router-dom";

function App() {
    const isDarkTheme = useThemeDetector();
    const [darkMode, setDarkMode] = useState(isDarkTheme);
    const { t, i18n } = useTranslation();
    const navigation = useNavigation();

    const handleToggle = () => {
        setDarkMode(!darkMode);
    };

    const languageChange = (code) => {
        i18n.changeLanguage(code);
    };

    return (
        <Suspense fallback="Loading...">
            <div className={`App ${darkMode ? "Dark-mode" : "Light-mode"}`}>
                <NavBar
                    darkMode={darkMode}
                    handleToggle={handleToggle}
                    t={t}
                    languageChange={languageChange}
                />
                {/* Render routes */}
                <div
                    className={navigation.state === "loading" ? "loading" : ""}
                >
                    <Outlet />

                    <Footer t={t} />
                </div>
            </div>
        </Suspense>
    );
}

export default App;
