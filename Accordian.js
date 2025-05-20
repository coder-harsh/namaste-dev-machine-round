import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Accordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleExpand = (index) => {
        setActiveIndex(activeIndex == index ? null : index)
    }
    return !items || items.length == 0 ? "No Items available."
        : (
            <div className="accordian-container">
                {
                    items.map((item, index) => {
                        return <div key={item.index} className="accordian-item">
                            <button className="accordian-title" onClick={() => handleExpand(index)}>
                                <span>
                                    {item.title}
                                </span>
                                {
                                    activeIndex == index ? <FaChevronUp /> : <FaChevronDown />
                                }
                            </button>
                            {
                                activeIndex === index && <div className="accordian-content">
                                    {
                                        item.content
                                    }
                                </div>
                            }
                        </div>
                    })
                }
            </div>
        );
}

export default Accordion;
