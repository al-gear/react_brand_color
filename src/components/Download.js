import React, { useContext, useEffect, useState } from 'react'
import MainContext from './context/MainContext';
import { GrLink, GrDownload, GrClose } from 'react-icons/gr';
import { breakList } from 'prelude-ls';
import { Link } from 'react-router-dom';

const Download = () => {
    const { selectedBrands, brands, setSelectedBrands } = useContext(MainContext);
    const [downloadUrl, setDownloadUrl] = useState("")
    const [cssMethod, setCssMethod] = useState("css");




    function getLink() {
        prompt("Here is the URL to share", `http://localhost:3000/collection/${selectedBrands.join(",")}`)
    }

    useEffect(() => {
        if (selectedBrands.length) {
            let output = "";
            switch (cssMethod) {
                case "css":
                    output += ":root{\n"
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color, key) => {
                            output += `--${slug}-${key}: #${color};\n`
                        })
                    })
                    output += "}"
                    break;
                case "scss":

                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color, key) => {
                            output += `\$${slug}-${key}: #${color};\n`
                        })
                    })
                    break;

                case "less":

                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color, key) => {
                            output += `@${slug}-${key}: #${color};\n`
                        })
                    })


                    break;
            };




            const blob = new Blob([output]);
            const url = URL.createObjectURL(blob)
            setDownloadUrl(url)
            return () => {
                URL.revokeObjectURL(url);
                setDownloadUrl("")
            }

        }
    }, [selectedBrands, cssMethod])

    return (
        <div className="download">
            <div className="actions">
                <select onChange={e => setCssMethod(e.target.value)} >
                    <option value="css">CSS</option>
                    <option value="scss">SCSS</option>
                    <option value="less">LESS</option>
                </select>
                <a download={`TNCcolors.${cssMethod}`} href={downloadUrl}>
                    <GrDownload />
                </a>

                <Link to={`/collection/${selectedBrands.join(",")}`}>
                    <GrLink />
                </Link>
            </div>
            <div className="selected" onClick={() => setSelectedBrands([])}>
                <GrClose />
                {selectedBrands.length} brands collected

            </div>


        </div>
    )
}

export default Download
