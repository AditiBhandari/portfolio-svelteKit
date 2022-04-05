<script>
	// Is this correct? Using var because I want this to be scoped globally???
	// var footerOptions = ["Built by the Kasukabe Defense Force", "Powered by Shikon jewel shards", "Built with the Internet Clow card","Made with sugar, spice and everything nice (and a dash of Chemical X)"];

	// var footerRandomiser = Math.floor(Math.random() * footerOptions.length);

	// export let footerJoke = footerOptions[footerRandomiser];
	export let footerJoke = "";
</script>

<footer>
	<p>{footerJoke}</p>
</footer>