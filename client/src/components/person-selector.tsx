import React from 'react';
import '../App.scss';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Person } from '../person.interface';

const persons = require('../persons.json');

function PersonSelector(props: { personId: string; onSelect: (event: SelectChangeEvent) => void; }) {
    return (
        <section className="person-selector">
            <FormControl>
                <InputLabel id="demo-simple-select-label">Person</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.personId}
                    label="Person"
                    sx={{width: 300}}
                    onChange={props.onSelect}>
                    {persons.map((p: Partial<Person>) => (<MenuItem value={p.id} key={p.id}>{p.name}</MenuItem>))}
                </Select>
            </FormControl>
        </section>
    );
}

export default PersonSelector;