
import s from  './index.module.css';

const Header =({descr, title, handleClick}) => {
  const onclickbutton = () => {
      console.log('header');
      handleClick && handleClick('game');
  }
return(
    <header className={s.root}>
    <div className={s.forest}></div>
    <div className={s.container}>
        <h1>{title}</h1>
        <p>{descr}</p>
        <button onClick={onclickbutton}>
            Start Game
        </button>
    </div>
</header>
)
}
export default Header;