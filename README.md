<h1>🎨Jimp & Express ile Kişiye Özel Kart Oluşturma</h1>

> [!NOTE]
> Bu proje, Express.js kullanarak bir RESTful API geliştirmeyi ve Jimp kütüphanesi ile resim işleme işlemleri yapmayı amaçlamaktadır. Kullanıcıdan employeeName ve seniority bilgileri alınarak, bir arka plan şablonu üzerine kişiye özel bir teşekkür kartı oluşturulur ve base64 formatında döndürülür.

<h3>➤ Projeyi İndirme ve Çalıştırma</h3>
<h6>1. Projeyi Klonla </h6>
<p>Aşağıdaki komutu kullanarak projeyi GitHub üzerinden indir:</p>

```
git clone https://github.com/kullaniciadi/proje-adi.git
cd proje-adi
```

<h6> 2. Bağımlılıkları Yükle</h6>

```
npm install
```
<h6> 3. Sunucuyu Başlat</h6>

```
npm run start
```

<h6>📌 Eğer nodemon yüklü değilse, önce yüklemek için şu komutu çalıştırabilirsin:</h6>

```
npm install -g nodemon
```

<h1>🛠 API Kullanımı</h1>
<h3>➤ Kart Oluşturma (POST /generate-card)</h3>
<p>Endpoint: /generate-card</p>
<p>Metod: POST</p>
<p>İçerik Türü: application/json</p>
<h3>Gövde (Body) Örneği:</h3>

```
{
  "employeeName": "Deneme",
  "seniority": 2
}
```
<h3>Yanıt (Response):</h3>

```
{
  "image": "data:image/jpeg;base64,/9j/4AAQS..."
}
```
1.Adım: Yukarıda verdiğiniz base64 kodu (örneğin data:image/jpeg;base64,/9j/4AAQS...) kopyalayın.

2.Adım: [Base64 Decoder](https://base64.guru/converter/decode/image) adresine gidin.

3.Adım: Sayfanın "Base64" kısmına kopyaladığınız kodu yapıştırın.

4.Adım: "Decode" butonuna tıklayın. Bu işlem sonucu base64 kodu, görsel dosyasına dönüştürülecektir.
