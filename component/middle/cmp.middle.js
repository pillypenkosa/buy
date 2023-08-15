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



	// buyNeed
	static showContent( id ) {

		let title = objStore[ id ] ? ( objStore[ id ].title ? objStore[ id ].title : 'Немає опису категорії українською... Дивно!' ) : 'Товари без категорії... До речі, як так вийшло?..'; // помилки не має бути

		//alert( id );
		//console.log( objStore[ id ] );
		//alert( id );

		let html = `<div class="winTitle">${ title }</div>`;
		arrBuyNeed.forEach( k => {

			//console.log( k.hash );

			let hashText = '';
			for ( let k1 in k.hash  ) 
				hashText += ' #' + objStore[ k1 ].title;


			if ( id == 'all' || k.hash[ id ] ) { 	// дивна умова, але працює так як слід 		// не чіпати!

				html += `<div class="each">
					<div class="title">${ k.title }</div>
					<div class="store">${ hashText }</div>
				</div>`;
			}
		});

		document.getElementById( 'content' ).innerHTML = html;
	}



	// buy
	static showBought() {

		//alert( 'ComponentMiddle.showBought()' );

		let html = '';
		arrBuy.forEach( k => {

			let hashText = '';
			for ( let k1 in k.hash  ) {
				if ( objStoreCat[ k1 ] ) {

					if ( objStoreCat[ k1 ].title ) 
						hashText += ' #' + objStoreCat[ k1 ].title;
				}
			}


			html += `<div class="each">
				<div class="id">${ k.id }</div>

				<div class="title">${ k.title }</div>
				<div class="mark">${ k.manufacturer } ${ k.mark }</div>
				<div class="total">${ k.cost ? ( k.cost.total ? k.cost.total + ' грн' : '' ) : '' }</div>

				<div class="store">${ hashText }</div>
			</div>`;

		});

		document.getElementById( 'content' ).innerHTML = html;
	}








}











