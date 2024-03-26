import React from 'react'
import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom'
import Footer from './components/layout/footer/Footer'
import Navigation from './components/layout/navigation/Navigation'
import Home from './pages/home/Home'
import NotFound from './pages/notFound/NotFound'
import StyledContainer from "./styles/StyledContainer";

const Layout = () => {
    return (
        <>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </>
    )
}

const AppRouter = () => (
    <BrowserRouter>
        <StyledContainer/>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path={'/home'} element={<Home/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default AppRouter
