import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import Card from '../Card/Card'
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../../actions/products';
import Navbar from '../Navbar/Navbar'
import Product from "./Product/Product";


const AllProducts = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)

  const [filteredItems, setFilteredItems] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("all"); // Default: All
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    dispatch(getProducts())
  },[])

  const filterItems = (category) => {

    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
  };

  const showAll = () => {
    setFilteredItems(products);
    setSelectedCategory("all");
  };

  const handleSortChange = (option) => {
    setSortOption(option);

    // Logic for sorting based on the selected option
    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        // Do nothing for the "default" case
        break;
    }

    setFilteredItems(sortedItems);
  };

  return (
    <>
    <Navbar />
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12">
      {/* products card */}
      <div>

        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 mt-5 flex-wrap">
            <button
              onClick={showAll}
              className={selectedCategory === "all" ? "active" : ""}
            >
              All Products
            </button>
            <button
              onClick={() => filterItems("Eye")}
              className={selectedCategory === "Eye" ? "active" : ""}
            >
              Eye
            </button>
            <button
              onClick={() => filterItems("Lip")}
              className={selectedCategory === "Lip" ? "active" : ""}
            >
              Lip
            </button>
            <button
              onClick={() => filterItems("Face")}
              className={selectedCategory === "Face" ? "active" : ""}
            >
              Face
            </button>
          </div>

          <div className="flex justify-end mb-5 rounded-sm">
            <div className="bg-black mt-24 p-2 ">
              <FaFilter className="text-white h-4 w-4" />
            </div>
            <select
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="bg-black text-white mt-24 rounded-sm"
            >
              <option value="default"> Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>

        {/* product card */}
        <Card filteredItems={filteredItems}/>
      </div>
    </div>
    </>
  );
};
export default AllProducts