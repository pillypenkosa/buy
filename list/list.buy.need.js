const arrBuyNeed = [








{
	id: '2023_04_07_1848',
	title: 'Наконечники для дротів // 3 - 4 мм // під обжимку',
	store: { car: 1, autograd: 1, losk: 1, },
},
{
	id: '2023_04_07_1733',
	title: 'Олія моторна 5л // Aral Blue Tronic 10w40, ACEA A3/B4, API SN, VW 501.01/505.00',
	store: { car: 1, autograd: 1, losk: 1, },
},
{
	id: '2023_04_07_1732',
	title: 'Разъем VAG // 3-контактный на катушку',
	store: { car: 1, autograd: 1, losk: 1, },
},
{
	id: '2023_04_07_1804',
	title: 'Свічки запалювання // Denso К20ТТ',
	store: { car: 1, autograd: 1, losk: 1, },
},
{
	id: '2023_04_01_1200',
	title: 'Пружини на зад // на універсал, а не седан',
	store: { car: 1, autograd: 1, losk: 1, },
},
{
	id: '2023_04_01_1201',
	title: 'Спрей для очищення скла (оптичних поверхонь)',
	store: { car: 1, autograd: 1, losk: 1, },
},
{
	id: '2023_04_01_1202',
	title: 'Подовжувач для насадок (штанга) // долізти в важкодоступні місця в авто',
	store: { car: 1, autograd: 1, losk: 1, },
},
{
	id: '2023_04_01_1203',
	title: 'Ключ на 24 для керма // бажано трубка або головка',
	store: { car: 1, autograd: 1, losk: 1, },
},
{
	id: '2023_04_01_1204',
	title: 'Рукоятка на перемикач КПП',
	store: { car: 1, autograd: 1, losk: 1, },
},
{
	id: '2023_04_01_1205',
	title: 'Ручка на ручник // оригінал для B4',
	store: { car: 1, autograd: 1, losk: 1, },
},
{
	id: '2023_04_01_1206',
	title: 'Роз\'єми пластикові // для з\'єднання дротів',
	store: { car: 1, autograd: 1, losk: 1, },
},
{
	id: '2023_04_01_1206',
	title: 'Роз\'єм-розетка дверна для колонок // оригінал для B4',
	store: { car: 1, autograd: 1, losk: 1, },
},
{
	id: '2023_04_01_1207',
	title: 'Ключ-знімач для зняття магнітоли // для віджаття фіксаторів',
	store: { car: 1, autograd: 1, losk: 1, },
},
{
	id: '2023_04_01_1208',
	title: 'Пробка-втулка для кріплення трикутного декоративного пластику на дверцятах біля скла (дзеркала)',
	store: { car: 1, autograd: 1, losk: 1, },
},
{
	id: '2023_04_01_1209',
	title: 'Болти на 6 з лівою резьбою // на ручки дверей',
	store: { car: 1, autograd: 1, losk: 1, },
},













{
	id: '2023_04_07_1731',
	title: 'Бочка',
	store: { barabashovo: 1, },
},






{
	id: '2023_04_07_1730',
	title: 'Яблука',
	store: { food: 1, atb: 1, },
},















];








const arrStore = [

	{ id: 'atb' 			, title: 'АТБ'			, },
	{ id: 'barabashovo' 	, title: 'Барабан' 		, },
	{ id: 'market' 			, title: 'Ц.Рынок'		, },
	{ id: 'autograd' 		, title: 'Автоград' 	, },
	{ id: 'losk' 			, title: 'Лоск' 		, },

	{ id: 'food' 			, title: 'Продукти' 	, },
	{ id: 'car' 			, title: 'VW Passat' 	, },
	{ id: 'pc' 				, title: 'Компьютер' 	, },



];







let objStore = {};
arrStore.forEach( k => {
	objStore[ k.id ] = k;
});






let objBuyNeed = {};
arrBuyNeed.forEach( k => {
	objBuyNeed[ k.id ] = k;
});






