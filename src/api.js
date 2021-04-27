export const getCategories = async () => {
  const response = await fetch(`http://testtask.sebbia.com/v1/news/categories`);

  return response.json();
};

export const getNewsList = async (id) => {
  const response = await fetch(
    `http://testtask.sebbia.com/v1/news/categories/${id}/news`
  );

  return response.json();
};

export const getNewsDetails = async (id) => {
  const response = await fetch(
    `http://testtask.sebbia.com/v1/news/details?id=${id}`
  );

  return response.json();
};
