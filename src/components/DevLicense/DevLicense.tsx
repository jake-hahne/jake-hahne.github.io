// src/components/DevLicense/DevLicense.tsx

import React, { useState } from 'react';
import { MdStar, MdCached } from 'react-icons/md';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import styles from './DevLicense.module.scss';
import avatarImage from '../../assets/images/my-avatar.png';

const DevLicense: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipLicense = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={styles.licenseContainer}>
      <div className={`${styles.license} ${isFlipped ? styles.isFlipped : ''}`}>
        <div className={styles.licenseFront}>
          <div className={styles.devLicenseGrid}>
            <div className={styles.gridTopRow}>
              <div className={styles.stateName}>New Fork State</div>
              <MdStar className={styles.realIdBadge} />
            </div>
            <div className={styles.avatarNameContainer}>
              <div className={styles.licenseType}>Developer's License</div>
              <div className={styles.avatarContainer}>
                <img src={avatarImage} alt="Jake Hahne" className={styles.avatar} />
              </div>
              <h1 className={styles.signature}>Jake Hahne</h1>
            </div>
            <div className={styles.profileInfo}>
              <div className={styles.contactInfo}>
                <div className={styles.licenseNumberContainer}>
                  <span className={styles.licenseNumber}>
                    <span className={styles.lineLabel}>Lic. No. </span>0x00010F2C
                  </span>
                  <span className={styles.issueDate}>
                    <span className={styles.lineLabel}>Iss </span>05/17/2024
                  </span>
                  <span className={styles.expirationDate}>
                    <span className={styles.lineLabel}>Exp </span>01/19/2038
                  </span>
                </div>
                <div className={styles.nameContainer}>
                  <p className={styles.lastName}>HAHNE</p>
                  <p className={styles.firstName}>JAKE K</p>
                </div>
                <a href="mailto:jakehahne117@gmail.com" className={styles.contactItem}>
                  <div className={styles.iconBadge}>
                    <FiMail className={styles.mailIcon} />
                  </div>
                  <span>jakehahne117@gmail.com</span>
                </a>
                <a href="tel:+14023264919" className={styles.contactItem}>
                  <div className={styles.iconBadge}>
                    <FiPhone className={styles.phoneIcon} />
                  </div>
                  <span>+1 (402) 326-4919</span>
                </a>
                <span className={styles.contactItem}>
                  <div className={styles.iconBadge}>
                    <FiMapPin className={styles.locationIcon} />
                  </div>
                  <span>Kearney, Nebraska, USA</span>
                </span>
              </div>
            </div>
            <div className={styles.gridBottomRow}>
              <div className={styles.techIcons}>
                <i className="devicon-python-plain"></i>
                <i className="devicon-swift-plain"></i>
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-svelte-plain"></i>
                <i className="devicon-react-original"></i>
                <i className="devicon-git-plain"></i>
              </div>
              <div className={styles.socialLinks}>
                <a href="https://github.com/jake-hahne" target="_blank" rel="noopener noreferrer" className={styles.socialLinkGithub}>
                  <BsGithub />
                </a>
                <a href="https://www.linkedin.com/in/jake-hahne/" target="_blank" rel="noopener noreferrer" className={styles.socialLinkLinkedin}>
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.licenseBack}>
          <div className={styles.backTopRight}>
            <div className={styles.barcodeText}>In Git We Trust</div>
          </div>
        </div>
        <div className={`${styles.licenseEdge} ${styles.licenseEdgeTop}`}></div>
        <div className={`${styles.licenseEdge} ${styles.licenseEdgeBottom}`}></div>
        <div className={`${styles.licenseEdge} ${styles.licenseEdgeLeft}`}></div>
        <div className={`${styles.licenseEdge} ${styles.licenseEdgeRight}`}></div>
      </div>
      <div className={styles.flipButtonContainer}>
        <button className={styles.flipLicenseBtn} onClick={flipLicense}>
          <MdCached className={styles.flipIcon} />
          <span className={styles.flipText}>Flip License</span>
        </button>
      </div>
    </div>
  );
};

export default DevLicense;