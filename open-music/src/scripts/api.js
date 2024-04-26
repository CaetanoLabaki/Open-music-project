// api.js
async function fetchAlbums() {
    try {
        const response = await fetch('https://openmusic-fake-api.onrender.com/api/musics');
        if (!response.ok) {
            throw new Error('Failed to fetch data from the API');
        }
        const data = await response.json();
        return data; // Assuming the API response is an array of album objects
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Return an empty array in case of an error
    }
}

export { fetchAlbums };
