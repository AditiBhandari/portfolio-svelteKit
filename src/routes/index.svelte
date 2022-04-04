<script>
	import Header from "$lib/Header.svelte";
	import Footer from "$lib/Footer.svelte";
</script>

<Header />

<main>
	<section class="intro">
		<p>
			Hi! I'm a data viz developer at <a
				class="intro_link"
				href="http://graphics.reuters.com/"
				target="_blank"
				rel="noopener noreferrer">Reuters</a
			>
			in Mumbai. I'm a newly-minted Brit living in India, and previously
			worked at the Hindustan Times in India, and at
			<a
				class="intro_link"
				href="https://wamu.org/search/go?q=aditi%20bhandari"
				target="_blank"
				rel="noopener noreferrer">WAMU 88.5</a
			>, NPR,
			<a
				class="intro_link"
				href="https://www.texastribune.org/about/staff/aditi-bhandari/"
				target="_blank"
				rel="noopener noreferrer">The Texas Tribune,</a
			>
			and
			<a
				class="intro_link"
				href="https://slides.com/aditibhandari/spotlight#/15"
				target="_blank"
				rel="noopener noreferrer">The Boston Globe</a
			> after graduating from Northwestern University in 2017, where I was a Knight Lab student fellow.
		</p>
		<p>When I'm not researching web accessibility or good-naturedly cursing the inventor of [insert programming language here], I'm either watching food documentaries or listening to pop culture podcasts. Check out some of my work and projects below, and drop me a line if you want to reach out!</p>
	</section>
	<section class="favouriteWork">
		<h3>my favourite work</h3>
	</section>
	<section class="favouriteProjects">
		<h3>my favourite work</h3>
	</section>
</main>



<Footer />



<style>
	.intro {
		margin: 20px auto;
	}

	.favouriteWork, .favouriteProjects {
		height: 10vh;
	}
	.favouriteWork {
		background-color: aquamarine;
	}
	.favouriteProjects {
		background-color: lightpink;
	}

</style>