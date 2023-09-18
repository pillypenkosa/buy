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

		let title = objStoreCat[ id ] ? ( objStoreCat[ id ].title ? objStoreCat[ id ].title : 'Немає опису категорії українською... Дивно!' ) : ( id == 'all' ? 'Усі товари' : 'Товари без категорії... До речі, як так вийшло?..' ); // помилки не має бути
		//let title = '555777';

		//alert( id );
		//console.log( objStore[ id ] );
		//alert( id );

		let html = `<div class="winTitle">${ title }</div>`;
		arrListBuyNeed.forEach( k => {

			//console.log( k.hash );

			let hashText = '';
			for ( let k1 in k.hash  ) 
				hashText += ' #' + objStoreCat[ k1 ].title;

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
		arrListBuy.forEach( k => {

			let hashText = '';
			for ( let k1 in k.hash  ) {
				if ( objStoreCat[ k1 ] ) {

					if ( objStoreCat[ k1 ].title ) 
						hashText += ' #' + objStoreCat[ k1 ].title;
				}
			}



			let total = '';
			let price = '';
			let item = '';
			let unit = '';


			if ( k.cost ) 
			{
				if ( k.cost.total ) {
					total = k.cost.total + ' грн';
				}

				if ( k.cost.price ) {
					price = k.cost.price  + ' грн';
				}

				if ( k.cost.item ) {
					item = k.cost.item;

					if ( k.cost.unit ) {
						item += ' ' + k.cost.unit;
					}
				}
			}


			//console.log( total );


			let store = '';
			let site = '';
			if ( k.trader ) {
				if ( k.trader.shop ) {

					if ( objListStore[ k.trader.shop ] ) {

						if ( objListStore[ k.trader.shop ].title ) 
							store = objListStore[ k.trader.shop ].title;

						if ( objListStore[ k.trader.shop ].adress ) 
							store += ', ' + objListStore[ k.trader.shop ].adress;


						if ( objListStore[ k.trader.shop ].gps ) 
							store += ' <a href="' + objListStore[ k.trader.shop ].gps + '" target="_blank">GPS-></a>';

					}
				}

				if ( k.trader.site ) {
					site = '<a href="' + k.trader.site + '" target="_blank">(www)</a>';
				}
			}


			//console.log( k.id );
			//console.log( k.id, k.trader );
			//console.log( store );

			//<div class="total">${ k.cost ? ( k.cost.total ? k.cost.total + ' грн' : '' ) : '' }</div>
			
			html += `<div class="each">
				<div class="id">${ k.id }</div>

				<div class="title">${ k.title } ${ site }</div>
				<div class="mark">${ k.manufacturer } ${ k.mark }</div>
				<div class="total">${ total } = ${ item } * ${ price }</div>

				<div class="store">${ store }</div>
			</div>`;

		});

		document.getElementById( 'content' ).innerHTML = html;
	}








}











