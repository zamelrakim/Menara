import React from "react"
import Header from "../partials/header"
import Footer from "../partials/footer"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <React.Fragment>
            <Header />
            <div className="main grow">
                {children}
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default MainLayout