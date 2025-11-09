import { BrowserRouter, Routes, Route } from "react-router";

// Routes
import Contact from "./components/contacts";
import Home from "./components/home";
import Header from "./components/Header";
import MainLayout from "./components/layouts/MainLayout";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <MainLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}

export default Router;