import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Admin, ProductList, ProductDetail, PageNotFound, Contact, ContactEu, ContactUs } 
    from '../pages'

const AllRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="products" element={<ProductList />} />
                <Route path="products/:id" element={<ProductDetail />} />
                <Route path="contact" element={<Contact />}>
                    <Route path="eu" element={<ContactEu />} />
                    <Route path="us" element={<ContactUs />} />
                </Route>
                <Route path="admin" element={<Admin />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default AllRoutes