import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import animationData from '../../assets/lottie/error.json'; // Lottie animation file

const Error = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <motion.div
            className="flex items-center justify-center min-h-screen bg-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-lg mx-auto sm:max-w-md">
                <Lottie options={defaultOptions} height={250} width={250} />
                <h1 className="text-5xl font-bold text-red-600 mt-4">404</h1>
                <p className="text-xl text-gray-700 mt-4">
                    Sorry! The page you're looking for cannot be found.
                </p>
            </div>
        </motion.div>
    );
};

export default Error;
