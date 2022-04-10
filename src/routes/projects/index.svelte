<script>
	import Header from "$lib/Header.svelte";
	import Footer from "$lib/Footer.svelte";

	import stories from "../../static/data/stories.json";

	import { getJokeFooter } from "../../helpers";
</script>

<Header activePage="projects" />

<main>
	<section>
		<p>These are my projects!!!!</p>
	</section>
</main>

<Footer jokeFooter={getJokeFooter()} />
