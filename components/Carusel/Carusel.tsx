"use client"
import { Image } from "@nextui-org/react";
import { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const createCarouselItemImage = (path: string, index: number) => (
    <div key={index}>
        <Image src={path} alt={"lot" + index} />
    </div>
);


export class ExternalControlledCarousel extends Component<{slideList: string[]}, { currentSlide: number; autoPlay: boolean; slideList: string[] }> {
    constructor(props: any) {
        super(props);

        this.state = {
            currentSlide: 0,
            autoPlay: false,
            slideList: props.slideList,
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

    updateCurrentSlide = (index: number) => {
        const { currentSlide } = this.state;

        if (currentSlide !== index) {
            this.setState({
                currentSlide: index,
            });
        }
    };

    render() {
        const containerStyle = { margin: '5px 0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'};
        const baseChildren = <div>{this.state.slideList.map(createCarouselItemImage)}</div>;
        return (
            <div>
                <div className="bg-content1">
                    <Carousel
                        showThumbs={false}
                        showArrows={false}
                        showStatus={false}
                        showIndicators={false}
                        autoPlay={this.state.autoPlay}
                        infiniteLoop={true}
                        selectedItem={this.state.currentSlide}
                        onChange={this.updateCurrentSlide}
                        {...this.props}
                    >
                        {baseChildren.props.children}
                    </Carousel>
                </div>
                <div style={containerStyle}>
                    <div>
                        <button onClick={this.prev} >
                            <Image src="/left_arrow.svg" alt="Prev"></Image>
                        </button>
                        <button onClick={this.next} >
                            <Image src="/right_arrow.svg" alt="Next"></Image>
                        </button>
                    </div>
                    <p>{`${this.state.currentSlide + 1}`.padStart(2, '0')} ---- {`${this.state.slideList.length}`.padStart(2, '0')}</p>
                </div>
            </div>
        );
    }
}
