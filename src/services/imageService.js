const { createCanvas, loadImage, registerFont } = require('canvas');
const path = require('path');

registerFont(path.join(__dirname, '../fonts/AbhayaLibre-Regular.ttf'), { family: 'Arial' });

const createCard = async (employeeName, seniority) => {
  try {

    const image = await loadImage(path.join(__dirname, '../templates/background.jpeg'));
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');

    ctx.drawImage(image, 0, 0, image.width, image.height);

    ctx.font = '32px Arial';
    ctx.fillStyle = 'black';
    
    const text = `Sevgili ${employeeName},\n\nSeninle birlikte ${seniority}. yılımızı\ndoldurduk. Ekibimize kattığın\nher şey için teşekkürler.\n\n\nSMOD`;
    const xPosition = image.width * 0.3;
    const yPosition = image.height * 0.3;
    const lineHeight = 40;

    text.split('\n').forEach((line, index) => {
      ctx.fillText(line, xPosition, yPosition + (index * lineHeight));
    });

    const base64 = canvas.toDataURL('image/jpeg');
    return base64;

  } catch (error) {
    console.error('Image processing error:', error);
    throw error;
  }
};

module.exports = {
  createCard
}; 