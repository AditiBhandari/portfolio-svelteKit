<script>
	let socialList = {
		"socials": [
			{
				"type": "Twitter",
				"link": "https://twitter.com/AditiHBhandari",
				"ariaLabel": "Follow me on Twitter",
				"icon": "fa-twitter"
			},
			{
				"type": "GitHub",
				"link": "https://github.com/AditiBhandari",
				"ariaLabel": "See my work on Github",
				"icon": "fa-github-alt"
			},
			{
				"type": "LinkedIn",
				"link": "https://www.linkedin.com/in/aditihbhandari",
				"ariaLabel": "Connect with me on LinkedIn",
				"icon": "fa-linkedin-in"
			},
			{
				"type": "Email",
				"link": "mailto:aditibhandari95@gmail.com",
				"ariaLabel": "Email me at aditibhandari95@gmail.com",
				"icon": "fa-google"
			}
		]
		};
</script>

<header>
	<nav class="menu">
		<a class="menu_home_link" href="/"><h1 class="menu_home_button">aditi bhandari</h1></a>

		<ul class="menu_list">
			<li class="menu_button"><h2><a class="page_link" href="/work">work</a></h2></li>
			<li class="menu_button"><h2><a class="page_link" href="/projects">projects</a></h2></li>
		</ul>

		<ul class="menu_list">
			{#each socialList.socials as social}
				<li class="menu_icon">
					<a class="menu_link" href="{social.link}" target="_blank" rel="noopener noreferrer" aria-label="{social.ariaLabel}">
						<i class="fab {social.icon}" aria-hidden="true"></i>
						<!-- <span class="sr-only">Do I need this?</span> -->
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
<style>
	.menu {
		margin-bottom: 20px;
		width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}

	.menu_list {
		padding: 0;
		margin: 0;
		display: inline-block;
	}

	.menu_home_button {
		display: inline-block;
		margin: 30px 30px 0px 0px;
	}

	.menu_button, .menu_icon {
		list-style: none;
		display: inline-block;
	}

	.fab {
		padding-left: 12px;
		padding-right: 12px;
	}

	.menu_button {
		padding: 0px 30px 0px 0px;
	}

	.menu_home_link {
		font-size: 1.75em;
		color: #191919;
		transition: color ease-in-out 0.1s;
	}

	.page_link, .menu_link {
		color: #737373;
	}

	.page_link {
		font-size: 1em;
	}

	.menu_link {
		font-size: 1.5em;
	}

	.page_link, .menu_link, .menu_home_link {
		font-family: 'Biryani', sans-serif;
		font-style: normal;
		font-weight: 300;
		text-decoration: none;
		padding: 5px 0px 0px 0px;
	}

	.menu_link_active {
		color: #191919;
		border-bottom: solid 4px #227f7f;
	}

	.menu_home_link:hover { color: #227f7f; }

	.menu_link:hover, .page_link:hover {
		border-bottom: solid 4px #227f7f;
		transition: border-bottom ease-in-out 0.1s;
	}
</style>