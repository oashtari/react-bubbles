import React, { useState } from "react";
import axios from "axios";
import axiosWithAuth from '../utils/axiosWithAuth';

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  // console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?

    // const updatedColor = color;

    setTimeout(() => {
      axiosWithAuth()
        .put(`/colors/${colorToEdit.id}`, colorToEdit)
        .then(res => {
          console.log('did the color edit', res.data);
          // props.history.push('/colors')
          // console.log('color list', colorList)
          // dispatch({ type: LOAD_FRIENDS, payload: res.data })
        })
        .catch(err => {
          console.log('colors did not update', err)
          // dispatch({ type: ERROR_FRIENDS, payload: 'could not get your friends' })
        })
    }, 100)
  }



  const deleteColor = color => {
    // make a delete request to delete this color
    axiosWithAuth()
      .delete(`/colors/${color.id}`)
      .then(res => console.log('delete worked', res))
      .catch(err => console.log('delete did not work', err))
  };

  // deleteMovie = () => {
  //   axios.delete(`http://localhost:5000/api/movies/${this.state.movie.id}`)
  //     .then(res => this.props.history.push("/"))
  //     .catch(error => console.log(error));
  // }


  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                e.stopPropagation();
                deleteColor(color)
              }
              }>
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;

