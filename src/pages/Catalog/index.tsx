import ProductCard from "components/ProductCard";
import SearchBtn from "components/SearchBtn/Index";

function Catalog() {
    return (
        <div className="container my-4">
            <div className="row">
                <div className="search-bar-card">
                    <div className="button-search-bar">
                        <SearchBtn />
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
            </div>
        </div>
    );
}

export default Catalog;