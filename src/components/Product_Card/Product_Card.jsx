import React from 'react'
import "./Product_Card.css"

const Product_Card = (props) => {
    return (
        <div className="product_card">
            <div className="left_section">
                <img src="https://public-files.gumroad.com/unblglk3hh7p0uwzjklt1h3sihjb" alt="product_img" srcset="" />
            </div>
            <div className="right_section">
                <div className='flex_col product_info'>
                    <h2 className="product_Heading">Foliage & Grass Brushset (Photoshop/Pro...</h2>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus</small>
                    <a href="#" className='profile_info flex_row' target="_blank" rel="noopener noreferrer">
                        <img src="https://public-files.gumroad.com/co0oaht8xtzverqamylnhuvhkfg6" alt="profile_logo_sm" className="profile_logo_sm" />
                        <p className="underline">Sumeet Yadav</p>
                    </a>
                </div>
                <div className="flex_row">
                    <div className="flag">
                        <div className="tirangle"></div>
                        <span className="itallic">$</span>0+
                    </div>
                    <div className="rating flex_row">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjAyNCAyLjQ0MWMtLjU3MSAwLTEuMTU0LjM1NS0xLjUgMS4wNjJMOC40MDEgNy44NzZsLTQuODQyLjY4N2MtMS41NTYuMjE3LTIuMDYgMS43NDQtLjkzNyAyLjg0MmwzLjQ5OSAzLjQwNS0uODEyIDQuNzhjLS4yNjggMS41NDYgMS4wMTUgMi40ODEgMi40MDUgMS43NDguNTM2LS4yODQgMy4yOTYtMS43MTQgNC4zMS0yLjI0OWw0LjMxIDIuMjVjMS4zOS43MzIgMi42NzgtLjIwMiAyLjQwNS0xLjc1bC0uODQzLTQuNzc5IDMuNDk4LTMuNDA1YzEuMTMtMS4wOTQuNjUxLTIuNjItLjkwNi0yLjg0MmwtNC44NzItLjY4Ny0yLjA5My00LjM3M2MtLjM0NS0uNzA3LS45MjgtMS4wNjEtMS41LTEuMDYyWiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==" alt="sm_logo" className="invert_logo star" />
                        <p className='itallic'>5.0</p>
                        <p>(3.8K)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product_Card