import React, { useEffect, useState } from "react";
import CategoriesList from "../components/CategoriesList/";
import { getCategories } from "../api";

const MainPage = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getCategories();
      setList(data.list);
    };
    getData();
  }, []);

  return <CategoriesList categories={list} />;
};

export default MainPage;
