import fetchWrapper from "@/common/fetchWrapper";

const BASE_URL="https://dummyjson.com";

export const getProducts = async (searchValue?:string) => {
    let query="?skip=5&limit=10";
    if (searchValue && searchValue.trim() !== "") {
      query=`search?q=${searchValue}`;
    }
    return await fetchWrapper.get(`${BASE_URL}/products/${query}`);
  };


