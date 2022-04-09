<script>
	import Header from "$lib/Header.svelte";
	import Footer from "$lib/Footer.svelte";

	import stories from "../../static/data/stories.json";

	import { jokes } from "../../static/data/jokes.json";
	let randNum = Math.floor(Math.random() * jokes.length);
</script>

<Header activePage="projects" />

<main>
	<section>
		<p>These are my projects!!!!</p>
	</section>
</main>

<Footer {randNum} />
