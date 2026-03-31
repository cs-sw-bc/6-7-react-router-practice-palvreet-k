{/*### CountryDetail (`/country/:name`)
- Read the country name from the URL using `useParams`
- Fetch that country's data from the API on load
- Decide what information to display — at minimum show the flag and name
- Include a back button that returns to the previous page using `useNavigate` */}

import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



export default function CountryDetail(){
    const {name} = useParams();
    const navigate = useNavigate();
    const decodedName = decodeURIComponent(name);
    const API_URL = `https://restcountries.com/v3.1/name/${decodedName}`

    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function fetchCountry(){
            try{
                const response = await fetch(API_URL);
                if (!response.ok){
                    throw new Error("There was a problem with this API")
                }
                 const data = await response.json();
                 setCountry(data[0]);

            }
            catch(err){
                setError(err.message);
            }
            finally{
                setLoading(false);
            }
        };
        fetchCountry();
    }, []
    );

    if (loading) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error)
        return <p>Error: {error}</p>

    return(
    <>
    <div style={{
                    width: "220px",
                    border: "1px solid #eee",
                    borderRadius: "10px",
                    overflow: "hidden",
                    background: "#fff"
                }}>
                    <img
                        src={country.flags.png}
                        alt={country.name.common}
                        style={{ width: "100%", height: "150px", objectFit: "cover" }}
                    />
                    <p style={{ fontWeight: "500", fontSize: "14px", margin: "0 0 6px" }}>{country.name.common}</p>
                </div>
    <div>

    </div>
    <button onClick={()=> navigate('/')}>Go Back </button>
    </>
    )
}