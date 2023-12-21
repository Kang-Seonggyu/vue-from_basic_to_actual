<template>
	<form @submit.prevent="edit">
		<div class="mb-3">
			<label for="postTitle" class="form-label">제목</label>
			<input
				:value="title"
				@input="$emit('update:title', $event.target.value)"
				type="text"
				class="form-control"
				id="postTitle"
			/>
		</div>
		<div class="mb-3">
			<label for="postContent" class="form-label">내용</label>
			<textarea
				:value="content"
				@input="$emit('update:content', $event.target.value)"
				class="form-control"
				id="postContent"
			></textarea>
		</div>
		<slot name="actions"></slot>
	</form>
</template>

<script setup>
defineProps({
	title: String,
	content: String,
});

defineEmits(['update:title', 'update:content']);
</script>

<style lang="scss" scoped></style>
