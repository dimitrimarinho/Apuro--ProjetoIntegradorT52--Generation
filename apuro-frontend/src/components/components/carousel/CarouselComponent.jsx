import React from 'react'
import Carousel from 'react-elastic-carousel'           // Não esqueça de instalar a Dependencia
import './CarouselComponent.css'

function CarouselComponent() {
    var items = [
        { img: "https://www.riotgames.com/darkroom/1440/b540da2b9afe5ec83e842a2d84f6dbb1:e95535ecd35e48592908762c9353926a/arcane-final-poster-16x9-no-text-no-border.jpg" },
        { img: "https://trecobox.com.br/wp-content/uploads/2021/11/Arcane-2.jpg" },
        { img: "https://i.blogs.es/79f36c/portada-analisis-trailer-arcane-league-of-legends/1366_2000.jpeg" },
        { img: "https://cdn1.dotesports.com/wp-content/uploads/sites/3/2021/09/26143317/LUkXhMag.jpeg" }
    ]

    return (
        <div className='caixa'>
            <Carousel isRTL={false}>
            {
                items.map(item => (
                    <>
                        <img src={item.img} alt="Item" />
                    </>
                ))
            }
            </Carousel>
        </div>
    )
}

export default CarouselComponent