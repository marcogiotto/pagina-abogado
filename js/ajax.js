$(document).on("ready", function(){
			enviardatos();
		});

		function enviardatos (){
			$('#frm').on('submit',function(e){
				e.preventDefault();
				
				var frm= $(this).serialize();
					
				$.ajax({
					'method':'POST',
					'url':'../php/cont.php',
					'data': frm

				}).done(function(rta){
					document.querySelector('#frm').reset();
					$('#msg').html(rta);
					
				});
				});
			}
			
		