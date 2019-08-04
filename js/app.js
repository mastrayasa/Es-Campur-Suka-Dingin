//document.write("js/app.js");

//alert("saya dari app.js")

function resetFormPemesanan(){
	$("#pesanan-success").hide();
	$("#form-pemesanan").show();
}



$(document).ready(function() {

	console.log($(".footer").hasClass("ikan"))
	console.log($(".footer").data("id"))

	$(".footer").addClass("merah");

	$("#form-pemesanan").on("submit",function(e){
		
		e.preventDefault();
		e.stopPropagation();
		
		if( $('input[name="nama"]').val() == "" ){ 
			alert("Nama tidak boleh kosong");
			$('input[name="nama"]').focus();
		}

		else if( $('input[name="hp"]').val() == "" ){ 
			alert("Nomor HP tidak boleh kosong");
			$('input[name="hp"]').focus();
		}

		else if( $('#alamat').val() == "" ){ 
			alert("Alamat tidak boleh kosong");
			$('#alamat').focus();
		}


		else if( $('#combo-makanan').val() == "" ){ 
			alert("Pilih makanan yang akan dipesan");
			$('#combo-makanan').focus();
		}

		else if( $('input[name="jumlah"]').val() == "" ){ 
			alert("Berapa jumlah makanan yang akan dipesan");
			$('input[name="jumlah"]').focus();
		}

		else{
			//alert("Pesanan anda terkirim\nTerimakasih atas pesanan anda");
			$("#pesanan-success").show();
			$("#form-pemesanan").hide();


		}

		console.log($('#combo-makanan').val())
		
	})

});
