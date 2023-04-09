import React from 'react'
import aerodinamik from "../assets/aerodinamik.webp"
import motor from "../assets/motor.webp"
import icdizayn from "../assets/icdizayn.webp"
import koltuk from "../assets/koltuk.webp"
import logo from "../assets/audi.png"

const Features = () => {
    return (
        <div className="container2">
            <h1 data-aos="zoom-in">Çarpıcı Özellikleri</h1>
            <div data-aos="zoom-in" className='line'>
                <div></div>
            </div>
            <br />
            <br />
            <div className="lands">
                <div className="land">
                    <img data-aos="fade-right" src={aerodinamik} alt="Aerodinamik" />
                    <div data-aos="fade-left" className="description">
                        <h1>Aerodinamik Dizayn</h1>
                        <p>
                            Audi R8'in aerodinamik tasarımı, mükemmel yol tutuşu ve hızlı performansı destekler.
                            Özellikle arka difüzör ve kanatları, aracın yere daha sıkı bir şekilde tutunmasını
                            ve hava direncini azaltmasını sağlar.
                        </p>
                    </div>
                </div>
                <div data-aos="zoom-in" className='line'>
                    <div></div>
                </div>
                <div className="land">
                    <div data-aos="fade-right" className="description">
                        <h1>Güçlü V10 Motor</h1>
                        <p>
                            Audi R8'in güçlü V10 motoru, 610 beygir gücüne kadar çıkabilen performansıyla rakiplerinin önüne geçer.
                            Dinamik sürüş modları ve yüksek performanslı şanzımanı sayesinde, sürücüsüne inanılmaz bir sürüş deneyimi sunar.
                        </p>
                    </div>
                    <img data-aos="fade-left" src={motor} alt="Aerodinamik" />
                </div>
                <div data-aos="zoom-in" className='line'>
                    <div></div>
                </div>
                <div className="land">
                    <img data-aos="fade-right" src={icdizayn} alt="Aerodinamik" />
                    <div data-aos="fade-left" className="description">
                        <h1>Lüks İç Dizayn</h1>
                        <p>
                            Audi R8'in iç mekanı, lüks ve sportifliği mükemmel bir şekilde birleştirir.
                            Ergonomik koltukları, yüksek teknolojili kokpiti ve kaliteli malzemeleriyle sürüş keyfinizi artırır.
                        </p>
                    </div>
                </div>
                <div data-aos="zoom-in" className='line'>
                    <div></div>
                </div>
                <div className="land">
                    <div data-aos="fade-right" className="description">
                        <h1>Rahat Koltuklar</h1>
                        <p>
                            Audi R8'in koltukları, yarış otomobillerinden esinlenerek tasarlanmıştır.
                            Yüksek yan destekleri ve ayarlanabilir başlıkları sayesinde, sürücünün ve yolcuların rahatlığı ve güvenliği sağlanır.
                        </p>
                    </div>
                    <img data-aos="fade-left" src={koltuk} alt="Aerodinamik" />
                </div>
                <div data-aos="zoom-in" className='line'>
                    <div></div>
                </div>
                <div data-aos="zoom-in" className="shop">
                    <button>
                        <span>Shop Now</span>
                        <img src={logo} alt="Logo" />
                    </button>
                </div>
            </div>
        </div>)
}

export default Features