
import l from './index.module.css';
const Layout = ({color, bg2,  logo}) => {
    console.log('logo: ', logo);
    
return(
    <section className="root">
    <div className="wrapper">
        <img src={bg2}/>
        <article stytle={color}>
            <div className={l.title}>
                <h3>{'<-- ЗДЕСЬ props.title -->'}</h3>
                <span className="separator"></span>
            </div>
            <img src={logo}/>
            <div className={l.desc, l.full}>
                <p>{'<-- ЗДЕСЬ props.desc -->'}</p>
            </div>
        </article>
    </div>
</section>
)
}
export default Layout;