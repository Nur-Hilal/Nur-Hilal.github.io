// <!DOCTYPE html>
 <html lang="en">

{/* <head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>My Forms</title>
</head> */}

<body>
	<center>
		<h1> Version 1 - Original</h1>
		{/* <!-- <img src="https://storage.googleapis.com/twg-content/images/MarketingResources_Thumbnail_Search.width-1200.jpg"> --> */}
		<div style="padding: 20px;">
			<h3> double click this button</h3>
			<div><button id="notunique" class="duplicated" name="dblclkme"
					ondblclick="alert('you double clicked')">Double
					click me </button></div>
		</div>
		<h2>Original State</h2>
		<table>
			<tr>
				{/* <!-- <td><button onclick="style='background-color:green'">Just a button</button></td> --> */}
				<td><button id="btn1" class="Col1" name='button1' onclick="style='background-color:green'">
						All unique Attributes</button></td>
				<td><button id="btn2" class="Col2" onclick="style='background-color:green'">
						unique id and unique class without name</button></td>
				<td><button name='button3' class="Col3" onclick="style='background-color:green'">
						unique class and unique name without id </button></td>
			</tr>
			<tr>

				<td><button id="notunique" class="col4" name="dblclkme" onclick="style='background-color:green'">
						not unique id and not unique name with unique class</button> </td>
				<td><button class="duplicated" name="dblclkme" onclick="style='background-color:green'">
						duplicated class with not unique name without id</button></td>
				<td><button class="col5" onclick="style='background-color:green'">unique class without name without
						id</button></td>

			</tr>
			<tr>
				<td><button name="dblclkme" onclick="style='background-color:green'">duplicate name</button></td>
				<td><button onclick="style='background-color:green'">no attributes</button></td>
				<td><button style="color: blue;" onclick="style='background-color:green'">with-style</button></td>
			</tr>

		</table>
		<h2> Original State</h2>
		<table>
			<tr>
				<td style="padding: 20px;"><a id="l1" name="link1" onclick="style='background-color:green'">Link1:
						unique id unique
						name</a></td>
				<td style="padding: 20px;"><a id="notunique" name="link2"
						onclick="style='background-color:green'">Link2: not unique id
						unique name</a></td>
				<td style="padding: 20px;"><a class="cls" onclick="style='background-color:green'">Link3: unique class
						no id no name</a></td>
			</tr>
		</table>

		<div>
			<form action="https://www.youtube.com/results">
				{/* <!-- https://www.youtube.com/results --> */}
				<span>

					<p>
						<label for="search">what are you looking for in youtube</label>
						<input type="text" id="01" placeholder="search youtube" name="search_query"></input>

					</p>
					<p>
					<div id="btn" name="searchbtn">
						<label for="searchbtn">Click this button to search youtube</label>
						<button name="youtubeSearch">youtube_search</button>
					</div>
					</p>

				</span>
			</form>
			<form action="https://www.google.com/search">
				<span>
					<p>
						<label for="search">what are you looking for in Google </label>
						<input type="text" id="02" placeholder="search_google" name="q"></input>

					</p>
					<p>
					<div id="btn" name="searchbtn">
						<label for="searchbtn">Click this button to search google</label>

						<button name="googleSearch">google search</button>
					</div>
					</p>
				</span>
			</form>
		</div>

		<h2>Original State</h2>
		<div id="forTesting">
			<div>
				<button type="button" id='unique1' style="padding: 10px;"
					onclick="style='padding: 10px; background-color:green;'"></button>
				<button type="button" id='unique2' onclick="style=' background-color:green;'">id with
					text</button>
			</div>

			<h2>Multiple Class Original State</h2>
			<div>
				<button id="oclass" class="justOneClass"
					onclick="style='padding: 10px; background-color:green;'">one_class</button>
				<button id="mclass" class="class1 class2 Class3"
					onclick="style='padding: 10px; background-color:green;'">multiple_classes</button>
				<button id="mclass2" class="C1 C2" onclick="style='padding: 10px; background-color:green;'"></button>
			</div>

		</div>

		{/* <!-- <h2>Alert Testing</h2>
        <div id='alertTesting'>
            <button type="button" id='alertBtn' onclick="alert('Warning this is just alert')"> simple alert</button>
            <button type="button" id='confirmBtn' onclick="confirm('To confirm or not to confirm')">confirm
                alert</button>
            <button type="button" data-id='promptBtn' onclick="prompt('enter anything')">prompt alert</button>
        </div> --> */}

		<div style="margin-top: 20px;">
			<select name="cars" id="cars" value={(e) => { e.target.value }}>
				<option value={0}>Volvo</option>
				<option value={1}>Saab</option>
				<option value={2}>Mercedes</option>
				<option value={3}>Audi</option>
			</select>
		</div>

	</center>

</body>

</html>