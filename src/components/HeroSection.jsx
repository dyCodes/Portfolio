import React from 'react'

const HeroSection = () => {
    return (
        <div id="hero" className="hero">
            <div className="container">
                <div className="p-3">
                    <h1 className="_heading mb-2">
                        Hi, I'm Yusuf Daudu
                        <h3 className="_sub_heading fw-normal">Frontend + PHP Developer</h3>
                    </h1>

                    <p className="desc_text mb-4 fw-light">
                        I am a 19-year old web developer with 2+ years experience in frontend
                        and core PHP development. I have a strong passion for programming and writing clean, well organized
                        code.
                    </p>
                    <div className="_flex cta">
                        <a href="assets/Resume-Yusuf-Daudu.pdf" download className="btn btn-light me-4">Download CV</a>
                        <a href="#contact" className="btn btn-outline-light d-none d-md-block">Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection