import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import NewsList from "../components/NewsList";
import { getNewsList } from "../api";

const NewsListPage = () => {
  const { goBack } = useHistory();
  const { id } = useParams();

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await getNewsList(id);
      setList(data.list);
      setLoading(false);
    };
    getData();
  }, [id]);

  const newsListCheck = () =>
    !list.length ? (
      <h1>Упс! Новостей нет, но вы держитесь!</h1>
    ) : (
      <NewsList list={list} />
    );

  return (
    <>
      <button onClick={() => goBack()}>Go Back</button>
      {loading ? <div>Загрузка...</div> : newsListCheck()}
    </>
  );
};

export default NewsListPage;
