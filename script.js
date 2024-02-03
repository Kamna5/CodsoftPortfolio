function downloadPDF() {
// console.log('fg')
var pdf = 'pdf/KamnaResume.pdf'
var link = document.createElement('a');
link.href = pdf;
link.download = 'KamnaResume.pdf';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);

}