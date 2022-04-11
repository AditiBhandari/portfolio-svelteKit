<script>
	import Header from "$lib/Header.svelte";
	import Footer from "$lib/Footer.svelte";

	import { getJokeFooter } from "../../helpers";
</script>

<Header activePage="work" />

<main>
	<section>
		<p>This is my work!!!!!</p>
	</section>
</main>

<Footer jokeFooter={getJokeFooter()} />
