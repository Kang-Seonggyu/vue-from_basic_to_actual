import axios from 'axios';

export const getPosts = () => {
	return axios.get('http://localhost:4000/posts');
};

export const getPostById = id => {
	return axios.get(`http://localhost:4000/posts/${id}`);
};

export const createPost = data => {
	return axios.post('http://localhost:4000/posts', data);
};

export const updatePost = (id, data) => {
	return axios.put(`http://localhost:4000/posts/${id}`, data);
};

export const deletePost = id => {
	return axios.delete(`http://localhost:4000/posts/${id}`);
};
