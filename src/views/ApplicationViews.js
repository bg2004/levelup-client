import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { GameList } from "../components/game/GameList"
import { EventList } from "../components/event/EventList"
import { GameForm } from "../components/game/GameForm"
import { EventForm } from "../components/event/EventForm"
import { EditGame } from "../components/game/EditGame"
import { EditEvent } from "../components/event/EditEvent"


export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/games" element={<GameList />} />
                <Route path="/events" element={<EventList />} />
            </Route>
            <Route path="/gameform" element={<GameForm />} />
            <Route path="/eventform" element={<EventForm />} />
            <Route path="editgame/:gameId" element={<EditGame />} />
            <Route path="editevent/:eventId" element={<EditEvent />} />
        </Routes>
        
    </>
}