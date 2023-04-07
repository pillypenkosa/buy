const arrBuyNeed = [





{
	id: '2023_04_07_1733',
	title: 'Олія моторна 5л // Aral Blue Tronic 10w40, ACEA A3/B4, API SN, VW 501.01/505.00',
	store: { autograd: 1, losk: 1, },
},
{
	id: '2023_04_07_1732',
	title: 'Разъем VAG // 3-контактный на катушку',
	store: { autograd: 1, losk: 1, },
},
{
	id: '2023_04_07_1804',
	title: 'Свічки запалювання // Denso К20ТТ',
	store: { autograd: 1, losk: 1, },
},










{
	id: '2023_04_07_1731',
	title: 'Бочка',
	store: { barabashovo: 1, },
},






{
	id: '2023_04_07_1730',
	title: 'Безделушечка',
	store: { atb: 1, },
},















];








const arrStore = [

	{ id: 'atb' 			, title: 'АТБ'			, },
	{ id: 'barabashovo' 	, title: 'Барабан' 		, },
	{ id: 'market' 			, title: 'Ц.Рынок'		, },
	{ id: 'autograd' 		, title: 'Автоград' 	, },
	{ id: 'losk' 			, title: 'Лоск' 		, },

];







let objStore = {};
arrStore.forEach( k => {
	objStore[ k.id ] = k;
});






let objBuyNeed = {};
arrBuyNeed.forEach( k => {
	objBuyNeed[ k.id ] = k;
});






