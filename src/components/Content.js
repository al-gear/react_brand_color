import React, { useContext } from 'react';
import Search from './Search';
import Brand from './Brand';
import MainContext from "./context/MainContext";
import LazyLoad from 'react-lazyload';
import Download from './Download';
import Loader from './Loader';


const Content = () => {
    const { brands, selectedBrands } = useContext(MainContext);


    return (
        <main className="content">
            <header className="content-header">
                <Search />
                {selectedBrands.length !== 0 && <Download />}
            </header>
            <section className="brands">

                {brands.map((brand) => (
                    <LazyLoad key={brand.slug} overflow={true} once={true} placeholder={<Loader />} >
                        <Brand brand={brand} />
                    </LazyLoad>
                ))}

            </section>

        </main>
    )
}

export default Content
