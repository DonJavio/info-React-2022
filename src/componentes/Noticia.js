import React from 'react';

const Noticia = (props) => {
    
    const { url, source, title, urlToImage, description, publishedAt} = props.noticia;

    return(
        <div className="row">
            <div className='card flex-row'>
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                    <p className="card-title">{description}</p>
                    <p className="card-text">{source.name}</p>
                    <p className="card-date">{publishedAt}</p>
                    <a href={url} className="btn btn-primary" >Leer más</a>
                </div>
                <img src={urlToImage} alt={title} className="card-img-sm-right" style={{ height: '11rem', width: '11rem'}}/>
            </div>
        </div>
    )
}

export default Noticia;