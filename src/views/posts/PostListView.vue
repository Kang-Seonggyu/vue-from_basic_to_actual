<template>
	<h2>게시글 목록</h2>
	<hr class="my-4" />

	<PostFilter v-model:title="params.title_like" v-model:limit="params._limit" />
	<hr class="my-4" />

	<AppGrid :items="posts">
		<template v-slot="{ item }">
			<PostItem
				:title="item.title"
				:content="item.content"
				:created-at="item.createdAt"
				@click="goDetail(item.id)"
				@modal="openModal(item)"
			/>
		</template>
	</AppGrid>

	<AppPagination
		:currentPage="params._page"
		:page-count="pageCount"
		@page="
			page => {
				params._page = page;
			}
		"
	/>

	<PostModal
		v-model="show"
		:title="modal.title"
		:content="modal.content"
		:created-at="modal.createdAt"
	/>

	<template v-if="posts && posts.length > 0">
		<hr class="my-4" />
		<AppCard>
			<PostDetailView :id="posts[0].id" />
		</AppCard>
	</template>
</template>

<script setup>
import PostFilter from '@/components/posts/PostFilter.vue';
import PostItem from '@/components/posts/PostItem.vue';
import PostModal from '@/components/posts/PostModal.vue';
import PostDetailView from './PostDetailView.vue';
import AppCard from '@/components/AppCard.vue';
import AppPagination from '@/components/AppPagination.vue';
import AppGrid from '@/components/AppGrid.vue';
import { getPosts } from '@/api/posts';
import { useRouter } from 'vue-router';
import { computed, ref, watchEffect } from 'vue';

const router = useRouter();
const posts = ref([]);

const params = ref({
	_sort: 'createdAt',
	_order: 'desc',
	_page: 1,
	_limit: 3,
	title_like: '',
});

// pagination
const totalCount = ref(0);
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
);

const fecthPosts = async () => {
	try {
		const { data, headers } = await getPosts(params.value);
		posts.value = data;
		totalCount.value = headers['x-total-count'];
	} catch (err) {
		console.error(err);
	}
};
watchEffect(fecthPosts);
// fecthPosts();

const goDetail = id => {
	router.push({ name: 'PostDetail', params: { id } });
};

// modal
const show = ref(false);
const modal = ref({
	title: '',
	content: '',
	createdAt: '',
});

const openModal = ({ title, content, createdAt }) => {
	show.value = true;
	modal.value = {
		title,
		content,
		createdAt,
	};
};
</script>

<style lang="scss" scoped></style>
