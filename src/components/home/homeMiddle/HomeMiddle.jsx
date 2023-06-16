import React from 'react';
import styles from './HomeMiddle.module.css';
import image1 from '../../../assets/image1.png';
import image2 from '../../../assets/image2.png';
import image3 from '../../../assets/image3.png';
import image4 from '../../../assets/image4.png';
import image5 from '../../../assets/image5.png';



function HomeMiddle() {
    return (
        <>
            <div className={styles.middleContainer}>
                <div className={styles.boxes}>
                    <div className={styles.cardContainer}>
                        <div className={`${styles.cards} ${styles.grey} `} >
                            <div className={styles.cardBody}>
                                <h2 className={styles.cardTitle}>Track balances</h2>
                                <p className={styles.cardText}>Keep track of shared expenses, balances, and who owes who.</p>
                            </div>
                            <div className={styles.imgWrapper}>
                                <img className={styles.cardImages} src={image1} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.cardContainer}>
                        <div className={`${styles.cards} ${styles.orange} `} >
                            <div className={styles.cardBody}>
                                <h2 className={styles.cardTitle}>Add expenses easily</h2>
                                <p className={styles.cardText}>Quickly add expenses on the go before you forget who paid.</p>
                            </div>

                            <div className={styles.imgWrapper}>
                                <img className={styles.cardImages} src={image3} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.boxes}>
                    <div className={styles.cardContainer}>
                        <div className={`${styles.cards} ${styles.green} `} >
                            <div className={styles.cardBody}>
                                <h2 className={styles.cardTitle}>Organize expenses</h2>
                                <p className={styles.cardText}>Split expenses with any group: trips, housemates, friends, and family.</p>
                            </div>
                            <div className={styles.imgWrapper}>
                                <img className={styles.cardImages} src={image2} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.cardContainer}>
                        <div className={`${styles.cards} ${styles.grey} `} >
                            <div className={styles.cardBody}>
                                <h2 className={styles.cardTitle}>Pay friends back</h2>
                                <p className={styles.cardText}>Settle up with a friend and record any cash or online payment.</p>
                            </div>
                            <div className={styles.imgWrapper}>
                                <img className={styles.cardImages} src={image4} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className={styles.box}>
                <div className={styles.cardContainer}>
                    <div className={`${styles.cards} ${styles.purple} `} >
                        <div className={styles.cardBody}>
                            <h2 className={styles.cardTitle}>Get even more with PRO</h2>
                            <p className={styles.cardTexts} >Get even more organized with receipt scanning, charts and graphs, currency conversion, and more!</p>
                        </div>
                    </div>
                </div>

                <div className={styles.cardContainer}>
                    <div className={`${styles.cards} ${styles.purple} `} >
                        <div className={styles.imgWrap}>
                            <img className={styles.cardImage} src={image5} />
                        </div>
                    </div>
                </div>

            </div>
        </>


    )
}

export default HomeMiddle;