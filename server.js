// // 1. استيراد الحزم المطلوبة
// const express = require('express');
// const path = require('path');
// const prerender = require('prerender-node');

// // 2. إعداد تطبيق Express
// const app = express();

// // 3. إعداد مفتاح Prerender.io الخاص بك (يمكنك إنشاؤه من حسابك في prerender.io)
// app.use(
//   prerender.set('prerenderToken', 'ZCXAq5d0p66eW5eaSO3J')
// );

// // 4. تحديد مسار ملفات React الجاهزة بعد build
// app.use(express.static(path.join(__dirname, 'build')));

// // 5. إذا لم يتم إيجاد أي مسار، أعد إرسال index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// // 6. تشغيل السيرفر
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Serveur exécuté sur le port ${PORT}`);
// });



// 1. استيراد الحزم المطلوبة
const express = require('express');
const path = require('path');
const prerender = require('prerender-node');

// 2. إعداد تطبيق Express
const app = express();

// 3. إعداد Prerender.io مع token و user agent pattern
app.use(
  prerender
    .set('prerenderToken', 'ZCXAq5d0p66eW5eaSO3J') // 👈 عوض بهذا التوكن الخاص بك
    .set('protocol', 'https') // إذا كان موقعك HTTPS
    .set('userAgentPattern', /(googlebot|bingbot|yandex|baiduspider)/i) // 👈 هنا تحديد البوتات
);

// 4. تحديد مجلد ملفات React المبنيّة
app.use(express.static(path.join(__dirname, 'build')));

// 5. إرسال index.html في حال لم يتم إيجاد route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 6. تشغيل السيرفر
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Le serveur tourne sur http://localhost:${PORT}`);
});
