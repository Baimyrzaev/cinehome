import React from 'react'
import { NotFound } from 'components/NotFound'
import { Route, Routes } from 'react-router-dom'
import { AuthLayout } from './pages/Auth/AuthLayout'
import { WorkerOffice } from './pages/WorkerOffice'

export const AdminLayout = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="/worker/:workerId/*" element={<WorkerOffice />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
