{/* ### Home (`/`)
- Fetch all countries from the API on load using `useEffect`
- Display each country as a card showing its **flag** and **name**
- Clicking a card navigates to `/country/:name` — use the country's common name as the URL param
- Show a loading message while data is being fetched */}

import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const API_URL = "https://restcountries.com/v3.1/all?fields=name,flags,cca3"


export default function AllCountries() {

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleClick = (name) => {
    navigate(`/country/${encodeURIComponent(name)}`);
};

    useEffect(() => {
        async function fetchCountries() {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error("There was a problem fetching this API, Try again")
                }

                const data = await response.json();
                setCountries(data);
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchCountries();
    }, []);

    if (loading) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error)
        return <p>Error: {error}</p>

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', padding: '24px' }}>
            {countries.map((country) => (
                <div onClick={() => handleClick(country.name.common)} style={{
                    width: "220px",
                    border: "1px solid #eee",
                    borderRadius: "10px",
                    overflow: "hidden",
                    background: "#fff",
                    cursor: "pointer"
                }}>
                    <img
                        src={country.flags.png}
                        alt={country.name.common}
                        style={{ width: "100%", height: "150px", objectFit: "cover" }}
                    />
                    <p style={{ fontWeight: "500", fontSize: "14px", margin: "0 0 6px" }}>{country.name.common}</p>
                </div>
            )
            )}
        </div>
    )

}
