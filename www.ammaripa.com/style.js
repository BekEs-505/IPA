function dw(data) {$.ajax({url: "admin/ajax.php",data: {downloadApp: data,ajax: 5}});}function download(id){$.ajax({url: "admin/ajax.php",data: {ajax: 3,id: id, }, dataType: "json",success: (res) => {window.location.href = res.url;}});}function er() {alert("عذراً التحميل من الايفون والايباد فقط");}