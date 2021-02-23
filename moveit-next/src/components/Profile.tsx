import React from "react";
import styles from '../styles/components/Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/thiagonmiziara.png" alt="Foto Thiago" />
      <div>
        <strong>Thiago Miziara</strong>
        <p>Level 01</p>
      </div>
    </div>
  );
};

export default Profile;
