<template>
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
		<AppAlert :items="alerts" />
	</div>
</template>

<script setup>
import { getPostById, updatePost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import AppAlert from '@/components/AppAlert.vue';
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
		vAlert(error.message);
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
		// router.push(`/posts/${id}`);
		vAlert('수정이 완료되었습니다!', 'success');
	} catch (err) {
		console.error(err);
		vAlert(err.message);
	}
};

const router = useRouter();
const goPage = route => {
	router.push(route);
};

const alerts = ref([]);

const vAlert = (message, type = 'error') => {
	alerts.value.push({ message, type });
	setTimeout(() => {
		alerts.value.shift();
	}, 2000);
};
</script>

<style lang="scss" scoped></style>
