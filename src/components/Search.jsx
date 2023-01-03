import { useRef } from "react";


const Search = ( {search} ) => {
    const inputRef = useRef();

    const searchData = (event) => {
        event.preventDefault();

        const query = inputRef.current.value;
        console.log(query);
        search(query)
    }


    return (
        <>
            <h2 className="pt-4 text-center">Search Shows</h2>
            <form className="d-flex p-4" onSubmit={searchData}>            
                <input ref={inputRef} className="form-control me-sm-2" type="search" placeholder="Search" />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
            
        </>
        
    )
}

export default Search