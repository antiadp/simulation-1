import React, { Component } from 'react';
import axios from 'axios';
import './form.css';

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            img: ''
        }
    }

    render () {
        return (
            <div>
                <h1>This is a Form</h1>
                <p>Image URL:</p>
                    <input value={this.state.img} onChange={
                        e => this.imageInput(e.target.value)} />
                <p>Product Name:</p>
                    <input value={this.state.name} onChange={
                        e => this.nameInput(e.target.value)} />
                <p>Price:</p>
                    <input value={this.state.price} onChange={
                        e => this.numberInput(e.target.value)} />
      
        
            </div>
        )
    }
}