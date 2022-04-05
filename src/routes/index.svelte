<script>
	import Header from "$lib/Header.svelte";
	import Footer from "$lib/Footer.svelte";

	import '../styles/global.css';
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

	<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum fuga aut, fugit soluta rem molestias, voluptates nihil minus vel aliquam amet repudiandae. Qui quo excepturi eos, explicabo iure debitis ea quidem perspiciatis at aliquid necessitatibus similique vel, vero doloribus delectus consequatur inventore cupiditate quaerat quis aliquam. Quidem eum fugiat est aut dolore! Iure aut dignissimos fugit inventore consequuntur tenetur asperiores, molestiae voluptatem, odit quis doloribus autem? Sit vitae consequatur vel exercitationem nihil odit fuga in. Expedita nesciunt saepe molestiae soluta error ipsa possimus consectetur voluptates officiis libero qui quod sapiente, quasi vero repudiandae pariatur doloremque maxime architecto porro consequuntur laudantium.</p>
</main>



<Footer />



<style>
	section {
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}

	section.intro > p {
		max-width: 700px;
		color: #191919;
		font-family: "Open Sans", sans-serif;
		font-size: 1em;
		font-weight: 400;
		line-height: 1.75;
	}

	p a {
		font-weight: 600;
		color: #737373;
		text-decoration: none;
		font-family: "Biryani", sans-serif;
	}



	/* .intro {
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
	} */

</style>