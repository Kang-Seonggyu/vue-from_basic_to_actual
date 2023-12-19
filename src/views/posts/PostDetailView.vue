<template>
	<div>
		<h2>제목</h2>
		<p>내용</p>
		<p class="text-muted">2020-01-01</p>
		<hr class="my-4" />
		<div class="row g-2">
			<div class="col-auto">
				<button class="btn btn-outline-dark">이전글</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">다음글</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goPage('/posts')">
					목록
				</button>
			</div>
			<div class="col-auto">
				<button
					class="btn btn-outline-primary"
					@click="goPage(`/posts/${$route.params.id}/edit`)"
				>
					수정
				</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-danger">삭제</button>
			</div>
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
