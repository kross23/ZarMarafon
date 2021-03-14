
import l from './index.module.css';
const Layout = ({color, title, descr, bg, }) => {

    const styles = {
        background: `url(${bg})`,
        backgroundColor: `${color}`,
    };
 
return(
    <section className={l.root} style={styles} >
    <div className={l.wrapper}>
        <article >
            <div className={l.title}>
                <h3>{title}</h3>
                <span className={l.separator}></span>
            </div>
            <div className={l.desc, l.full}>
                <p>{descr}</p>
            </div>
        </article>
    </div>
</section>
)

}
export default Layout;