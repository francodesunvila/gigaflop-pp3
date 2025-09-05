import React from 'react'

const CardProductos = ({item}) => {
    const estilosCard = {
        width: '300px',
        marginright: '20px',
    }
    const estilosImg = {
        height: '220px',
      
    }
  return (
    <div className='row mb-4  justify-content-center d-flex'>
        <div className='card' style={estilosCard} >
            <img className="card-img " style={estilosImg} src={item.image} alt="img" />
            <div className="card-body">
                <h5 className="card-title text-primary">{item.name}</h5>
                <hr/>
                <p>
                    <span className='fw-bold'> Especies: </span>{item.species}
                </p>
                <p>
                    <span className='fw-bold'> Localizacion: </span>{item.location.name}   
                </p>
                <button className="btn btn-primary">Agregar al carrito</button>
            </div>
        </div>



      
    </div>
  )
}

export default CardProductos
