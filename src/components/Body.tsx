import React, {useState} from "react";
import {Button} from "antd";
import TableContent from "./TableContent";
import schema from "../request/schema";
import axios from "axios";
import {Spin} from "antd/lib";

function Body() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const query = {
        "operationName": "AllFilms",
        "query": schema,
        "variables": {}
    }

    const loadData = () => {
        setIsLoading(true);
        axios.post(
            "https://parseapi.back4app.com/graphql",
            query,
            {
                headers: {
                    "X-Parse-Application-Id": "4YVrcQ25RLsPYpxnvHKrid3DaEDhYwPC7Dc3lmi6",
                    "X-Parse-REST-API-Key": "I5i2miMFzYAp37QauEXwFIvNXVo9RvM5Cia2buqy"
                }
            }
        ).then(res => {
            const list = res.data.data.sWAPI_Films.edges.map((node: any) => {
                const newMovie = {
                    id: node.node.id,
                    title: node.node.title,
                    director: node.node.director,
                    episodeId: node.node.episodeId,
                    createdAt: node.node.createdAt,
                    producer: node.node.producer,
                    releaseDate: node.node.releaseDate,
                    updatedAt: node.node.updatedAt,
                    numberOfCharacters: node.node.characters.count,
                    characters: node.node.characters.edges.map((edge: any) => (
                        {
                            id: edge.node.id,
                            name: edge.node.name
                        }
                    )),
                    numberOfPlanets: node.node.planets.count,
                    planets: node.node.planets.edges.map((edge: any) => (
                        {
                            id: edge.node.id,
                            name: edge.node.name
                        }
                    ))
                }
                return newMovie;
            })
            setMovies(list);
            setIsLoading(false);
        }).catch(err => {
            console.log(err);
            setIsLoading(false);
        })
    }

    return (
        <div style={bodyStyle}>
            <div>
                <Button style={buttonStyle} type={"primary"}
                        onClick={loadData}>
                    Load Now
                </Button>
            </div>
            {isLoading ? (
                <Spin/>
            ) : (
                <TableContent movies={movies}/>
            )}
        </div>
    )
}

const bodyStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
    width: "80%",
    marginRight: "auto",
    marginLeft: "auto"
}

const buttonStyle: React.CSSProperties = {
    float: "right",
    margin: "5px 5px 10px 0"
}

export default Body;
