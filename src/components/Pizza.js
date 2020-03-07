import React from "react"

const Pizza = (props) => {
  const isVeg = props.pizza.vegetarian ? "Yes" : "No"
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{isVeg}</td>
      <td><button onClick={event => props.clickHandler(props.pizza)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
