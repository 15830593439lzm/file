<template>
	<div class="all">
		<ul class='container'>
			<li>
				<a href="javascript:;"><img src="../assets/images/1.jpg" alt=""></a>
			</li>
			<li>
				<a href="javascript:;"><img src="../assets/images/2.jpg" alt=""></a>
			</li>
			<li>
				<a href="javascript:;"><img src="../assets/images/3.jpg" alt=""></a>
			</li>
			<li>
				<a href="javascript:;"><img src="../assets/images/4.jpg" alt=""></a>
			</li>
			<li>
				<a href="javascript:;"><img src="../assets/images/5.jpg" alt=""></a>
			</li>
			<li>
				<a href="javascript:;"><img src="../assets/images/6.jpg" alt=""></a>
			</li>
			<li>
				<a href="javascript:;"><img src="../assets/images/7.jpg" alt=""></a>
			</li>
			<li>
				<a href="javascript:;"><img src="../assets/images/8.jpg" alt=""></a>
			</li>
			<li>
				<a href="javascript:;"><img src="../assets/images/9.jpg" alt=""></a>
			</li>
			<li>
				<a href="javascript:;"><img src="../assets/images/10.jpg" alt=""></a>
			</li>
			<li>
				<a href="javascript:;"><img src="../assets/images/11.jpg" alt=""></a>
			</li>
			<li>
				<a href="javascript:;"><img src="../assets/images/12.jpg" alt=""></a>
			</li>
			<li>
				<a href="javascript:;"><img src="../assets/images/13.jpg" alt=""></a>
			</li>
			<li>
				<a href="javascript:;"><img src="../assets/images/14.jpg" alt=""></a>
			</li>
			<li>
				<a href="javascript:;"><img src="../assets/images/15.jpg" alt=""></a>
			</li>
			<li>
				<a href="javascript:;"><img src="../assets/images/16.jpg" alt=""></a>
			</li>
			<li>
				<a href="javascript:;"><img src="../assets/images/17.jpg" alt=""></a>
			</li>
			<li>
				<a href="javascript:;"><img src="../assets/images/18.jpg" alt=""></a>
			</li>
			<li>
				<a href="javascript:;"><img src="../assets/images/19.jpg" alt=""></a>
			</li>
			<li>
				<a href="javascript:;"><img src="../assets/images/20.jpg" alt=""></a>
			</li>
			<li>
				<a href="javascript:;"><img src="../assets/images/21.jpg" alt=""></a>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
        mounted() {
			this.slider();
		},
		methods: {
			slider() {
				$("img").lazyload({
					placeholder: "../assets/images/lazyload.gif",
					effect: "fadeIn"
				});
			}
		}
	}
</script>
<style scoped>
	@import '../assets/css/mydoc.css';
</style>