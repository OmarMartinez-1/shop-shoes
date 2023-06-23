import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>

      <h2 className={styles.headerBanner}>
        Sneakers
      </h2>

      <div className={styles.serchBarAndFillters}>

        <label htmlFor='searchBar' className={styles.iconAndBar}>
          <svg  className={styles.serchIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_405_1640)">
              <path d="M23.5612 21.4454L18.9161 16.7983C22.3918 12.1535 21.4441 5.57052 16.7993 2.0948C12.1545 -1.38092 5.57153 -0.433205 2.09581 4.21157C-1.37991 8.85634 -0.432198 15.4393 4.21258 18.9151C7.94364 21.7071 13.0682 21.7071 16.7993 18.9151L21.4464 23.5622C22.0304 24.1462 22.9772 24.1462 23.5612 23.5622C24.1452 22.9782 24.1452 22.0314 23.5612 21.4474L23.5612 21.4454ZM10.5447 18.0181C6.41661 18.0181 3.0702 14.6717 3.0702 10.5437C3.0702 6.4156 6.41661 3.06919 10.5447 3.06919C14.6727 3.06919 18.0191 6.4156 18.0191 10.5437C18.0147 14.6698 14.6709 18.0137 10.5447 18.0181Z" fill="#374957" />
            </g>
            <defs>
              <clipPath id="clip0_405_1640">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <input className={styles.serchBar} id='searchBar' type="text" placeholder='Search Product' />

        </label>

        <svg className={styles.filterIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_405_1598)">
            <path d="M10.7 2.62535C10.4188 2.02749 9.9733 1.522 9.41551 1.16794C8.85771 0.813871 8.21068 0.625854 7.55 0.625854C6.88932 0.625854 6.24229 0.813871 5.68449 1.16794C5.1267 1.522 4.68118 2.02749 4.4 2.62535H1.5C1.10218 2.62535 0.720644 2.78338 0.43934 3.06469C0.158035 3.34599 0 3.72752 0 4.12535H0C0 4.52317 0.158035 4.9047 0.43934 5.18601C0.720644 5.46731 1.10218 5.62535 1.5 5.62535H4.395C4.67618 6.2232 5.1217 6.7287 5.67949 7.08276C6.23729 7.43683 6.88432 7.62484 7.545 7.62484C8.20568 7.62484 8.85271 7.43683 9.41051 7.08276C9.9683 6.7287 10.4138 6.2232 10.695 5.62535H22.5C22.8978 5.62535 23.2794 5.46731 23.5607 5.18601C23.842 4.9047 24 4.52317 24 4.12535C24 3.72752 23.842 3.34599 23.5607 3.06469C23.2794 2.78338 22.8978 2.62535 22.5 2.62535H10.7Z" fill="#374957" />
            <path d="M16.455 8.49939C15.7944 8.50057 15.1477 8.68911 14.5899 9.04312C14.0321 9.39714 13.5863 9.90211 13.304 10.4994H1.5C1.10218 10.4994 0.720644 10.6574 0.43934 10.9387C0.158035 11.22 0 11.6016 0 11.9994H0C0 12.3972 0.158035 12.7787 0.43934 13.0601C0.720644 13.3414 1.10218 13.4994 1.5 13.4994H13.3C13.5812 14.0972 14.0267 14.6027 14.5845 14.9568C15.1423 15.3109 15.7893 15.4989 16.45 15.4989C17.1107 15.4989 17.7577 15.3109 18.3155 14.9568C18.8733 14.6027 19.3188 14.0972 19.6 13.4994H22.5C22.8978 13.4994 23.2794 13.3414 23.5607 13.0601C23.842 12.7787 24 12.3972 24 11.9994C24 11.6016 23.842 11.22 23.5607 10.9387C23.2794 10.6574 22.8978 10.4994 22.5 10.4994H19.605C19.3228 9.90226 18.8771 9.3974 18.3195 9.04339C17.762 8.68939 17.1154 8.50075 16.455 8.49939Z" fill="#374957" />
            <path d="M7.545 16.3744C6.88455 16.3758 6.23804 16.5644 5.68048 16.9184C5.12292 17.2724 4.67718 17.7773 4.395 18.3744H1.5C1.10218 18.3744 0.720644 18.5324 0.43934 18.8137C0.158035 19.095 0 19.4766 0 19.8744H0C0 20.2722 0.158035 20.6537 0.43934 20.935C0.720644 21.2163 1.10218 21.3744 1.5 21.3744H4.395C4.67618 21.9722 5.1217 22.4777 5.67949 22.8318C6.23729 23.1859 6.88432 23.3739 7.545 23.3739C8.20568 23.3739 8.85271 23.1859 9.41051 22.8318C9.9683 22.4777 10.4138 21.9722 10.695 21.3744H22.5C22.8978 21.3744 23.2794 21.2163 23.5607 20.935C23.842 20.6537 24 20.2722 24 19.8744C24 19.4766 23.842 19.095 23.5607 18.8137C23.2794 18.5324 22.8978 18.3744 22.5 18.3744H10.7C10.4175 17.7765 9.97094 17.2711 9.41241 16.9171C8.85388 16.563 8.2063 16.3748 7.545 16.3744Z" fill="#374957" />
          </g>
          <defs>
            <clipPath id="clip0_405_1598">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className={styles.notices}>
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="45" height="45" rx="10" fill="#E8FCFF" />
          <g clipPath="url(#clip0_110_48)">
            <path d="M31.75 14.25H14.25C12.8693 14.25 11.75 15.3693 11.75 16.75V29.25C11.75 30.6307 12.8693 31.75 14.25 31.75H31.75C33.1307 31.75 34.25 30.6307 34.25 29.25V16.75C34.25 15.3693 33.1307 14.25 31.75 14.25Z" stroke="#016170" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.75 16.75L23 24.25L34.25 16.75" stroke="#016170" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_110_48">
              <rect width="30" height="30" fill="white" transform="translate(8 8)" />
            </clipPath>
          </defs>
        </svg>
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="45" height="45" rx="10" fill="#E8FCFF" />
          <g clipPath="url(#clip0_110_49)">
            <path d="M20.5 14.25C20.5 13.587 20.7634 12.9511 21.2322 12.4822C21.7011 12.0134 22.337 11.75 23 11.75C23.663 11.75 24.2989 12.0134 24.7678 12.4822C25.2366 12.9511 25.5 13.587 25.5 14.25C26.9355 14.9288 28.1593 15.9854 29.0401 17.3066C29.9209 18.6278 30.4255 20.1638 30.5 21.75V25.5C30.5941 26.2771 30.8693 27.0213 31.3035 27.6727C31.7377 28.324 32.3188 28.8643 33 29.25H13C13.6812 28.8643 14.2623 28.324 14.6965 27.6727C15.1307 27.0213 15.4059 26.2771 15.5 25.5V21.75C15.5745 20.1638 16.0791 18.6278 16.9599 17.3066C17.8407 15.9854 19.0645 14.9288 20.5 14.25" stroke="#016170" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.25 29.25V30.5C19.25 31.4946 19.6451 32.4484 20.3483 33.1517C21.0516 33.8549 22.0054 34.25 23 34.25C23.9946 34.25 24.9484 33.8549 25.6517 33.1517C26.3549 32.4484 26.75 31.4946 26.75 30.5V29.25" stroke="#016170" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M34.2501 16.4088C33.4302 14.6253 32.2395 13.0371 30.7576 11.75" stroke="#016170" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.75 16.4088C12.5692 14.6256 13.7589 13.0374 15.24 11.75" stroke="#016170" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_110_49">
              <rect width="30" height="30" fill="white" transform="translate(8 8)" />
            </clipPath>
          </defs>
        </svg>

        <img src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg" className={styles.profilePicture} alt="perfil photo" />

      </div>

    </header>
  )
}