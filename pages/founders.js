import React from 'react';
import Image from 'next/image';
import styles from '../styles/Founder.module.css';

const Founder = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.headerTitle}>Meet Our Founders</h1>
            <section className={styles.founder}>
                <div className={styles.profile}>
                    <Image src="/Images/founder.png" alt="Founder" width={200} height={200} className={styles.image} />
                </div>
                <div className={styles.text}>
                    <h2 className={styles.name}>Jatin Sharma</h2>
                    <p>Exemplifying bold leadership and fearless innovation, I Jatin Sharma drive Studyphora&apos;s mission to reshape education. My visionary approach inspires a culture of collaboration, innovation, and excellence, propelling our organization to unparalleled success. With strategic foresight, I navigate Studyphora through challenges, consistently staying ahead of the curve in the dynamic landscape of educational technology. Fearlessly embracing risk, I lead us to explore new frontiers and pioneer transformative solutions that drive the digitalization of education forward. My dynamic leadership and daring approach ensure that Studyphora remains at the forefront of revolutionizing the education sector, leaving an indelible mark on institutions and learners globally.</p>
                </div>
            </section>

            <section className={styles.cofounder}>
                <div className={styles.profile}>
                    <Image src="/Images/cofounder.png" alt="Co-Founder" width={200} height={200} className={styles.image} />
                </div>
                <div className={styles.text}>
                    <h2 className={styles.name}>Apaar Dhangad</h2>
                    <p> Meet Apaar, the visionary fabricator behind StudyPhora, an app that illuminates the path of numerous youngsters. 

As a life long problem solver and tech enthusiast, I have dedicated myself to crafting an app that promises to transform the lives of the youngsters.
You know, being a student can sometimes feel like yourself juggling a million of things at once, right? Well, that is exactly why we decided to create StudyPhora. It is like your ultimate study buddy. So, whether you are tackling tough assignments or prepping for exams, We have got your back. Let us make studying a whole lot easier, together. So lets embark on this journey together where innovation meets simplicity, and where every tap brings us closer to a brighter, more connected future. </p>
                </div>
            </section>

            <section className={styles.others}>
                <h2 className={styles.sectionTitle}>Our Founding Team Members</h2>
                <div className={styles.member}>
                    <div className={styles.memberProfile}>
                        <div className={styles.profile}>
                            <Image src="/Images/web-developer.jpeg" alt="Team Member" width={200} height={200} className={styles.image} />
                        </div>
                        <div className={styles.text}>
                            <h2>Sanskar Bhardwaj</h2>
                            <h3>Website Developer</h3>
                            <p>Welcome to my corner of the digital world! I am Sanskar Bhardwaj, your guide through the virtual realms of creativity and innovation. As a passionate website developer, I embarked on a journey to craft captivating online experiences, and this very website stands as a testament to that endeavor. With lines of code as my brush strokes and pixels as my canvas, I meticulously sculpted each element, from the sleek design to the seamless functionality, with a vision to enchant and engage. Dive into the immersive universe I have crafted, where every click unveils a story, every scroll reveals a discovery, and every interaction sparks a connection. Join me on this digital odyssey, where imagination knows no bounds and innovation knows no limits. Let us embark on this exhilarating adventure together, where the possibilities are as boundless as the vast expanse of the internet itself.
                            </p>
                        </div>
                    </div>
                    {/* <div className={styles.memberProfile}>
                        <div className={styles.profile}>
                            <Image src="/Images/web-developer.jpeg" alt="Team Member" width={100} height={100} className={styles.image} />
                        </div>
                        <div className={styles.text}>
                            <h3>John Doe</h3>
                            <h4>UI/UX Designer</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at urna ac libero aliquet commodo. Nullam vehicula risus vel nisl tempus, ut aliquam mi consequat. Nulla facilisi.</p>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    );
}

export default Founder;
