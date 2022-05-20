const arr = [2,3,4,5]
// export default arr
function App () {
    return (
        <div>
            {arr.map(ar => {
                return <h1>{ar}</h1>
            })}
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));