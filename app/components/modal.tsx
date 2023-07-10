import React from "react"

const Modal = ({ children } : { children: React.ReactNode }) => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-slate-500/50 flex justify-center items-center">
            {children}
        </div>
    )
}

export default Modal