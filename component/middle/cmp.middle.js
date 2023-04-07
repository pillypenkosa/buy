//console.log( 'header' );




class ComponentMiddle {



	static html() {


		//const title = 'Головна';
		document.title = appProjectName + ' ' + appVersion;



		return getComponentHtml({ tag: 'middle',
			innerHTML: `
				<div id="content"></div>
			`, 
		});
	}



	static innerHtml( id ) {

		let html = '';


		//alert( id );



		let num = 1;
		arrBuyNeed.forEach( ( k, i ) => {
			if ( k.store[ id ] ) {
				html += `<div class="each">
					<span class="num">${ num++ })</span>
					<span class="title">${ k.title }</span>
					<span class="store">// ${ objStore[ id ].title }</span>
				</div>`;
			}
		});








		document.getElementById( 'content' ).innerHTML = html;

	}







}











