import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
       const {item , handleChange} = this.props 
        return (
            <div className="card card-body my-3">
                <form>
                    <div className="input-group input-group-lg mb-3">
                        <div className="input-grout-prepend">
                            <div className="input-group-text bg-primary text-white">
                            <i className="fas fa-keyboard fa-2x"></i>
                            </div>
                        </div>
                        <input
                         type="text"
                          className="form-control" 
                          placeholder="input here"
                          value = {item}
                          onChange = {handleChange}
                          />
                    </div>
                    <button type="submit" className="btn btn-block btn-primary">ADD</button>
                </form>
            </div>
        )
    }
}
