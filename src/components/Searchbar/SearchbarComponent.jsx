// Sökfunktion för användaren att skriva in lokation.
// UI enbart.

const SearchbarComponent = ({input, setInput, handleSearch}) => {

  // OnChange uppdaterar inputvärdet medans användaren skriver i inputfältet.

  return (
    <>
      <form>
        <input type="text" placeholder="Sök stad..." value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleSearch}>Sök</button>
      </form>
    </>
  )
};

export default SearchbarComponent;