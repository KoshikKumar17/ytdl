//© Koshik Kumar
// Thanks to api.fabdl.com

	function get_mp4()
	{
		var api_host = 'https://api.fabdl.com';
		let val = document.getElementById('search-input').value;
		if (val) {		
			document.getElementById('search-submit').style.display = 'none';
			document.getElementById('loader').style.display = 'inline-block';
			document.getElementById("info").innerHTML = "<img style='height: 300px;' src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' />";
			axios.get(api_host + '/youtube/get?url=' + encodeURIComponent(val)).then(function (response) {
				document.getElementById('search-submit').style.display = 'inline-block';
				document.getElementById('loader').style.display = 'none';
				if (response.data.result) {
					let result = response.data.result;
					let html = "<img style='height: 300px;' src='"+result.image+"' />";
					html += "<h3>"+result.title+"</h3>";
					html += "<p>" + result.author +"</p>"
					html += "<div id='download_mp4'>";
					for (var i in result.videos) {
						html += "<p><a class='download-btn' href='" + result.videos[i].url + "'>Download MP4 (" + result.videos[i].quality + ")</a></p>";
					}
					for (var i in result.audios) {
						html += "<p><a class='download-btn' href='" + result.audios[i].url + "'>Download MP3 (128K)</a></p>";
					}
					html += "</div>";
					document.getElementById("info").innerHTML = html;
				} else {
					document.getElementById("info").innerHTML = '<b style="color:red;">An error has occured while searching. Please try again later.</b>';
				}
			}).catch(function (error) {
				console.log(error);
			});
		} else {
			alert('Paste URL');
		}
	}
