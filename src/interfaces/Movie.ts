export default interface Movie {
    id: string,
    title: string,
    director: string,
    episodeId: number,
    createdAt: string,
    producer: string,
    releaseDate: string,
    updatedAt: string,
    numberOfCharacters: number,
    characters: Array<any>,
    numberOfPlanets: number,
    planets: Array<any>
}