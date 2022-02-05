export interface Person {
    id: string;
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    gender: string;
    birth_year: string;
    home_planet: {
        name: string;
        terrain: string;
        population: string;
    };
    species: {
        name: string;
        average_lifespan: string;
        classification: string;
        language: string;
    }[];
    films: {
        title: string;
        director: string;
        producer: string;
        release_date: string;
    }[];
}
