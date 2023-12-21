<template>
	<div>
		<h2>게시글 등록</h2>
		<hr class="my-4" />
		<form @submit.prevent="save">
			<div class="mb-3">
				<label for="postTitle" class="form-label">제목</label>
				<input
					type="text"
					v-model="form.title"
					class="form-control"
					id="postTitle"
				/>
			</div>
			<div class="mb-3">
				<label for="postContent" class="form-label">내용</label>
				<textarea
					class="form-control"
					v-model="form.content"
					id="postContent"
				></textarea>
			</div>
			<div>
				<button
					type="button"
					class="btn btn-outline-dark me-2"
					@click="goPage('/posts')"
				>
					목록
				</button>
				<button type="submit" class="btn btn-primary">저장</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { createPost } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = ref({
	title: null,
	content: null,
});
const save = () => {
	try {
		createPost({
			...form.value,
			createdAt: Date.now(),
		});
		router.push('/posts');
	} catch (err) {
		console.error(err);
	}
};
const goPage = route => router.push(route);
</script>

<style lang="scss" scoped></style>
