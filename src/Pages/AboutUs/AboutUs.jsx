import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className='mt-5'>
                <h2 className='text-5xl text-center text-gray-300 font-bold'>About Us</h2>

            </div>
            <div className="hero min-h-screen rounded-lg mt-5" style={{ backgroundImage: `url('../../../src/assets/about2.jpg')` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">About Us</h1>
                        <p className="mb-5">
                                Rhythmic Music Studio includes a fantastic selection of commonly used guitar chords for you to learn and practice on your
                            favourite songs. But we also encourage you to create your own original chords or modify the existing ones to obtain a particular
                            harmonic color for your guitar composition. Editing and saving new chords is really simple; just switch to "Chord Mode" and follow these steps:

                            <ul>
                                <li>  To select a guitar note, click on the corresponding string and fret. A small white circle will appear indicating the selected note.</li>
                                <li>
                                    To select an open string note, click the string just above the sound hole.</li>

                                <li> To mute a string, right click anywhere along the string. The muted string will be indicated with the X symbol.</li>

                                <li> Once all notes of a user chord have been added, pick one of the three user presets available and press the "Add Current Chord" button to save it.
                                </li>

                                <li>Finally, select your preset chord from any of the 10 chord slots available and load it by pressing the assigned key.</li>
                            </ul>
                        </p>

                        <a href="/login"><button className="btn btn-primary">Connect with Us</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;