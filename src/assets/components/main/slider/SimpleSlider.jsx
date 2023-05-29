import {Box, VStack, HStack, Text, Image} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import {Container} from "react-bootstrap";
import lox from './../../../image/first.png'

const Slider = dynamic(() => import("react-slick").then((m) => m.default), {
    ssr: false
});

const Slide = ({ title, img }) => {
    return (
        <HStack
            h="200px"
            bg="red"
            border="cyan.700"
            alignContent="center"
            justifyContent="center"
            mx="4"
        >
            <Image color="white" fontWeight="bold" src={img} />
        </HStack>
    );
};

export default function SimpleSlider() {
    const slickSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 3
    };
    return (
        <Container>
            <div className="App">
            <Box m="20">
                <Box
                    sx={{
                        ".slick-dots": {
                            transform: "translateY(1em)"
                        },
                        ".slick-dots li button": {
                            _before: {
                                transition: "0.2s",
                                content: "''",
                                borderRadius: "100%",
                                background: "red"
                            }
                        },
                        ".slick-arrow": {
                            backgroundColor: "red",
                            color: "white",
                            w: "30px",
                            h: "50px",
                            transition: "0.2s",
                            _hover: {
                                backgroundColor: "red",
                                color: "white"
                            },
                            _focus: {
                                backgroundColor: "red",
                                color: "white"
                            },
                            _before: {
                                transition: "0.2s"
                            }
                        },
                        ".slick-prev": {
                            left: "-40px",
                            _before: {
                                content: '"◀"'
                            }
                        },
                        ".slick-next": {
                            right: "-40px",
                            _before: {
                                content: '"▶"'
                            }
                        }
                    }}
                >
                    <Slider {...slickSettings}>
                        <Slide img={lox}/>
                        <Slide title={"スライド２"} />
                        <Slide title={"スライド３"} />
                        <Slide title={"スライド４"} />
                        <Slide title={"スライド５"} />
                    </Slider>
                </Box>
            </Box>
        </div>
        </Container>
    );
}
