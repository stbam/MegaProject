import './SearchBar.css'

const Search = () => {
    return ( 
    <div className='search-container'>
        <div className='left-search-options'>
            <h4 className='params'>All Filters</h4>
            <h4 className='params'>Major Filter1</h4>
            <h4 className='params'>Major Filter2</h4>
            <h4 className='params'>Major Filter3</h4>
        </div>
        <div className='right-search-options'>
          <input type="text" id='search' className='params' name="search" placeholder='Search By [Name,Genre]' />     
        </div>
    </div> 
    );
}
 
export default Search;