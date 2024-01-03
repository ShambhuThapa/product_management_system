import fetchWrapper from "@/common/fetchWrapper";

const BASE_URL="https://dummyjson.com";

export const getProducts = async (searchValue?:string,category_name?:string) => {
    let query="?skip=5&limit=10";
    if (searchValue && searchValue.trim() !== "") {
      query=`search?q=${searchValue}`;
    }
    if(category_name && category_name!==null){
      query=`category/${category_name}`;
    }

    return await fetchWrapper.get(`${BASE_URL}/products/${query}`);
  };

export const getProduct = async (product_id:number) => {
    return await fetchWrapper.get(`${BASE_URL}/products/${product_id}`);
};

export const getProductsCategory = async () => {
    return await fetchWrapper.get(`${BASE_URL}/products/categories`);
};
export const deleteProduct = async (product_id:number) => {
  return await fetchWrapper.delete(`${BASE_URL}/products/${product_id}`);
};


