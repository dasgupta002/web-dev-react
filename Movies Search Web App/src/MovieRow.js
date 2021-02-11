import React from 'react'
import './movie.css';

class MovieRow extends React.Component {
  viewMovie () {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

  render() {
    return <table key = { this.props.movie.id }>
    <tbody>
      <tr className = "row">
        <td>
          <img className = "image" alt = "poster" width = "120" src= { this.props.movie.poster_src }/>
        </td>
        <td className = "data">
          <h3 className = "head">{ this.props.movie.title }</h3>
          <p className = "text">{ this.props.movie.overview }</p>
          <input className = "input" type = "button" onClick = { this.viewMovie.bind(this) } value = "View"/>
        </td>
      </tr>
    </tbody>
  </table>
  }
}

export default MovieRow