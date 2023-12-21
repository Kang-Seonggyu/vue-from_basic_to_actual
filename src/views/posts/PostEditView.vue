<template>
	<div>
		<div>
			<h2>게시글 수정</h2>
			<hr class="my-4" />
			<form @submit.prevent="edit">
				<div class="mb-3">
					<label for="postTitle" class="form-label">제목</label>
					<input
						v-model="form.title"
						type="text"
						class="form-control"
						id="postTitle"
					/>
				</div>
				<div class="mb-3">
					<label for="postContent" class="form-label">내용</label>
					<textarea
						v-model="form.content"
						class="form-control"
						id="postContent"
					></textarea>
				</div>
				<div>
					<button
						type="button"
						class="btn btn-outline-danger me-2"
						@click="goPage(`/posts/${$route.params.id}`)"
					>
						취소
					</button>
					<button type="submit" class="btn btn-primary">수정</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
import { getPostById, updatePost } from '@/api/posts';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const id = route.params.id;

const form = ref({ title: null, content: null });
const fetchPost = async () => {
	try {
		const { data } = await getPostById(id);
		setForm(data);
	} catch (error) {
		console.error(error);
	}
};
const setForm = ({ title, content }) => {
	form.value.title = title;
	form.value.content = content;
};
fetchPost();

const edit = async () => {
	try {
		await updatePost(id, { ...form.value });
		router.push(`/posts/${id}`);
	} catch (err) {
		console.error(err);
	}
};

const router = useRouter();
const goPage = route => {
	router.push(route);
};
</script>

<style lang="scss" scoped></style>
