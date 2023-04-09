import React, { useState } from 'react'
import { MdSpeed } from "react-icons/md"
import topImage from "../assets/herotop.jpg"

import black from "../assets/black.png"
import brown from "../assets/brown.png"
import red from "../assets/red.png"
import purple from "../assets/purple.png"

const Landing = () => {

    const [currentColor, setColor] = useState(topImage)


    return (
        <div className='container'>
            <img className='top-image' src={currentColor} alt="top image" />
            <div className="gradient"></div>

            <div className="controlpanel">
                <button onClick={() => setColor(topImage)} id='white'></button>
                <button onClick={() => setColor(black)} id='black'></button>
                <button onClick={() => setColor(red)} id='red'></button>
                <button onClick={() => setColor(purple)} id='purple'></button>
                <button onClick={() => setColor(brown)} id='brown'></button>
            </div>

            <div className="description">
                <h2 data-aos="zoom-in">Audi R8</h2>
                <p data-aos="fade-up">
                    Audi R8, kendine güveni, özgüveni ve asilliği ile öne çıkan lüks bir spor otomobildir.
                    Güçlü V10 motoru ve aerodinamik tasarımı sayesinde, yolculuklarınızı hızlı, keyifli ve iddialı bir şekilde yapmanızı sağlar.
                    İster şehir içinde ister pistte kullanın,
                    Audi R8 her zaman sizi etkileyici bir performansla karşılar ve asaletinizi yansıtır.
                </p>
            </div>

            <div className="stats">
                <div data-aos="fade-up" data-aos-delay="300" className="stat">
                    <div className="stat-top"><MdSpeed />3.6s</div>
                    <div className="stat-bot">0 - 100km/s</div>
                </div>
                <div data-aos="fade-up" data-aos-delay="500" className="stat mid">
                    <div className="stat-top">+250km/s</div>
                    <div className="stat-bot">Maks. Hız</div>
                </div>
                <div data-aos="fade-up" data-aos-delay="700" className="stat">
                    <div className="stat-top">+598km</div>
                    <div className="stat-bot">Menzil</div>
                </div>
            </div>
        </div>)
}

export default Landing