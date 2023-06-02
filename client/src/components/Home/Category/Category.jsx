import "./Category.scss";
// import cat1 from "../../../assets/category/cat-1.jpg";
// import cat2 from "../../../assets/category/cat-2.jpg";
// import cat3 from "../../../assets/category/cat-3.jpg";
// import cat4 from "../../../assets/category/cat-4.jpg";

import {useNavigate} from 'react-router-dom'

const Category = ({ categories }) => {
    // console.log(categories);

    const navigate = useNavigate();

  return (
    <div className="shop-by-category">
      <div className="categories">

        
        {categories?.data?.map((item) => (
            
          <div key={item.id} className="category" onClick={()=> navigate(`/category/${item.id}`)}>
            <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="" />
          </div>
        ))}

        {/* <div className="category">
                <img src={cat2} alt="" />
            </div>
            <div className="category">
                <img src={cat3} alt="" />
            </div>
            <div className="category">
                <img src={cat4} alt="" />
            </div> */}
      </div>
    </div>
  );
};

export default Category;
