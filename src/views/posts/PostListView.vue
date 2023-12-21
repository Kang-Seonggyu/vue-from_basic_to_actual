<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<div class="row g-3">
			<div v-for="post in posts" :key="post.id" class="col-4">
				<PostItem
					:title="post.title"
					:content="post.content"
					:created-at="post.createdAt"
					@click="goDetail(post.id)"
				></PostItem>
			</div>
		</div>
	</div>
	<hr class="my-4" />
	<AppCard>
		<PostDetailView :id="1" />
	</AppCard>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from './PostDetailView.vue';
import AppCard from '@/components/AppCard.vue';
import { getPosts } from '@/api/posts';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const posts = ref([]);

const fecthPosts = async () => {
	try {
		const { data } = await getPosts();
		posts.value = data;
	} catch (err) {
		console.error(err);
	}
};
fecthPosts();

const goDetail = id => {
	router.push({ name: 'PostDetail', params: { id } });
};
</script>

<style lang="scss" scoped></style>
