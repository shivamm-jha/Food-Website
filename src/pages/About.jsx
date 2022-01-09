import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'
const About = () => {
    return (
        <div className="about">
            <div className="aboutTop" style={{ backgroundImage: `url(${MultiplePizzas})` }}>
                
            </div>
            <div className="aboutBottom">
                <h1> ABOUT US </h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus libero 
                    ipsum delectus quis architecto recusandae laudantium impedit quod voluptates 
                    ducimus. A, minima perferendis? Pariatur eaque facilis optio velit natus 
                    consectetur necessitatibus reprehenderit alias accusamus, exercitationem 
                    sed quam in doloremque delectus numquam itaque et? Sit ducimus incidunt 
                    doloribus, esse cupiditate suscipit corporis! Consequatur magni iure architecto,
                     totam ea nobis modi fuga tenetur
                     corporis accusamus maiores natus velit non! Reprehenderit, iure pariatur!
                </p>
            </div>
        </div>
    )
}

export default About
