import './App.css'

function App() {
    const imageFilenames = Array.from({length: 17}, (_, index) => `mhl-food-${index + 1}.jpg`);

    return (
        <div style={{backgroundColor: 'white', textAlign: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {imageFilenames.map((filename) => (
                    <img
                        key={filename}
                        src={`/${filename}`} // Assuming your images are in the public folder
                        alt={`Food ${filename}`}
                        style={{
                            width: '100%',
                            maxWidth: '400px',
                            margin: '10px'
                        }} // Adjust the max-width and margin as needed
                    />
                ))}
            </div>
        </div>
    )
}

export default App
