import styled, {createGlobalStyle} from "styled-components";
import Title from "./components/title";
import AboutFilm from "./components/content/aboutFilm";
import FilmSelection from "./components/content/filmSelection";
import FilmSession from "./components/content/filmSession";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SessionOverview from "./components/content/sessionOverview";


export default function App() {
  const [filmId, setFilmId] = useState(null)
  const [session, setSession] = useState(null)
  const [time, setTime] = useState("--:--")
  const [sesDate, setSesDate] = useState("--/--/----")

  return (
    <>
    <GlobalStyle />
    <ThisApp>
      <Title />
      <>
      <BrowserRouter>
        {filmId != null ?
            <AboutFilm 
            filmId = {filmId}
            setFilmId = {setFilmId}
            />
        : null}
            <Routes>
                <Route path="/" element={<FilmSelection setFilmId = {setFilmId}/>}/>
                <Route path="/film/:filmId"
                element={<FilmSession 
                  setSession={setSession}
                  time={time}
                  setTime={setTime}
                  sesDate={sesDate}
                  setSesDate={setSesDate}
                  />}/>
                <Route path="/session/:sessionId" 
                element ={<SessionOverview />} />
            </Routes>
        </BrowserRouter>
        </>
    </ThisApp>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
body{
  padding: 0;
  margin: 0;
  background-color: #F5F5F5;
}
`

const ThisApp = styled.div`
  width: 100vw;
  height: 100vh;
`