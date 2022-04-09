<script>
	import Header from "$lib/Header.svelte";
	import Footer from "$lib/Footer.svelte";

	import { jokes } from "../../static/data/jokes.json";
	let randNum = Math.floor(Math.random() * jokes.length);
</script>

<Header activePage="work" />

<main>
	<section>
		<p>This is my work!!!!!</p>
	</section>
</main>

<Footer {randNum} />
