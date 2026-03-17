import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/layout/Layout"
import { AuthPage } from "./pages/AuthPage"
import { HomePage } from "./pages/HomePage"
import { EventsPage } from "./pages/EventsPage"
import { EventDetailsPage } from "./pages/EventDetailsPage"
import { OrganizerDashboard } from "./pages/OrganizerDashboard"
import { CreateEventPage } from "./pages/CreateEventPage"
import { MyTicketsPage } from "./pages/MyTicketsPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="events/:id" element={<EventDetailsPage />} />
          <Route path="dashboard" element={<OrganizerDashboard />} />
          <Route path="create-event" element={<CreateEventPage />} />
          <Route path="my-tickets" element={<MyTicketsPage />} />
          <Route path="*" element={<div className="p-20 text-center"><h2>404 - Not Found</h2></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
