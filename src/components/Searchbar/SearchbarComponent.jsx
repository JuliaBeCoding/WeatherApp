// Sökfunktion för användaren att skriva in lokation.
// UI enbart.

import '../../styles/Searchbar.css';

const SearchbarComponent = ({input, setInput, handleSearch}) => {

  // OnChange uppdaterar inputvärdet medans användaren skriver i inputfältet.

  return (
    <div>
      <form className='Searchbar'>
        <input type="text" placeholder="Sök stad..." value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleSearch}>🔍</button>
      </form>
    </div>
  )
};

export default SearchbarComponent;