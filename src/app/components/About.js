"use client"

export default function About() {
    return (
        <div>
            <h1>About</h1>

            <div className="flex items-center justify-center gap-20 two-col">
                <div>
                    <p>
                        Hi! I'm a <strong>Junior Web Developer</strong> specializing in 
                        <strong>front-end development,</strong> with a passion for creating 
                        responsive and accessible web interfaces. I enjoy bulding user experiences 
                        that are clean. intuitive, and aligned with <strong>WCA accessibility standards</strong> 
                        to make applications usable for everyone.
                    </p>

                    <p>
                        I'm a <strong>Bachelor of Science in Computer Science graduate</strong> who enjoys
                        continuously learning and exploriing new technologies. I'm particularly inteerested 
                        in <strong>machine learning</strong> and how it can be combined with web development 
                        to create smarter and more meaningful digital experiences.
                    </p>
                </div>
                <div className="text-center">[Image Here]</div>
            </div>
        </div>
    )
}