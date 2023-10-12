import React from 'react'
import Card from './Card';
import image1 from "../assets/carro.jpg.jfif"
import image2 from "../assets/java.jpg.jfif"
import image3 from "../assets/moto.jpg.jfif"

const cards = [
{
  id: 1,
  title: 'Persona_1',
  image: image1,
  instructor: "Brayan Raul Gonzalez Barrueta"
},
{
  id: 2, 
  title: 'Administrador',
  image: image2,
  instructor: "Fernando Baez Valencia"  
},
{
  id: 3,
  title: 'Subadministrador',
  image: image3,
  instructor: "Maira Jocelyn Navarro Garcia"
}
]


export default function Cards() {
  console.log ()
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className='row'>
        {
          cards.map(c =>(
            <div className="col-md-4" key={cards.id}>
              <Card
              key = {c.id}
              id = {c.id}
              title = {c.title}
              image = {c.image}
              instructor = {c.instructor}
              />
            </div>
          ))
        }
      </div>
    </div>  
  )
  
}