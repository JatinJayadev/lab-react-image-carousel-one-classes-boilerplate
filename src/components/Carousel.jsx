import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor() {
        super()

        this.state = {
            id: 0
        }

    }

    handleBackClick = () => {
        if (this.state.id === 0) {
            this.setState({
                id: 2
            })
        }
        else {
            this.setState({
                id: this.state.id - 1
            })
        }
    }

    handleForwardClick = () => {
        if (this.state.id === 2) {
            this.setState({
                id: 0
            })
        }
        else {
            this.setState({
                id: this.state.id + 1
            })
        }
    }

    render() {
        const data = images[this.state.id]
        return (
            <div className="container">

                <div className="arrows">
                    <ArrowBackIosIcon onClick={this.handleBackClick} />
                </div>

                <div>
                    <div>
                        <h2>{data.title}</h2>
                        <h3>{data.subtitle}</h3>
                        <img src={data.img} alt="" />
                    </div>
                </div>

                <div  className="arrows" >
                    <ArrowForwardIosIcon onClick={this.handleForwardClick} />
                </div>

            </div>
        )
    }

}

export default Carousel;