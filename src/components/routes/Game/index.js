const GamePage= ({handleChangePage}) => {
    const handleGame = () => {
        console.log('gamePage');
        handleChangePage && handleChangePage('app');
    } 
    return(
        <>
        <div>GamePage</div>
        
        <button onClick={handleGame}>
        Home
        </button>
        </>
        
    )
}
export default GamePage;