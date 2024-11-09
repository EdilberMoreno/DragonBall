import { useEffect, useState } from "react";
import { fetchCharacters } from "/Api";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import "../CharacterPage/CharacterPage.css";

const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const items = await fetchCharacters();
        setCharacters(items);
      } catch (error) {
        console.error(error.message);
      }
    };

    getCharacters();
  }, []);

  const Characters = characters.filter((response) => response.race === "Human");

  return (
    <div className="homepage-container">
      <h1 >Personajes Humanos de Dragon Ball</h1>
      <Grid container spacing={3}>
        {Characters.map((character) => (
          <Grid item xs={12} sm={6} md={4} key={character.id}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "200px",
                height: "400px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
                backgroundColor: "#fff",
                margin: "10px",
                transition: "transform 0.3s, box-shadow 0.3s"
              }}
            >
              <CardMedia
                component="img"
                image={character.image}
                alt={character.name}
                sx={{ width: "90px", height: "auto" }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {character.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {character.race}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CharacterPage;
