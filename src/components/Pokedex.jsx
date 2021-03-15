import React from 'react'
import Pokemon from './Pokemon'
import Pagination from './Pagination.jsx'

const Pokedex = (props) => {
    const { pokemons, page, setPage, total, loading } = props
    const lastPage = () => {
        const nextPage = Math.max(page -1, 0)
        setPage(nextPage)
    }
    const nextPage = () => {
        const nextPage = Math.min(page +1, total)
        setPage(nextPage)
    }

    return(
        <div>
            <div className="header">
                <h1>Lista de Pokemon</h1>
                <Pagination 
                    page={page + 1}
                    totalPages={total}
                    onLeftClick={lastPage}
                    onRightClick={nextPage}
                />
            </div>
            {loading 
            ?
            <div className="loading-img-container">
            <img src="https://www.bluechipexterminating.com/wp-content/uploads/2020/02/loading-gif-png-5.gif" alt="loading" className="loading-img"/>
            </div>
            :
            <div className="pokedex-grid">
                {pokemons.map((pokemon, index) => {
                    return(
                        <Pokemon pokemon={pokemon} key={pokemon.name} />
                        )
                    })}
            </div>
                }
        </div>
    )
} 

export default Pokedex