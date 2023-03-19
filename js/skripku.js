function popup(){
	//tangkap request form
	let frm  = window.document.getElementById("form_login");
	let user = frm.username.value;
	let pass = frm.password.value;
	if(user == "mimin" && pass == "mimin123"){
		alert("Selamat datang Mimin, Anda Administrator");
	} else if(user == "budi" && pass == "budi123"){
		alert("Selamat datang Budi, Anda Operator");
	} else{
		alert("Maaf anda gagal login!");
	}
}