import React, { useEffect, useState } from 'react';
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import MainContext from "./components/context/MainContext";
import BrandsData from "./brand.json";
import Copied from './components/Copied';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Collection from './components/Collection';
import { forceCheck } from 'react-lazyload';

const App = () => {
    const brandsArray = Object.values(BrandsData);
    const [brands, setBrands] = useState(brandsArray)
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [copied, setCopied] = useState(false);
    const [search, setSearch] = useState("")

    useEffect(() => { }, [selectedBrands])
    const data = {
        brands, selectedBrands, setSelectedBrands, setCopied, search, setSearch,
    }
    useEffect(() => {

        const timeout = setTimeout(() => {
            setCopied(false)
        }, 500);

        return () => {
            clearTimeout(timeout)
        }

    }, [copied])

    useEffect(() => {
        setBrands(brandsArray.filter(brand => brand.title.toLocaleLowerCase().includes(search)))

    }, [search])
    useEffect(() => {
        forceCheck();
    }, [brands])

    return (
        <Router>
            <MainContext.Provider value={data}>
                {copied && <Copied color={copied} />}
                <Sidebar />
                <Switch>
                    <Route path="/" exact component={Content} />
                    <Route path="/collection/:slugs" component={Collection} />

                </Switch>


            </MainContext.Provider>
        </Router>
    )
}

export default App;
