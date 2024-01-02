const getReq = async (url: string) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, requestOptions);
  return response.json();
};

const patchReq = async (url: string, data: any) => {
  const requestOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(url, requestOptions);
  return response.json();
}

const postReq = async (url: string, data: any) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(url, requestOptions);
  return response.json();
};

const putReq = async (url: string, body: any) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  const response = await fetch(url, requestOptions);
  return response.json();
};

const deleteReq = async (url: string) => {
  const requestOptions = {
    method: "DELETE",
  };
  const response = await fetch(url, requestOptions);
  return response.json();

};

const formPost = async (url: string, formData: FormData) => {
  const requestOptions = {
    method: "POST",
    body: formData,
  };
}

const fetchWrapper = {
  get: getReq,
  post: postReq,
  put: putReq,
  delete: deleteReq,
  formPost: formPost,
  patch: patchReq,
};
export default fetchWrapper;