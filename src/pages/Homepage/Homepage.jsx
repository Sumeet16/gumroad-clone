import React, { useState } from 'react'
import "./Homepage.css"
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar'
import Search_Section from '../../components/Search_Section/Search_Section'
import Product_Card from '../../components/Product_Card/Product_Card'
import Product_Card_1 from '../../components/Product_Card-1/Product_Card-1'
import Product_Card_2 from '../../components/Product_Card-2/Product_Card_2'
import Expand_btn from '../../components/Expand_btn/Expand_btn'
import Footer from '../../components/Footer/Footer'

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className='homepage_container'>
      <Navbar />
      <Search_Section />
      <div className="recommended_section">
        <div className="heading_Container">
          <p className="heading">Recommended</p>
          <div className="slider">
            <img className='arrow' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iLTIgLTIgMjggMjgiPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Im02Ljg4NiAyMC4yMyAyLjc0OS0uNjJjLS4xNDgtMS40NzktLjY4LTIuODEtMS41NjctNC4wMjEtLjkxNi0xLjIxMi0xLjk1MS0xLjk4MS0zLjEzNC0yLjMzNkgyMy41di0yLjMwNkg0LjkzNGMxLjE4My0uMzU0IDIuMjE4LTEuMTIzIDMuMTM0LTIuMzA2Ljg4Ny0xLjIxMiAxLjQyLTIuNTQyIDEuNTY3LTQuMDVMNi44ODUgNEM2LjY4IDguMTY4IDQuMTk2IDEwLjYyMi41IDEwLjk0N3YyLjMwNmMzLjY5NS4zMjUgNi4xNzkgMi44MDkgNi4zODYgNi45NzciLz48L3N2Zz4=" alt="left-arrow" srcset="" />
            <p className="slider_text">1/8</p>
            <img className='arrow' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iLTIgLTIgMjggMjgiPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Im0xNy4xMTQgMjAuMjMtMi43NDktLjYyYy4xNDgtMS40NzkuNjgtMi44MSAxLjU2Ny00LjAyMS45MTYtMS4yMTIgMS45NTEtMS45ODEgMy4xMzQtMi4zMzZILjV2LTIuMzA2aDE4LjU2NmMtMS4xODMtLjM1NC0yLjIxOC0xLjEyMy0zLjEzNC0yLjMwNi0uODg3LTEuMjEyLTEuNDItMi41NDItMS41NjctNC4wNUwxNy4xMTUgNGMuMjA2IDQuMTY4IDIuNjkgNi42MjIgNi4zODUgNi45NDd2Mi4zMDZjLTMuNjk1LjMyNS02LjE3OSAyLjgwOS02LjM4NiA2Ljk3NyIvPjwvc3ZnPg==" alt="right-arrow" srcset="" />
          </div>
        </div>
        <div className="products_slider_container">
          <Product_Card />
          <Product_Card />
          <Product_Card />
          <Product_Card />
          <Product_Card />
          <Product_Card />
          <Product_Card />
          <Product_Card />
        </div>
      </div>
      <div className="wishlist_section">
        <p className="heading">Wishlists you might like</p>
        <div className="wishlist_grid">
          <Product_Card_1 />
          <Product_Card_1 />
          <Product_Card_1 />
          <Product_Card_1 />
        </div>
      </div>
      <div className="created_for_you_section">
        <div className="heading_Container">
          <p className="heading">Created For You</p>
          <ul className='nav_list'>
            <li className='nav_items'>Hot & New</li>
            <li className='nav_items'>Trending</li>
            <li className='nav_items'>Created</li>
          </ul>
        </div>
        <div className='flex_row filter_grid_container'>
          <div className='filter_grid'>
            <div className='filter_cell flex_row'>
              <p>Filter</p>
              <p className="underline">Clear</p>
            </div>
            <div className='filter_cell flex_row'>
              <p>Tags</p>
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTkgNS4wMDcgNyA3LTcgNyIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==" alt="arrow-right" srcset="" />
            </div>
            <div className='filter_cell flex_row'>
              <p>Contains</p>
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTkgNS4wMDcgNyA3LTcgNyIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==" alt="arrow-right" srcset="" />
            </div>
            <div className='filter_cell flex_row'>
              <p>Price</p>
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTkgNS4wMDcgNyA3LTcgNyIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==" alt="arrow-right" srcset="" />
            </div>
            <div className='filter_cell flex_row'>
              <p>Rating</p>
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTkgNS4wMDcgNyA3LTcgNyIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==" alt="arrow-right" srcset="" />
            </div>
          </div>
          <div className='flex_col'>
            <div className="product_grid">
              <Product_Card_2 />
              <Product_Card_2 />
              <Product_Card_2 />
              <Product_Card_2 />
              <Product_Card_2 />
              <Product_Card_2 />
            </div>
            <div className="flex_row pt-25">
              <Expand_btn text="Load More" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer_Section">
        <Footer />
      </div>
    </div>
  )
}

export default Homepage