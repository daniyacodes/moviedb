import React, { useEffect, useState } from 'react'
import logo from "../../assets/image/logo.png"
import {Link} from "react-router-dom"
import {Search, Bell, User, ChevronDown} from "lucide-react"
import styles from "./Header.module.css"


function Header() {
  let [isSearchOpen, setIsSearchOpen] = useState(false);
  let [isProfileOpen, setIsProfileOpen]= useState(false);

  let [isScrolled, setIsScrolled] = useState(false);

  useEffect( ()=>{
    let handleScroll= ()=>{
      if(window.scrollY > 50){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }

      window.addEventListener('scroll', handleScroll)
      return()=>{
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])
 

  return (
    <header className={`${styles.header} ${isScrolled? styles.scrolled: ""}`}>
        <div className={styles.container}>
            {/* logo */}
            <img src={logo} className={styles.logo} alt="netflix-logo" />

            {/* {nav-links} */}
            <nav className={styles.nav}>
                <Link className={styles.navLink} href="">Home</Link>
                <Link className={styles.navLink} href="">Tv show</Link>
                <Link className={styles.navLink} href="">Movies</Link>
                <Link className={styles.navLink} href="">New & Popukar</Link>
                <Link className={styles.navLink} href="">My List</Link>
                <Link className={styles.navLink} href="">Browse by Language</Link>
            </nav>

            {/* right-side links */}
            <div className={styles.rightSection}>
                {/* search */}
                <div className={styles.searchContainer}>
                  <button 
                  className={styles.searchButton}
                  onClick={()=>{setIsSearchOpen(!isSearchOpen)}}
                  >
                     <Search size={20}/>
                  </button>

                  {isSearchOpen && (
                    <input type="text" placeholder='movie title' className={styles.searchInput} />
                  )}
                </div>

                {/* notification */}
                <button className={styles.iconButton}>
                  <Bell/>
                  <span className={styles.notificationBadge}>4</span>
                </button>
                

                {/* profile */}
                <div className={styles.profileContainer}>
                  <button className={styles.profileButton}
                  onClick={()=>{setIsProfileOpen(!isProfileOpen)}}
                  >
                     <div className={styles.profileAvator}>
                      {/* user-icon */}
                     <User/>
                     </div>

                      {/* drop-downicon */}
                     <ChevronDown size={20}/>
                     
                  </button>

                  {isProfileOpen && (
                    <div className={styles.profileMenu}>
                      <Link className={styles.profileMenuItem}>account</Link>
                      <Link className={styles.profileMenuItem}>Help center</Link>
                      <hr className={styles.profileMenuDivider}/>
                      <button className={styles.profileMenuItem}>signOut</button>
                    </div>
                  )}
                 
                </div>

            </div>
        </div>
    </header>
  )
}

export default Header