import React from 'react';
import '../App.scss';
import {
    CircularProgress, List, ListItem, ListItemIcon, ListItemText, Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Typography
} from '@mui/material';
import HeightIcon from '@mui/icons-material/Height';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import PaletteIcon from '@mui/icons-material/Palette';
import WcIcon from '@mui/icons-material/Wc';
import CakeIcon from '@mui/icons-material/Cake';
import { Person } from '../person.interface';

function Result(props: { data: Person; loading: boolean; }) {
    return (
        <section className="result">
            <Paper elevation={3} sx={{margin: '1em auto', minHeight: '70vh', minWidth: 300, width: '50%'}}>
                <p>{props.loading && <CircularProgress className="loading"/>}</p>

                {
                    props.data?.name && !props.loading &&
                    <Typography gutterBottom variant="h5" component="div">
                        {props.data.name}
                    </Typography>
                }

                {
                    props.data?.name && !props.loading &&
                    <List>
                        <ListItem>
                            <ListItemIcon> <HeightIcon/> </ListItemIcon>
                            <ListItemText primary="Height" secondary={props.data.height} sx={{margin: 0}}/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon> <MonitorWeightIcon/> </ListItemIcon>
                            <ListItemText primary="Mass" secondary={props.data.mass} sx={{margin: 0}}/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon> <PaletteIcon/> </ListItemIcon>
                            <ListItemText primary="Hair Color" secondary={props.data.hair_color} sx={{margin: 0}}/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon> <PaletteIcon/> </ListItemIcon>
                            <ListItemText primary="Skin Color" secondary={props.data.skin_color} sx={{margin: 0}}/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon> <WcIcon/> </ListItemIcon>
                            <ListItemText primary="Gender" secondary={props.data.gender} sx={{margin: 0}}/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon> <CakeIcon/> </ListItemIcon>
                            <ListItemText primary="Birth Year" secondary={props.data.birth_year} sx={{margin: 0}}/>
                        </ListItem>
                        <ListItem sx={{flexDirection: 'column'}}>
                            <Typography gutterBottom variant="h6">Home Planet</Typography>
                            <TableContainer component={Paper}>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow sx={{background: 'lightgreen'}}>
                                            <TableCell align="center">Name</TableCell>
                                            <TableCell align="center">Terrain</TableCell>
                                            <TableCell align="center">Population</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow key={props.data.home_planet.name}>
                                            <TableCell align="center">{props.data.home_planet.name}</TableCell>
                                            <TableCell align="center">{props.data.home_planet.terrain}</TableCell>
                                            <TableCell align="center">{props.data.home_planet.population}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </ListItem>
                        {
                            props.data.species?.length &&
                            <ListItem sx={{flexDirection: 'column'}}>
                                <Typography gutterBottom variant="h6">Species</Typography>
                                <TableContainer component={Paper}>
                                    <Table size="small">
                                        <TableHead>
                                            <TableRow sx={{background: 'lightgreen'}}>
                                                <TableCell align="center">Name</TableCell>
                                                <TableCell align="center">Average Lifespan</TableCell>
                                                <TableCell align="center">Classification</TableCell>
                                                <TableCell align="center">Language</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {props.data.species?.map((row) => (
                                                <TableRow key={row.name}>
                                                    <TableCell align="center">{row.name}</TableCell>
                                                    <TableCell align="center">{row.average_lifespan}</TableCell>
                                                    <TableCell align="center">{row.classification}</TableCell>
                                                    <TableCell align="center">{row.language}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </ListItem>

                        }
                        <ListItem sx={{flexDirection: 'column'}}>
                            <Typography gutterBottom variant="h6">Films</Typography>
                            <TableContainer component={Paper}>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow sx={{background: 'lightgreen'}}>
                                            <TableCell align="center">Title</TableCell>
                                            <TableCell align="center">Director</TableCell>
                                            <TableCell align="center">Producers</TableCell>
                                            <TableCell align="center">Release Date</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {props.data.films?.map((row) => (
                                            <TableRow key={row.title}>
                                                <TableCell align="center">{row.title}</TableCell>
                                                <TableCell align="center">{row.director}</TableCell>
                                                <TableCell align="center">{row.producer}</TableCell>
                                                <TableCell align="center">{
                                                    new Intl.DateTimeFormat('en-GB', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: '2-digit'
                                                    }).format(Date.parse(row.release_date))}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </ListItem>
                    </List>
                }
            </Paper>
        </section>
    );
}

export default Result;