<script>
	const footerText = ["Built by the Kasukabe Defense Force", "Powered by Shikon jewel shards", "Built with the Internet Clow card","Made with sugar, spice and everything nice (and a dash of Chemical X)"];

	const footerJoke = Math.floor(Math.random() * footerText.length);

	console.log(footerText[footerJoke]);
</script>

<footer>
	<p>{footerText[footerJoke]}</p>
</footer>