import React from 'react'
import { useCallback, useEffect, useState } from "react";
import {TypeAnimation} from 'react-type-animation'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { FaGithub } from "react-icons/fa";


const Main = () => {
    const [ init, setInit ] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
    <div id='main'>

        <div className='w-full h-dvh absolute top-0 left-0'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-200'>I'm Anıl Şen</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-200'>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Senior CSE Student',
                        1500, // wait 1s before replacing "Mice" with "Hamsters"
                        'Sabanci University',
                        1500,
                    ]}
                    wrapper="div"
                    speed={20}
                    style={{ fontSize: '1em', display: 'inline-block' }}
                    repeat={Infinity}
                    />
                </h2>
                <div className='flex justify-center pt-6 max-w-[200px] w-full items-center hover:scale-110 ease-in duration-200'>
                    <FaGithub className='cursor-pointer' fill='white' size={40}/>
                </div>
            </div>
        </div>

        <div>



            
            { init && <Particles
                    className='w-full h-dvh'
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "#3b3c45",
                            },
                        },
                        fullScreen: {
                            enable: false,
                            zIndex: -1,
                            },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 4,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            }</div>
    </div>
)       
    ;
};
  
  export default Main;