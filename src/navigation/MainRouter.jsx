import { Routes, Route, Navigate } from 'react-router'
import HomePage from '../pages/HomePage'
import ItemsPage from '../pages/ItemsPage'
import MapPage from '../pages/MapPage'

function MainRouter() {
    return (
        <Routes>
            <Route
                path='*'
                element={<Navigate to='/' replace />}
            />
            <Route path='/' element={<HomePage />} />
            <Route path='/items' element={<ItemsPage />} />
            <Route path='/map' element={<MapPage />} />
        </Routes>
    )
}

export default MainRouter