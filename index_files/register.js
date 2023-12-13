document.addEventListener(DOMContentLoaded,init,false);
function init(){
	if ('serviceWorker' in navigator && navigator.onLine){
		navigator.serviceWorker.register('index_files/sw.js').then ((reg)=>{console.log('Berhasil didaftarkan !',reg);
		},(err)=>{console.error('Gagal didaftarkan !',err);
		});
	}
}