import React from 'react'
import "./Search_Section.css"
import Expand_btn from '../Expand_btn/Expand_btn'

const Search_Section = () => {
    return (
        <div className="search_Section">
            <div className="search_row">
                <div className="search_container"></div>
                <Expand_btn color="242423" logo="library" style="box" text="Library" />
                {/* <Expand_btn color="black" logo="cart" style="box" text="2" /> */}
            </div>
            <div className="filter_row">
                {/* <Expand_btn color="black" style="rounded" text="All" /> */}
                {/* <Expand_btn color="black" style="rounded" text="Drawing & Painting" />
                <Expand_btn color="black" style="rounded" text="Education" />
                <Expand_btn color="black" style="rounded" text="3D" />
                <Expand_btn color="black" style="rounded" text="Photography" />
                <Expand_btn color="black" style="rounded" text="Other" />
                <Expand_btn color="black" style="rounded" text="More" option="down-arrow" /> */}
            </div>
        </div>
    )
}

export default Search_Section