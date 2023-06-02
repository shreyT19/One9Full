import useFetch from "../../../hooks/useFetch";
import Products from "../../Products/Products";

const RelatedProducts = ({productID,categoryID}) => {
    const {data}=useFetch(`/api/products?populate=*&filters[id][$ne]=${productID}&filters[categories][id]
    =${categoryID}&pagination[start]=0&pagination[limit]=4`)
    return <div>
        <Products headingText = "Related Products" products={data}/>
    </div>;
};

export default RelatedProducts;
