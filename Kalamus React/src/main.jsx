import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Clients from './pages/clients.jsx'
import CalendarSide from './pages/calendar.jsx'
import Raport from './pages/raports.jsx'
import Sale from './pages/sale.jsx'
import Task from './pages/tasks.jsx'
import Messenges from './pages/messenges.jsx'
import './index.css'
import './calendar.css'
import './clients.css'
import './sales.css'
import './messenges.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from './layout/layout.jsx';
import Notes from './pages/notes.jsx';
import LoginPage from './pages/loginpage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<LoginPage/>} />
                </Route>
                <Route path="/dashboard" element={<Layout />}>
                    <Route index element={<App/>} />
                </Route>
                <Route path="/clients" element={<Layout />}>
                    <Route index element={<Clients />} />
                </Route>
               <Route path="/calendar" element={<Layout />}>
                    <Route index element={<CalendarSide />} />
                </Route>
                <Route path="/sale" element={<Layout />}>
                    <Route index element={<Sale />} />
                </Route>
                <Route path="/tasks" element={<Layout />}>
                    <Route index element={<Task/>} />
                </Route>
                <Route path="/messenges" element={<Layout />}>
                    <Route index element={<Messenges />} />
                </Route>
                <Route path="/raports" element={<Layout />}>
                    <Route index element={<Raport />} />
                </Route>
                
                <Route path="/notes" element={<Layout />}>
                    <Route index element={<Notes />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
