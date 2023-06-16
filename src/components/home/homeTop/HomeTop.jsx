import styles from "./HomeTop.module.css";
import { Navbar } from "../../Navbar/Navbar";
import plane from "../../../assets/plane.svg";
import home from "../../../assets/home.svg";
import heart from "../../../assets/heart.svg";
import asterisk from "../../../assets/asterisk.svg";
import { useState, useEffect } from "react";
import {IoLogoAndroid} from 'react-icons/io';
import {AiFillApple} from 'react-icons/ai'

export function HomeTop() {

  const [text, setText] = useState("on trips.")
  const [img, setImg] = useState(plane)
  const [index, setIndex] = useState(0)

  const changeText = [
    {
      imgText: "on trips.",
      svg: plane,
      style: {
        color: "#1CC29F",
        btn: {
          backgroundColor: "#1CC29F"
        }
      }
    },
    {
      imgText: "with housemates.",
      svg: home,
      style: {
        color: "#8656CD",
        btn: {
          backgroundColor: "#8656CD"
        }
      }
    },
    {
      imgText: "with your partner.",
      svg: heart,
      style: {
        color: "#a6002f",
        btn: {
          backgroundColor: "#a6002f"
        }
      }
    },
    {
      imgText: "with anyone.",
      svg: asterisk,
      style: {
        color: "#1CC29F",
        btn: {
          backgroundColor: "#1CC29F"
        }
      }
    }
  ]

  useEffect( () => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev+1) % changeText.length)
    }, 4000)
    return () => clearInterval(timer);
  }, []);

  useEffect( () => {
    setText(changeText[index].imgText)
    setImg(changeText[index].svg)
},[index])


  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.landingPage}>
        <div className={styles.leftContainer}>
          <div className={styles.leftHead}>
            <span className={styles.headText}>
              Less stress when <br />
              sharing expenses<br />
              <span style={changeText[index].style} className={styles.randomText}>{text}</span>
            </span>
          </div>
          <div className={styles.svgContainer} >
            {/* icons */}
            <img className={styles.svgImgPlane} src={plane} alt="plane"/>
            <img className={styles.svgImgHome} src={home} alt="home"/>
            <img className={styles.svgImgHeart} src={heart} alt="heart"/>
            <img className={styles.svgImgAsterisk} src={asterisk} alt="asterisk"/>
            </div>
          <div className={styles.leftParaText}>
            <span className={styles.paraText}>
              Keep track of your shared expenses and <br />
              balances with housemates, trips, groups,
              <br /> friends, and family.
            </span>
          </div>
          <div className={styles.btnSignUp}>
            <button style={changeText[index].style.btn} className={styles.btn}>Sign up</button>
          </div>
          <div className={styles.leftFootContainer}>
            <span className={styles.leftFoot}>Free for <AiFillApple style={{fontSize: "1rem", paddingTop: ".2rem"}}/> iPhone, <IoLogoAndroid style={{fontSize: "1rem", paddingTop: ".2rem"}}/> Android, and web</span>
          </div>
        </div>

        <div className={styles.rightContainer}>
            {/* images */}
            <img src={img} className={styles.rightSvg}/>
        </div>
      </div>
    </div>
  );
}
