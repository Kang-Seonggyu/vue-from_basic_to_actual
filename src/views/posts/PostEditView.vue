<template>
	<div>
		<div>
			<h2>게시글 수정</h2>
			<hr class="my-4" />
			<form @submit.prevent>
				<div class="mb-3">
					<label for="postTitle" class="form-label">제목</label>
					<input type="text" class="form-control" id="postTitle" />
				</div>
				<div class="mb-3">
					<label for="postContent" class="form-label">내용</label>
					<textarea class="form-control" id="postContent"></textarea>
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
import { useRouter } from 'vue-router';

const router = useRouter();
const goPage = route => {
	router.push(route);
};
</script>

<style lang="scss" scoped></style>
