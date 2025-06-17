'use client'
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Link from 'next/link';

const Sidebar = () => {
    const [minValue, setMinValue] = useState(75);
    const [maxValue, setMaxValue] = useState(300);
    const min = 0;
    const max = 500;

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxValue - 10);
        setMinValue(value);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minValue + 10);
        setMaxValue(value);
    };

    const colors = ["blue", "black", "red", "green", "yellow", "white"];
    const sizes = ["100ml", "200ml", "300ml", "400ml", "500ml", "600ml"];
    const categories = [
        "Shaving Machine(15)", "Men's Grooming(10)", "Hair Care(5)",
        "Beard Care(8)", "Skin Care(12)", "Body Care(6)"
    ];

    return (
        <div className='filter_sidebar'>
            <Form>
                <div className='inner_area'>
                    <h3><span>Categories</span> Products</h3>
                    <ul>
                        {categories.map((val, i) => (
                            <li key={i}><Link href="/">{val}</Link></li>
                        ))}
                    </ul>
                </div>

                <div className='inner_area'>
                    <h3><span>Blog</span> Filter</h3>
                    <div className='range_header'>
                        <Form.Control
                            type="text"
                            readOnly
                            value={`$${minValue} - $${maxValue}`}
                        />
                        <h6>Price range:</h6>
                    </div>

                    <div className="range_slider_wrapper">
                        <input
                            type="range"
                            min={min}
                            max={max}
                            value={minValue}
                            onChange={handleMinChange}
                            className="range_input"
                        />
                        <input
                            type="range"
                            min={min}
                            max={max}
                            value={maxValue}
                            onChange={handleMaxChange}
                            className="range_input"
                        />
                        <div className="slider_track">
                            <div
                                className="slider_range"
                                style={{
                                    left: `${(minValue / max) * 100}%`,
                                    width: `${((maxValue - minValue) / max) * 100}%`,
                                }}
                            ></div>
                        </div>
                    </div>
                </div>

                <div className='inner_area'>
                    <h3><span>Colors</span></h3>
                    {colors.map((val, i) => (
                        <Form.Check
                            key={i}
                            type="checkbox"
                            id={`colorCheck${i}`}
                            label={val}
                        />
                    ))}
                </div>

                <div className='inner_area'>
                    <h3><span>Sizes</span></h3>
                    {sizes.map((val, i) => (
                        <Form.Check
                            key={i}
                            type="checkbox"
                            id={`sizeCheck${i}`}
                            label={val}
                        />
                    ))}
                </div>
            </Form>

        </div>
    );
};

export default Sidebar;
