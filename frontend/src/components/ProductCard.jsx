import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const ProductCard = () => {
    return (
        <Card className="w-96">
            <CardHeader shadow={false} floated={false} className="h-96">
                <img
                    src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>

                <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-gray-900">Apple AirPods</h4>
                </div>

                <div className="mb-4">
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75"
                    >
                        With plenty of talk and listen time, voice-activated Siri access, and
                        an available wireless charging case.
                    </Typography>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalf />
                    </div>
                    <Typography color="blue-gray" className="font-medium">
                        $95.00
                    </Typography>
                </div>


            </CardBody>
            <CardFooter className="pt-0">
                <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                >
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
}

export default ProductCard;