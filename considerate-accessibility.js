(function() {
	'use strict';
	console.log("Considerate Accessibility Ready");

	let domain_address = "https://considerate.digital";
	// for testing purposes
	//let domain_address = "http://localhost:5173";
	

	// add stylesheet to head
	let head = document.getElementsByTagName("head")[0];
	let link = document.createElement("link");
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = domain_address + "/considerate-accessibility/considerate-accessibility.css";
	
	head.appendChild(link);
	
	//add svg accessibility logo to screen
	let body = document.getElementsByTagName("body")[0];	
	let html = document.getElementsByTagName("html")[0];	
	let image_container = document.createElement("button");

	image_container.classList.add("considerate-access-menu-button");
	image_container.setAttribute("aria-label", "accessibility menu open button");
	image_container.setAttribute("aria-pressed", "false");


	let image = document.createElement("img");
	image.src = domain_address + "/considerate-accessibility/accessibility-icon.png"; 
	image.style.height = "4rem";
	image.style.width = "4rem";
	image_container.appendChild(image);

	
	let toolbar_container = document.createElement("div");
	toolbar_container.classList.add("considerate-accessibility-menu-wrapper");

	let readable = false;
	let calm = false;
	let focus = false;
	let super_clear = false;

	// add toolbar to screen
	toolbar_container.innerHTML = `
	<menu class="considerate-access-menu" aria-pressed="false" aria-role="menu" aria-label="Accessibility Menu">
		<div class="considerate-access-menu-top-container">
		<button class=" considerate-access-menu-button-close" aria-label="accessibility menu close button" aria-pressed="false">
			<div class="considerate-access-menu-close-icon-container" aria-hidden="true">
				<span class="considerate-access-menu-close-icon camci1" aria-hidden="true"></span>
				<span class="considerate-access-menu-close-icon camci2" aria-hidden="true"></span>
			</div><!--considerate-access-menu-icon-container-->
		</button><!--considerate-access-menu-button-->
		<h6 class="considerate-access-menu-title"><a href="${domain_address}" target="_blank">Considerate Toolbar</a></h6>
		</div><!--considerate-access-menu-top-container-->
		<ul>
			<li>
				<label>Still</label>
				<button id="considerate-access-readable"role="switch" aria-checked="false">
					<span>on</span><span>off</span>
				</button>
			</li>
			<li>
				<label>Calm</label>
				<button id="considerate-access-calm"role="switch" aria-checked="false" >
					<span>on</span><span>off</span>
				</button>
			</li>
			<li>
				<label>Focus</label>
				<button id="considerate-access-focus"role="switch" aria-checked="false">
					<span>on</span><span>off</span>
				</button>
			</li>
			<li>
				<label>Scale</label>
				<button id="considerate-access-super"role="switch" aria-checked="false">
					<span>on</span><span>off</span>
				</button>
			</li>
		</ul>
		<p class="considerate-access-backlink"><a href="${domain_address}/blog/how-to-add-the-considerate-toolbar" target="_blank">Add the Considerate toolbar to your website for free.</a></p>

	</menu>
	`;
	//toolbar_container.style.visibility = "hidden";
	// add the toolbar to the DOM
	setTimeout(() => {
		body.appendChild(image_container);
		body.appendChild(toolbar_container);
		runSetup();
	}, 300);

let considerateReadable, considerateCalm, considerateFocus, considerateSuper, considerateAccessToolbar, considerateAccessToolbarToggle, considerateAccessToolbarClose;
function runSetup () {
    if (document.getElementById('considerate-access-readable')) {
        //set event listeners for each accessibility target
        considerateAccessToolbar= document.getElementsByClassName('considerate-access-menu')[0];
        considerateAccessToolbarToggle= document.getElementsByClassName('considerate-access-menu-button')[0];
        considerateAccessToolbarClose= document.getElementsByClassName('considerate-access-menu-button-close')[0];
        considerateReadable = document.getElementById('considerate-access-readable');
        considerateCalm = document.getElementById('considerate-access-calm');
        considerateFocus = document.getElementById('considerate-access-focus');
        considerateSuper = document.getElementById('considerate-access-super');
	

				function toggle_toolbar() {
					if (considerateAccessToolbar.classList.contains('considerate-access-menu-open')) {
                considerateAccessToolbar.classList.remove('considerate-access-menu-open');
                considerateAccessToolbar.setAttribute('aria-pressed', 'false');
                considerateAccessToolbarToggle.setAttribute('aria-pressed', 'false');
            } else {
                considerateAccessToolbar.classList.add('considerate-access-menu-open');
                considerateAccessToolbar.setAttribute('aria-pressed', 'true');
                considerateAccessToolbarToggle.setAttribute('aria-pressed', 'true');
            }

				}

        /*open and close the toolbar*/
        considerateAccessToolbarToggle.addEventListener('click', function (e) {
            e.stopPropagation();
						toggle_toolbar();
            
        });
				
				considerateAccessToolbarClose.addEventListener("click", function(e) {
					e.stopPropagation();
					toggle_toolbar();
				}); 

        let urlParams = new URLSearchParams(window.location.search);
        let body = document.getElementsByTagName('body')[0];

        

        considerateReadable.addEventListener('click', function(e) {
            e.stopPropagation();
            if (considerateReadable.getAttribute('aria-checked') === 'false') {
                considerateReadable.setAttribute('aria-checked', 'true');
								// load font sheet
								let link = document.createElement("link");
								//link.rel = "preload";
								link.as = "font";
								link.type = "font/woff2";
								link.crossorigin = "anonymous";
								link.href = domain_address + "/considerate-accessibility/fonts/OpenDyslexic3-Regular.woff2"
								head.appendChild(link);	


								//add class to html
								html.classList.add("considerate-readable");

            } else {
                considerateReadable.setAttribute('aria-checked', 'false');
								html.classList.remove("considerate-readable");
            }
        });

        considerateCalm.addEventListener('click', function(e) {
            e.stopPropagation();
            if (considerateCalm.getAttribute('aria-checked') === 'false') {
                considerateCalm.setAttribute('aria-checked', 'true');
                //setUrlParams(urlParams);

								//add class to html
								body.classList.add("considerate-calm");

            } else {
                //revert to false and set cookie
                considerateCalm.setAttribute('aria-checked', 'false');
								body.classList.remove("considerate-calm");
            }
        });
        

        function processAllWords() {
						let focus_letters = document.querySelectorAll('body .considerate-focus-letter');
						if (focus_letters.length > 0) {
							for (let i = 0; i < focus_letters.length; i++) {
								let focus_letter = focus_letters[i];
								focus_letter.classList.add("considerate-focus-bold-letter");
							}
						} else {
							let mainPs = document.querySelectorAll('body p');
							for (let i = 0; i < mainPs.length; i++ ) {
									let currentP = mainPs[i];
									let newP = document.createElement('P');
									for( let i = 0; i < currentP.childNodes.length; i++ ) {
											let currentPChild = currentP.childNodes[i];
											if (currentPChild.nodeName != '#text') {
													newP.appendChild(currentPChild);
													continue 
											};
											let words = currentPChild.textContent.split(" ");
											for (let i = 0; i < words.length; i++) {
													let word = words[i].split('');
													
													if (word.length > 4) {
															let firstLetter = word.splice(0, 1);
															firstLetter = '<strong class="considerate-focus-letter considerate-focus-bold-letter">' + firstLetter + "</strong>"
															let secondLetter = word.splice(0, 1);
															secondLetter =  '<strong class="considerate-focus-letter considerate-focus-bold-letter">'  + secondLetter + "</strong>"
															word.unshift(secondLetter);
															word.unshift(firstLetter);
															word = word.join('');
						 
													} else {
															let firstLetter = word.splice(0, 1);
															firstLetter = '<strong class="considerate-focus-letter considerate-focus-bold-letter">' + firstLetter + "</strong>"
															word.unshift(firstLetter);
															word = word.join('');
													}
													words.splice(i, 1, word);
											}
											let newSpan = document.createElement('SPAN');
											newSpan.innerHTML = String(words.join(" "));
											newP.appendChild(newSpan);
									}
									currentP.innerHTML = newP.innerHTML;
							}
						}
        }


				function cleanAllWords() {
					let focus_letters = document.querySelectorAll('body .considerate-focus-letter');
					if (focus_letters.length > 0) {
						for (let i = 0; i < focus_letters.length; i++) {
							let focus_letter = focus_letters[i];
							focus_letter.classList.remove("considerate-focus-bold-letter");
						}
					} 
				}        

        considerateFocus.addEventListener('click', function(e) {
            e.stopPropagation();
            if (considerateFocus.getAttribute('aria-checked') === 'false') {
                considerateFocus.setAttribute('aria-checked', 'true');
							
								//add class to html
								html.classList.add("considerate-focus");

								processAllWords();


            } else {
                //revert to false and set cookie
                considerateFocus.setAttribute('aria-checked', 'false');

								html.classList.remove("considerate-focus");
							
								cleanAllWords();
            }
        });


        considerateSuper.addEventListener('click', function(e) {
            e.stopPropagation();
            if (considerateSuper.getAttribute('aria-checked') === 'false') {
                considerateSuper.setAttribute('aria-checked', 'true');

								//add class to html
								html.classList.add("considerate-super");


            } else {
                considerateSuper.setAttribute('aria-checked', 'false');
								
								html.classList.remove("considerate-super");

            }
        });



    }
}

})();
