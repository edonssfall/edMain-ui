export class ContactService {
  showNotification = false;
  notificationMessage = '';

  phoneToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.notificationMessage = 'portfolio.home.success';
      this.showNotification = true;
      setTimeout(() => this.showNotification = false, 3000);
    }, () => {
      this.notificationMessage = 'portfolio.home.error';
      this.showNotification = true;
      setTimeout(() => this.showNotification = false, 3000);
    });
  }

  downloadCV() {
    const fileUrl = 'assets/portfolio/pdfs/CV_Leonid_Tsarov.pdf';
    const fileName = 'CV_Leonid_Tsarov.pdf';

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
