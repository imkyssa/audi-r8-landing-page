import React from 'react'
import { GrInstagram, GrTwitter, GrLinkedin } from "react-icons/gr"

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <ul>
                    <h1>Satış</h1>
                    <li>Fiyat Listesi</li>
                    <li>Test Sürüşü</li>
                    <li>Görüntülü Görüşün</li>
                    <li>Yetkili Satıcılar</li>
                    <li>Audinizi Tanıyın</li>
                    <li>Audi prime :plus</li>
                </ul>
                <ul>
                    <h1>Servis ve Aksesuar</h1>
                    <li>Yetkili Servisler</li>
                    <li>Benim Audim</li>
                    <li>Servis Hizmetleri</li>
                    <li>Servis Bilgileri</li>
                    <li>Audi Garanti</li>
                    <li>Audi Garanti Plus</li>
                    <li>Audi Kasko</li>
                    <li>Audi Orijinal Aksesuar®</li>
                    <li>Servis Kampanyaları</li>
                    <li>Audi Shop</li>
                </ul>
                <ul>
                    <h1>Audi Dünyası</h1>
                    <li>Kampanyalar</li>
                    <li>Haberler</li>
                    <li>Güzel Hareketler</li>
                    <li>quattro</li>
                    <li>Audi Yapay Zeka</li>
                    <li>Audi Motor Sporları</li>
                    <li>Audi Tarihi</li>
                    <li>Sürdürülebilirlik</li>
                    <li>İletişim</li>
                </ul>
            </div>
            <div className="footer-bot">
                <small>© 2023 Otomotiv Servis ve Ticaret A.Ş. Her hakkı saklıdır.</small>
                <div className="socials">
                    <GrInstagram />
                    <GrTwitter />
                    <GrLinkedin />
                </div>
            </div>
        </footer>
    )
}

export default Footer