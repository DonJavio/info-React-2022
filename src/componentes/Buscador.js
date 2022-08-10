import React, { useState, useEffect } from 'react'

const Buscador = () => {
  //setear los hooks useState
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")

  //función para traer los datos de la API
  const URL = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=ea4a2f8071ce425faaa19426834804de&pageSize=10&language=es'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    //console.log(data)
    setUsers(data)
  }
  //función de búsqueda
  const searcher = (e) => {
    setSearch(e.target.value)
  }
  //metodo de filtrado 1 
  /*  let results = []
  if(!search)
  {
      results = users
  }else{
       results = users.filter( (dato) =>
       dato.name.toLowerCase().includes(search.toLocaleLowerCase())
   )
  } */

  //metodo de filtrado 2   
  const results = !search ? users : users.filter((dato) => dato.name.toLowerCase().includes(search.toLocaleLowerCase()))

  useEffect(() => {
    showData()
  }, [])

  //renderizamos la vista
  return (
    <div>
      <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control' />
      <table className='table table-striped table-hover mt-5 shadow-lg'>
        <thead>
          <tr className='bg-curso text-red'>
            <th>NAME</th>
            <th>USER NAME</th>
          </tr>
        </thead>
        <tbody>
          {results.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Buscador;