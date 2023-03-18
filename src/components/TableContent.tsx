import React, { useState } from "react";
import {Modal, Table} from "antd";
import {ColumnsType} from "antd/es/table";
import Movie from "../interfaces/Movie";
import {Button} from "antd";

interface Props {
    movies: Movie[]
}

function TableContent({movies}: Props) {

    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    const showDetails = (id: string)=>{
        
        const res = movies.filter((movie: Movie)=>{
            return movie.id === id;
        })

        setSelectedMovie(res[0]);
        setShowModal(true);
    }

    const handleCancel = () => {
        setShowModal(false);
      };

    const columns: ColumnsType<Movie> = [
        {
            title: "Title",
            dataIndex: "title",
            key: "id"
        },
        {
            title: "Characters",
            dataIndex: "characters",
            key: "id",
            render: (characters) => (
                <>
                    <p>Characters in the movie: {characters.length}</p>
                    <ul>
                        {characters.map((character: any) => (
                            <li key={character.id}>{character.name}</li>
                        ))}
                    </ul>
                </>
            )
        },
        {
            title: "Planets",
            dataIndex: "planets",
            key: "id",
            render: (planets) => (
                <>
                    <p>Planets visited: {planets.length}</p>
                    <ul>
                        {planets.map((planet: any) => (
                            <li key={planet.id}>{planet.name}</li>
                        ))}
                    </ul>
                </>
            )
        },
        {
            title: "Details",
            dataIndex: "id",
            key: "id",
            render: (id) => (
                <>
                    <Button style={buttonStyle} type={"primary"}
                        onClick={()=>{showDetails(id)}}>
                    Show Details
                </Button>
                </>
            )
        }
    ]

    return (
        <div>
            <Table columns={columns} dataSource={movies}/>
            <Modal title="Movie Details" open={showModal} onOk={handleCancel} onCancel={handleCancel} bodyStyle={modalBodyStyle}>
               <div>
                <h5>Title: {selectedMovie?.title}</h5>
               </div>
               <div>
                <h5>Director: {selectedMovie?.director}</h5>
               </div>
               <div>
                <h5>Episode Id: {selectedMovie?.episodeId}</h5>
               </div>
               <div>
                <h5>Producer: {selectedMovie?.producer}</h5>
               </div>
               <div>
                <h5>Created At: {selectedMovie?.createdAt}</h5>
               </div>
               <div>
                <h5>Release Date: {selectedMovie?.releaseDate}</h5>
               </div>
               <div>
                <h5>Updated At: {selectedMovie?.updatedAt}</h5>
               </div>
               <div>
                <h5>Characters:</h5>
                    <ul>
                        {selectedMovie?.characters.map((character: any) => (
                            <li key={character.id}>{character.name}</li>
                        ))}
                    </ul>
               </div>
               <div>
                <h5>Visited Planets:</h5>
                    <ul>
                        {selectedMovie?.planets.map((planet: any) => (
                            <li key={planet.id}>{planet.name}</li>
                        ))}
                    </ul>
               </div>
            </Modal>
        </div>
    )
}

const buttonStyle: React.CSSProperties = {
    margin: "5px 5px 10px 0"
}
const modalBodyStyle: React.CSSProperties = {
    height: '50vh',
    overflowY: 'auto'
}

export default TableContent;