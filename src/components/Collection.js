import React, { useContext, useEffect } from 'react';
import { useParams, Link, useHistory } from "react-router-dom";
import MainContext from './context/MainContext';
import LazyLoad from 'react-lazyload';
import Download from './Download';
import Brand from './Brand';
import { GrLinkPrevious } from 'react-icons/gr';
import Loader from './Loader';

const Collection = () => {
    const { slugs } = useParams();
    const { setSelectedBrands, selectedBrands, brands } = useContext(MainContext)
    const history = useHistory();

    const backBrands = () => {
        setSelectedBrands([])
        history.push("/")
    }

    useEffect(() => {
        setSelectedBrands(slugs.split(","))
    }, [slugs])

    return (
        <main className="content">
            <header className="content-header">
                <Link to="/" onClick={backBrands}><a className="back-btn">
                    <GrLinkPrevious />
                    All brands
                </a></Link>
                {selectedBrands.length !== 0 && <Download />}
            </header>
            <section className="brands">

                {selectedBrands.map((slug) => {
                    let brand = brands.find(brand => brand.slug === slug)
                    return (
                        <LazyLoad key={brand.slug} overflow={true} once={true} placeholder={<Loader />} >
                            <Brand brand={brand} />
                        </LazyLoad>
                    )
                })}

            </section>

        </main>
    )
}

export default Collection
