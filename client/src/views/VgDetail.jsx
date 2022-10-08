import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getVideogameDetail, deleteVideogame } from "../redux/actions";

export default function VideogameDetail() {
    let videogameDetail = useSelector(state => state.videogameDetail);
    const dispatch = useDispatch();
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        dispatch(getVideogameDetail(id));
    }, [dispatch, id])

    function handleDelete(id) {
        dispatch(deleteVideogame(id));
        alert("Your videogame was deleted correctly")
        navigate("/");
    }

    return (
        // <main className="flex flex-col lg:flex-row min-h-screen w-full my-auto items-center bg-shades-600 md:bg-shades-600/90">
        //     <div className="-z-10 invisible md:visible absolute w-full h-full">
        //         <img className="w-full h-full object-cover"
        //             src={videogameDetail.img}
        //             alt={`${videogameDetail.name} thumbnail`} />
        //     </div>
        //     <section className="flex lg:flex-col lg:basis-6/12 p-8">
        //         <div className="flex flex-col">
        //             <h4 className="text-sm text-start tracking-widest">{videogameDetail.released}</h4>
        //             <h1 className="py-4 font-bold text-2xl md:text-3xl lg:text-4xl text-palette-900 uppercase">{videogameDetail.name}</h1>
        //             <h2 className="font-thin text-lg md:text-xl">{videogameDetail.genres}</h2>
        //             <p className="py-4 md:text-sm" dangerouslySetInnerHTML={{ __html: videogameDetail.description }} />
        //             {typeof videogameDetail.id !== "number"
        //                 ? <button onClick={() => handleDelete(id)}>Delete videogame</button>
        //                 : null
        //             }
        //         </div>
        //     </section>
        //     <section className="flex flex-col lg:basis-6/12 p-8 self-center">
        //         <h4 className="z-10 w-fit -mb-12 mr-4 px-2 py-1 self-end font-bold text-sm -lg bg-palette-100">{videogameDetail.rating}</h4>
        //         <div className="w-full overflow-hidden -xl mb-4 shadow-lg shadow-shades-800">
        //             <img className="w-full object-cover"
        //                 src={videogameDetail.img}
        //                 alt={`${videogameDetail.name} thumbnail`} />
        //         </div>
        //         <p className="uppercase">{videogameDetail.ratings}</p>
        //         <h3 className="font-thin">Available in {videogameDetail.platforms}</h3>
        //     </section>
        // </main>
        <main className="space-y-10 w-full h-auto p-10 bg-slate-900">
            <h1>{videogameDetail.name}</h1>
            <p>{videogameDetail.description}</p>
            <div className="flex flex-wrap gap-4">
                {videogameDetail.tags?.map(t => {
                    return <p className=" bg-slate-600 py-1 px-2 text-sm">{t}</p>
                })}
            </div>
            <div>
                <img src={videogameDetail.img} alt="" />
            </div>
            <p>{videogameDetail.released}</p>
            <div className="flex flex-wrap gap-4">
                {videogameDetail.platforms?.map(t => {
                    return <p>{t}</p>
                })}
            </div>
            <div className="flex flex-wrap gap-4">
                {videogameDetail.genres?.map(t => {
                    return <p>{t}</p>
                })}
            </div>
            <p>{videogameDetail.rating}</p>
            <p>{videogameDetail.esrbRating}</p>
            <p>{videogameDetail.metacritic}</p>
            <p>{videogameDetail.metacriticURL}</p>
            <div className="flex flex-wrap gap-4">
                {videogameDetail.developedBy?.map(d => {
                    return <p>{d}</p>
                })}
            </div>
            <p>{videogameDetail.website}</p>
        </main>
    )
}