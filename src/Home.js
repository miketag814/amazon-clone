import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61bek4nz8EL._SX3000_.jpg' alt=''/>
                <div className='home_row'>
                    <Product 
                    id="1"
                    title='LG gram (2022) 17Z90Q Ultra Lightweight Laptop, 17" (2560 x 1600) IPS Display, Intel Evo 12th Gen i7 1260P Processor, 16GB LPDDR5, 1TB NVMe SSD, FHD Webcam, WiFi 6E, Thunderbolt 4, Windows 11, Black' image='https://images-na.ssl-images-amazon.com/images/I/31eZFvckRnL._SX160_QL100_AC_SCLZZZZZZZ_.jpg' 
                    rating={5} 
                    price={1399.99} />

                    <Product 
                    id="2"
                    title="Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens | Built-in Wi-Fi | 24.1 MP CMOS Sensor | DIGIC 4+ Image Processor and Full HD Videos" 
                    image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71EWRyqzw0L._AC_SX450_.jpg' rating={4} 
                    price={479.00} />
                </div>
                <div className='home_row'>
                    <Product 
                    id="3"
                    title='Apple Watch Series 8 [GPS 45mm] Smart Watch w/ Midnight Aluminum Case with Midnight Sport Band - S/M. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant' 
                    image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71XMTLtZd5L._AC_SX466_.jpg' rating={3}
                    price={479.00} />

                    <Product 
                    id="4"
                    title='Bose QuietComfort 45 Bluetooth Wireless Noise Cancelling Headphones - Triple Black' 
                    rating={5} 
                    image='https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/51JbsHSktkL.__AC_SY300_SX300_QL70_FMwebp_.jpg' 
                    price={329.00}/>

                    <Product 
                    id="5"
                    title='Upgraded, Anker Soundcore Bluetooth Speaker with IPX5 Waterproof, Stereo Sound, 24H Playtime, Portable Wireless Speaker for iPhone, Samsung and More'
                     rating={2} 
                     image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61y+b4M0RZL._AC_SY450_.jpg' price={20.99}/>
                </div>
                <div className='home_row'>
                    <Product 
                    id="6"
                    title='TMY Projector 7500 Lumens with 100" Projector Screen, 1080P Full HD Supported Portable Projector, Mini Movie Projector Compatible with TV Stick Smartphone HDMI USB AV, for Home Cinema & Outdoor Movies' r
                    ating={4} 
                    image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71KDaewLIOL._AC_SY450_.jpg' price={79.99}/>
                </div>
            </div>
        </div>

    )
}

export default Home