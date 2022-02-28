export const Location = (locationObj) => {
	return `<article class="location-card">
				<h3 class="location-name">${locationObj.name}</h3>
				<ul>
					<li class="locations">Step 1: ${locationObj.tip1}</li>
					<li class="locations">Step 2: ${locationObj.tip2}</li>
					<li class="locations">Step 3: ${locationObj.tip3}</li>
				</ul>
        	</article>`
}