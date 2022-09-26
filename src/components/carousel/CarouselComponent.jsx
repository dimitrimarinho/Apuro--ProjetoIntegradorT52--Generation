import { Grid } from '@material-ui/core'
import React from 'react'
import Carousel from 'react-elastic-carousel'
import './CarouselComponent.css'

function CarouselComponent() {
    var items = [
        { img: "https://i.imgur.com/uL2U4ay.png" },
        { img: "https://i.imgur.com/AN5znv3.png" },
        { img: "https://i.imgur.com/lWwaNqy.png" },
        { img: "https://i.imgur.com/ut62jwf.png" }
    ]

    return (
        <Grid xs= {6}  sm= {12} className='caixac'>
            <Carousel isRTL={false}>
                {
                    items.map(item => (
                        <>
                            <img src={item.img} alt="Item" />
                        </>
                    ))
                }
            </Carousel>
        </Grid>
    )
}

export default CarouselComponent