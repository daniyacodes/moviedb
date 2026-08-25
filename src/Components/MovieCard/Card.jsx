import React from 'react'
import {FaCirclePlay}from "react-icons/fa6"
import {BsPlusCircle} from "react-icons/bs"
import {GoCheckCircleFill} from "react-icons/go"
import {IoIosArrowDropdownCircle} from "react-icons/io"
// import { movies } from "./../../Data/Data.js";
import styles from "./Card.module.css"
let IMAGE_BASE = "https://image.tmdb.org/t/p/w500"//the API usually doesn't return the complete URL to the movie poster/backdrop leziyanew

function Card({movie}) {
    let genres = ["Adventure", "Action", "Trailer"]
    // if(!movie){
    //     console.log("undefined")
    //     return null
    // }
    // console?.log(movie.poster_path)
  return (
    <div className={styles.cardWrapper}>
        {/* poster img */}
        <img className={styles.poster} src={`${IMAGE_BASE}${movie?.poster_path}`} alt="poster-img" />

        {/* hover-card */}
        <div className={styles.hoverCard}>
            {/* img */}
            <img src={`${IMAGE_BASE}${movie?.poster_path}`} alt="hover-img" className={styles.hoverImg} />

            {/* badge */}
            <div className={styles.badge}>
                Recently added
            </div>

            {/* button-row */}
            <div className={styles.buttonRow}>
                <FaCirclePlay className={styles.circleButton} size={40} color='white'/>
                <BsPlusCircle className={styles.circleButton} size={40} color='white'/>
                <GoCheckCircleFill className={styles.circleButton} size={40} color='white'/>
                <IoIosArrowDropdownCircle size={40} color='white' className={styles.circleButtonSmall}/>
            </div>


            {/* meta-data row */}
            <div className={styles.metaRow}>
                <span className={styles.tag}>U/A 16plus</span>
                <span className={styles.tag}>Movies</span>
                <span className={styles.tag}>HD</span>
            </div>

            {/* genre*/}
            <div className={styles.genres}>
                {genres?.map( (g, index)=>(
                    
                    <span key={index}>
                        {g}
                        {index < genres.length-1 && <span className={styles.dot}> • </span> }
                    </span>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Card