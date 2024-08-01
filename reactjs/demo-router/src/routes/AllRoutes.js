import { Routes, Route, Navigate } from 'react-router-dom'

const AllRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<p>Accueil</p>} />
                <Route path="/contact" element={<p>Contact</p>} />
            </Routes>
        </>
    )
}

export default AllRoutes