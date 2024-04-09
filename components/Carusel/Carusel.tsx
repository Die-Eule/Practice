"use client"
import { Image } from "@nextui-org/react";
import { Component } from "react";
import { Carousel } from "react-responsive-carousel";


const createCarouselItemImage = (index: number, options = {}) => (
    <div key={index}>
        <Image src={`/watch${index}.png`} alt={"lot" + index} />
    </div>
);

const baseChildren = <div>{[1, 2, 3, 4, 5].map(createCarouselItemImage)}</div>;


export class ExternalControlledCarousel extends Component<{}, { currentSlide: number; autoPlay: boolean }> {
    constructor(props: any) {
        super(props);

        this.state = {
            currentSlide: 0,
            autoPlay: true,
        };
    }

    next = () => {
        this.setState((state) => ({
            currentSlide: state.currentSlide + 1,
        }));
    };

    prev = () => {
        this.setState((state) => ({
            currentSlide: state.currentSlide - 1,
        }));
    };

    changeAutoPlay = () => {
        this.setState((state) => ({
            autoPlay: !state.autoPlay,
        }));
    };

    updateCurrentSlide = (index: number) => {
        const { currentSlide } = this.state;

        if (currentSlide !== index) {
            this.setState({
                currentSlide: index,
            });
        }
    };

    render() {
        const buttonStyle = { fontSize: 20, padding: '5px 20px', margin: '5px 0px' };
        const containerStyle = { margin: '5px 0 20px' };
        return (
            <div>
                <div style={containerStyle}>
                    <p>External slide value: {this.state.currentSlide}</p>
                    <button onClick={this.prev} style={buttonStyle}>
                        Prev
                    </button>
                    <button onClick={this.next} style={buttonStyle}>
                        Next
                    </button>
                    <button onClick={this.changeAutoPlay} style={buttonStyle}>
                        Toggle Autoplay ({this.state.autoPlay ? 'true' : 'false'})
                    </button>
                </div>
                <Carousel
                    autoPlay={this.state.autoPlay}
                    selectedItem={this.state.currentSlide}
                    onChange={this.updateCurrentSlide}
                    {...this.props}
                >
                    {baseChildren.props.children}
                </Carousel>
            </div>
        );
    }
}
