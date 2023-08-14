//console.log( '' );









class ComponentHeader {






	static html() {

		// &#9776; ☰
		// &#8801; ≡


		let innerHTML = `
			<div id="appHeaderTitle" class="title">${ appProjectName }</div>
			<div class="btn-menu bought" onclick="ComponentHeader.clcMenuBought()">&#8650;</div>
			<div class="btn-menu need" onclick="ComponentHeader.clcMenuNeed()">&#8801;</div>
			<div class="nav"></div>
		`;


		return getComponentHtml({ tag: 'header', 
			param: [
				//{ k: 'class' 		, v: 'active' 					, },
				//{ k: 'name' 		, v: 'Имя Розы' 				, },
				//{ k: 'title' 		, v: 'Всплывающая подсказка' 	, },
				//{ k: 'data-id' 		, v: 'any-data' 				, },
				//{ k: 'onclick' 		, v: `${ f }( ${ arg } )` 		, },
				//{ k: 'selected' 	, v: '' 						, },
				//{ k: 'defer' 		, v: '' 						, },
			], 
			innerHTML,
		});
	}





	// відображення меню Придбано
	static clcMenuBought() {
		//alert();

		// очищення меню категорій магазинів
		document.querySelectorAll( 'cmp-header .nav' )[ 0 ].innerHTML = '';




		document.getElementById( 'content' ).innerHTML = '';
		appHeaderTitle.innerHTML = 'Bought';


		ComponentMiddle.showBought();
	}





	// відображення меню Need
	static clcMenuNeed() {

		//alert();

		document.getElementById( 'content' ).innerHTML = '';
		appHeaderTitle.innerHTML = 'Need to buy';


		let content = document.querySelectorAll( 'cmp-header .nav' )[ 0 ];

		let cpHtml = '';
		arrBuyNeedStore.forEach( k => {
			cpHtml += `<div class="btn-filter" onclick="ComponentHeader.clcBtnMenu( '${ k.id }' )">${ k.title }</div>`;
		});

		content.innerHTML = cpHtml;
	}













	static clcBtnMenu( id ) {

		//alert( id );

		document.querySelectorAll( 'cmp-header .nav' )[ 0 ].innerHTML = '';

		//console.log( div );
		ComponentMiddle.showContent( id );
	}
















}











