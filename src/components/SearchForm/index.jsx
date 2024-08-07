export const SearchForm = ({ title, handleChange, onSearch }) => {
    return (
        <div>
            <input data-testid="input" type="text" value={title} onChange={handleChange} />
            <button data-testid="button" onClick={onSearch}>Search</button>
        </div>
    )
}
