import { Routes, Route, Navigate } from 'react-router'
import HomePage from '../pages/HomePage'    
import MapPage from '../pages/MapPage'
import SortableItemListPage from '../pages/SortableItemListPage'
import ContactPage from '../pages/ContactPage'
import LostItemForm from '../pages/LostItemForm'
import ReservationPage from '../pages/ReservationPage'

function MainRouter() {
    return (
        <Routes>
            <Route
                path='*'
                element={<Navigate to='/' replace />}
            />
            <Route path='/' element={<HomePage />} />
            <Route path='/map' element={<MapPage />} />
            <Route path='/sortable-items' element={<SortableItemListPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/lost-item-form' element={<LostItemForm />} />
            <Route path='/reservation' element={<ReservationPage />} />
        </Routes>
    )
}

export default MainRouter