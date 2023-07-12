import styles from './NotFoundBlock.module.scss'
const NotFoundBlock = () => {

    return(
        <div className={styles.root}>
            <span>😕</span>
        <h1>Ничего не найдено</h1>
            <p>К сожеланию данная страница не доступна в нашем интернет магазине</p>
        </div>
    )
}
export default NotFoundBlock