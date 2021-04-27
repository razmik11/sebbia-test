import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { getNewsDetails } from "../api";

import NewsDetails from "../components/NewsDetails";

const NewsDetailsPage = () => {
  const { goBack } = useHistory();
  const { id } = useParams();

  const [newsDetails, setNewsDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await getNewsDetails(id);
      setNewsDetails(data.news);
      setLoading(false);
    };
    getData();
  }, [id]);

  return (
    <>
      <button onClick={() => goBack()}>Go Back</button>
      {loading ? <div>Загрузка...</div> : <NewsDetails news={newsDetails} />}
    </>
  );
};

export default NewsDetailsPage;
