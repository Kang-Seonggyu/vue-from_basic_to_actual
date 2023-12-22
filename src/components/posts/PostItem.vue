<template>
	<AppCard>
		<h5 class="card-title">{{ title }}</h5>
		<p class="card-text">{{ content }}</p>
		<p class="text-muted">{{ createdAt }}</p>
		<template #footer>
			<div class="d-flex flex-row-reverse">
				<button class="btn p-0" @click.stop="$emit('modal')">
					<i class="bi bi-emoji-sunglasses"></i>
				</button>
			</div>
		</template>
	</AppCard>
</template>

<script setup>
import AppCard from '../AppCard.vue';

defineProps({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
	},
	createdAt: {
		type: [String, Date, Number],
	},
});
</script>

<style scoped>
.card {
	background-color: #fff;
	cursor: pointer;
}
.card:hover {
	background-color: #ddd;
}
.card:active {
	background-color: #999;
}
</style>
