import React from 'react';
import Image from 'next/image';
import styles from '../styles/Founder.module.css';

const Founder = () => {
    return (
        <div className={styles.container}>
            <section className={styles.founder}>
                <div className={styles.profile}>
                    <Image src="/Images/founder.png" alt="Founder" width={200} height={200} className={styles.image} />
                </div>
                <div className={styles.text}>
                    <h2 className={styles.name}>Jatin Sharma (Founder)</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at urna ac libero aliquet commodo. Nullam vehicula risus vel nisl tempus, ut aliquam mi consequat. Nulla facilisi.</p>
                </div>
            </section>

            <section className={styles.cofounder}>
                <div className={styles.profile}>
                    <Image src="/Images/cofounder.png" alt="Co-Founder" width={200} height={200} className={styles.image} />
                </div>
                <div className={styles.text}>
                    <h2 className={styles.name}>Apaar Dhangad (Co-Founder)</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at urna ac libero aliquet commodo. Nullam vehicula risus vel nisl tempus, ut aliquam mi consequat. Nulla facilisi.</p>
                </div>
            </section>

            <section className={styles.others}>
                <h2 className={styles.sectionTitle}>Our Founding Team Members</h2>
                <div className={styles.member}>
                    <div className={styles.memberProfile}>
                        <div className={styles.profile}>
                            <Image src="/Images/web-developer.jpeg" alt="Team Member" width={100} height={100} className={styles.image} />
                        </div>
                        <div className={styles.text}>
                            <h3>Sanskar Bhardwaj</h3>
                            <h4>Website Developer</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at urna ac libero aliquet commodo. Nullam vehicula risus vel nisl tempus, ut aliquam mi consequat. Nulla facilisi.
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
