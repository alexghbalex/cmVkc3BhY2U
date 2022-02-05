import React from 'react';
import './App.scss';
import { Alert, SelectChangeEvent, Snackbar, Typography } from '@mui/material';
import { Person } from './person.interface';
import PersonSelector from './components/person-selector';
import Result from './components/result';

const persons = require('./persons.json');

function App() {
    const [data, setData] = React.useState({} as Person);
    const [personId, setPersonId] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: SelectChangeEvent): void => {
        setLoading(true);
        setPersonId(event.target.value);
        fetch(`/api/${event.target.value}`)
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setData(data);
            })
            .catch(error => setOpen(true));
    };

    const handleClose = () => setOpen(false);

    return (
        <div className="App">
            <header className="App-header">
                <Typography gutterBottom variant="h5" component="h5"> REDspace Code Challenge </Typography>
                <Typography gutterBottom variant="h6" component="h6"> The Star Wars </Typography>
            </header>
            <PersonSelector personId={personId} onSelect={handleChange}/>
            <Result data={data} loading={loading}></Result>

            {
                open &&
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}>
                    <Alert severity="error">There is a server problem!</Alert>
                </Snackbar>
            }
        </div>
    );
}

export default App;
