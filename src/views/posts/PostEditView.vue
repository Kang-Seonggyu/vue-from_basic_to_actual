<template>
	<div>
		<div>
			<h2>게시글 수정</h2>
			<hr class="my-4" />
			<PostForm
				v-model:title="form.title"
				v-model:content="form.content"
				@submit.prevent="edit"
			>
				<template #actions>
					<button
						type="button"
						class="btn btn-outline-danger me-2"
						@click="goPage(`/posts/${$route.params.id}`)"
					>
						취소
					</button>
					<button type="submit" class="btn btn-primary">수정</button>
				</template>
			</PostForm>
		</div>
	</div>
</template>

<script setup>
import { getPostById, updatePost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
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
