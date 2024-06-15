import React, { useEffect, useState, useMemo } from "react";
import "./App.scss";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { options } from "./utils/particles";

export default function App() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesOptions = useMemo(() => options, []);

    return (
        <div className='App'>
            {init ? (
                <Particles id='tsparticles' options={particlesOptions} />
            ) : (
                <></>
            )}
            <Navbar />
            <div className='App__main-page-content'>
                <Outlet />
            </div>
        </div>
    );
}
