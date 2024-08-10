const BASE_URL = process.env.REACT_APP_API_URL;

const request = async (url, options = {}) => {
    const response = await fetch(`${BASE_URL}${url}`, options);

    if (!response.ok) {
        const errorData = await response.json();

        throw new Error(errorData.message || "API request failed");
    }

    return response.json();
};

export const get = path => {
    return request(path, {
        method: "GET"
    });
};

export const post = (path, data) => {
    return request(path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
};
