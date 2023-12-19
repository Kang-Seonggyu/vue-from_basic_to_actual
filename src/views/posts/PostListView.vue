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
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { getPosts } from '@/api/posts';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const posts = ref([]);

const fecthPosts = () => {
	posts.value = getPosts();
};
fecthPosts();

const goDetail = id => {
	router.push(`/posts/${id}`);
};
</script>

<style lang="scss" scoped></style>
