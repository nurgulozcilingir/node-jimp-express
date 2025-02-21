const imageService = require('../services/imageService');

const generateCard = async (req, res) => {
  try {
    const { employeeName, seniority } = req.body;

    if (!employeeName || !seniority) {
      return res.status(400).json({ error: 'employeeName ve seniority alanları zorunludur' });
    }

    const base64Image = await imageService.createCard(employeeName, seniority);
    res.json({ image: base64Image });
  } catch (error) {
    console.error('Kart oluşturma hatası:', error);
    res.status(500).json({ error: 'Kart oluşturulurken bir hata oluştu' });
  }
};

module.exports = {
  generateCard
}; 