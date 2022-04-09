<script>
	export let activePage;

	import socialList from "../static/data/socials.json";
</script>

<header>
	<nav class="menu">
		<ul aria-label="Page menu">
			<li>
				<h1 class="home_link">
					<a href="/" aria-label="Home page">aditi bhandari</a>
				</h1>
			</li>
			<li>
				<h2>
					<a
						class={"page_link" +
							(activePage === "work" && " link_active")}
						href="/work"
						aria-label="See my work">work</a
					>
				</h2>
			</li>
			<li>
				<h2>
					<a
						class={"page_link" +
							(activePage === "projects" && " link_active")}
						href="/projects"
						aria-label="See my projects">projects</a
					>
				</h2>
			</li>
		</ul>

		<ul aria-label="Social media menu">
			{#each socialList as social}
				<li>
					<a
						class="social_link"
						href={social.link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={social.ariaLabel}
					>
						<i class="fab {social.icon}" aria-hidden="true" />
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	nav {
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		align-items: baseline;
	}

	ul {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding-left: 0;
		margin-top: 0;
	}

	li {
		list-style: none;
		/* padding-left: 1em;
		padding-right: 1em; */
		font-family: "Biryani", sans-serif;
	}

	h2 > a,
	li > a {
		text-decoration: none;
		font-weight: 300;
		color: #737373;
		margin-left: 0.75em;
		margin-right: 0.75em;
	}

	h2 a:hover,
	li > a:hover {
		border-bottom: solid 4px #227f7f;
		transition: border-bottom ease-in-out 0.1s;
	}

	h1.home_link a {
		font-size: 1.75em;
		color: #191919;
		transition: color ease-in-out 0.1s;
		font-weight: 700;
		padding-right: 0.5em;
		text-decoration: none;
	}

	.home_link:hover {
		color: #227f7f;
	}

	.social_link {
		font-size: 1.5em;
		padding-left: 0.25em;
		padding-right: 0.25em;
	}

	.link_active {
		color: #191919;
		border-bottom: solid 4px #227f7f;
		font-weight: 700;
	}

	/*!
	* Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
	* License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
	*/
	.fab {
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		display: inline-block;
		font-style: normal;
		font-variant: normal;
		text-rendering: auto;
		line-height: 1;
	}

	/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen readers do not read off random characters that represent icons */
	.fa-github-alt:before {
		content: "\f113";
	}

	.fa-google:before {
		content: "\f1a0";
	}

	.fa-linkedin-in:before {
		content: "\f0e1";
	}

	.fa-twitter:before {
		content: "\f099";
	}

	.sr-only {
		border: 0;
		clip: rect(0, 0, 0, 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		width: 1px;
	}

	.sr-only-focusable:active,
	.sr-only-focusable:focus {
		clip: auto;
		height: auto;
		margin: 0;
		overflow: visible;
		position: static;
		width: auto;
	}

	@font-face {
		font-family: "Font Awesome 5 Brands";
		font-style: normal;
		font-weight: 400;
		font-display: block;
		src: url("../static/webfonts/fa-brands-400.eot");
		src: url("../static/webfonts/fa-brands-400.eot?#iefix")
				format("embedded-opentype"),
			url("../static/webfonts/fa-brands-400.woff2") format("woff2"),
			url("../static/webfonts/fa-brands-400.woff") format("woff"),
			url("../static/webfonts/fa-brands-400.ttf") format("truetype"),
			url("../static/webfonts/fa-brands-400.svg#fontawesome")
				format("svg");
	}

	.fab {
		font-family: "Font Awesome 5 Brands";
		font-weight: 400;
	}

	@font-face {
		font-family: "Font Awesome 5 Free";
		font-style: normal;
		font-weight: 400;
		font-display: block;
		src: url("../static/webfonts/fa-regular-400.eot");
		src: url("../static/webfonts/fa-regular-400.eot?#iefix")
				format("embedded-opentype"),
			url("../static/webfonts/fa-regular-400.woff2") format("woff2"),
			url("../static/webfonts/fa-regular-400.woff") format("woff"),
			url("../static/webfonts/fa-regular-400.ttf") format("truetype"),
			url("../static/webfonts/fa-regular-400.svg#fontawesome")
				format("svg");
	}
</style>
