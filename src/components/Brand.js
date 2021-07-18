import React, { useContext } from 'react'
import { getContrast } from "../helpers";
import MainContext from "./context/MainContext";
import Clipboard from "react-clipboard.js";


const Brand = ({ brand }) => {
    const { setSelectedBrands, selectedBrands, setCopied } = useContext(MainContext);

    const toggleSelected = () => {
        if (selectedBrands.includes(brand.slug)) {
            setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
        } else {
            setSelectedBrands([...selectedBrands, brand.slug])
        }
    }
    const setColor = (color) => {
        setCopied(color)
    }
    return (
        <div className={`brand ${selectedBrands.includes(brand.slug) ? "selected" : ""}`}>
            <h5 onClick={toggleSelected}>{brand.title}</h5>
            <div className="brand-colors">
                {brand.colors.map(color => (
                    <Clipboard data-clipboard-text={color} onSuccess={() => setColor(color)} component="span" style={{ "--bgColor": `#${color}`, "--textColor": `${getContrast(color)}` }}>
                        {color}
                    </Clipboard>

                ))}
            </div>
        </div>
    )
}

export default Brand
