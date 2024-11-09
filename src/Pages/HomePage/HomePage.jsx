import { useEffect, useState } from "react";
import { fetchCharacters } from "/Api";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import "./HomePage.css";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const items = await fetchCharacters();
        setCharacters(items);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getCharacters();
  }, []);

  const handleClickOpen = (character) => {
    setSelectedCharacter(character);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCharacter(null);
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="homepage-container">
      <h1>Personajes de la serie Dragon Ball</h1>
      <Grid container spacing={3}>
        {characters && characters.length > 0 ? (
          characters.map((character) => (
            <Grid item xs={12} sm={6} md={4} key={character.id}>
              <Card className="card" onClick={() => handleClickOpen(character)}>
                <CardMedia
                  component="img"
                  image={character.image}
                  alt={character.name}
                  sx={{ width: "100px", height: "auto" }}
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
          ))
        ) : (
          <Typography variant="body1" color="text.secondary">
            No se encontraron personajes.
          </Typography>
        )}
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedCharacter?.name}</DialogTitle>
        <DialogContent className="dialog-content">
          <DialogContentText>
            <img
              src={selectedCharacter?.image}
              alt={selectedCharacter?.name}
              className="dialog-image"
            />
            <Typography variant="body1" className="dialog-attribute">
              Raza: {selectedCharacter?.race}
            </Typography>
            <Typography variant="body1" className="dialog-attribute">
              Filiación: {selectedCharacter?.affiliation}
            </Typography>
            <Typography variant="body1" className="dialog-attribute">
              Género: {selectedCharacter?.gender}
            </Typography>
            <Typography variant="body1" className="dialog-attribute">
              Ki: {selectedCharacter?.ki}
            </Typography>
            <Typography variant="body1" className="dialog-attribute">
              Descripción: {selectedCharacter?.description}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default HomePage;
