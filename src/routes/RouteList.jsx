import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { AddList } from '../pages/AddList'

export const RouteList = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Add" element={<AddList />} />

            
        </Routes>
    </BrowserRouter>
  )
}
