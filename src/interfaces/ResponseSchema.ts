export interface Root {
    data: Data
}

export interface Data {
    sWAPI_Films: SWapiFilms
}

export interface SWapiFilms {
    count: number
    edges: Edge[]
}

export interface Edge {
    node: Node
}

export interface Node {
    id: string
    title: string
    characters: Characters
    planets: Planets
}

export interface Characters {
    count: number
    edges: Edge2[]
}

export interface Edge2 {
    node: Node2
}

export interface Node2 {
    name: string
}

export interface Planets {
    count: number
    edges: Edge3[]
}

export interface Edge3 {
    node: Node3
}

export interface Node3 {
    name: string
}
