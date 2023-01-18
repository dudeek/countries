export const getCountriesList = () => {
  return fetch("https://restcountries.com/v2/all")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};
