<template>
	<div>HomeView</div>
	<p>{{ $route.path }}</p>
	<p>{{ $route.name }}</p>
	<button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
	<hr class="my-4" />
	<AppGrid :items="items" v-slot="{ item }" col-class="col-3">
		<AppCard>{{ item }}</AppCard>
	</AppGrid>
</template>

<script setup>
import AppCard from '@/components/AppCard.vue';
import AppGrid from '@/components/AppGrid.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goAboutPage = () => {
	router.push('/about');
};

const items = ref(['Apple', 'Strawberry', 'grape', 'banana']);
</script>

<style lang="scss" scoped></style>
