$(() => {

	const bio = '<p>Saya adalah seorang programmer web developer, berasal dari Kabupaten Tangerang. saya lahir pada tahun 2006, dan tahun ini saya ber umur 15 tahun (2021), ya saya masih di bawah umur :D.</p><p>tetapi dengan umur saya yang terbilang masih sangat muda, saya sudah memiliki ambisi untuk merubah gaya hidup manusia terutama di indonesia, apakah itu? ini masih saya rahasiakan hehehe :v</p>';

	const projects = [{
		title: 'BayarGampang',
		img: 'bayargampang.png',
		link: 'https://bayargampang.com'
	},{
		title: 'DodoTracking',
		img: 'dodotracking.png',
		link: 'https://dodo.bukakonter.com/'
	},{
		title: 'Pstore (VA Generator)',
		img: 'pstore.png',
		link: 'https://pstore.web.id'
	}];

	const biodata = [{
		icon:'fas fa-user',
		text:'Zacky Zalfa Fahrurrozi'
	},{
		icon:'fas fa-calendar-alt',
		text:'Blitar, 29 Maret 2006'
	},{
		icon:'fas fa-home',
		text:'Perumahan Griya Catania Block O.02/19 Citra Raya, Kelurahan Panongan, Kecamatan Panongan, Kabupaten Tangerang, Provinsi Banten'
	}];

	const contacts = [{
		icon:'fas fa-phone',
		text:'+62 8963-5796-590'
	},{
		icon:'fab fa-instagram',
		text:'@zay_zayyt'
	}];


	$('#bio').html(bio);


	$.each(projects, (i, data) => {
		$('#projects').append(`
			<div class="col-6 p-3">
			<div class="bg-white shadow rounded-lg p-2 d-flex">
			<div class="project-img">
			<img src="${data.img}" class="w-100">
			</div>
			<div class="project-detail p-2 w-100">
			<h6 class="project-title">${data.title}</h6>
			<a class="d-block text-right" href="${data.link}" target="_blank">kunjungi</a>
			</div>
			</div>
			</div>`);
	});

	$.each(biodata, (i, data) => {
		$('#biodata').append(`
			<div class="col-12">
			<div class="bg-dark rounded shadow-sm p-2 px-3 mb-3 d-flex">
			<i class="${data.icon} text-white"></i>
			<div class="text-light pl-2 w-100">${data.text}</div>
			</div>
			</div>
			`);
	});

	$.each(contacts, (i, data) => {
		$('#contacts').append(`
			<div class="col-12">
			<div class="bg-dark rounded shadow-sm p-2 px-3 mb-3 d-flex">
			<i class="${data.icon} text-white"></i>
			<div class="text-light pl-2 w-100">${data.text}</div>
			</div>
			</div>
			`);
	});

});