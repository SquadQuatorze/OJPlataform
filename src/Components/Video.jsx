import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BsArrowLeftShort, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import './VideoStyle.css'
import { Link } from 'react-router-dom';



export const Video = () => {

    return (
        <div className="flex-1"> 
        
                <Link className='text-decoration-none' to="/trilhas"><h1 className='title'> <BsArrowLeftShort /> Fundamentos de UX</h1> </Link>
                <Link className='link-video' to="/trilhas">Vídeos</Link>
                <div className="text-center containerx ">
                    <a href="" className='btn-left '><BsChevronLeft /></a>
                    <iframe className='class' width="360px" height="220.5px" src="https://www.youtube.com/embed/gG0zZoj595U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
                    <a href="" className='btn-right '><BsChevronRight /></a>
                </div>
        </div>
    )
}