// 1. استيراد الحزم المطلوبة
const express = require('express');
const path = require('path');
const prerender = require('prerender-node');

// 2. إعداد تطبيق Express
const app = express();

// 3. إعداد مفتاح Prerender.io الخاص بك (يمكنك إنشاؤه من حسابك في prerender.io)
app.use(
  prerender.set('prerenderToken', 'ZCXAq5d0p66eW5eaSO3J')
);

// 4. تحديد مسار ملفات React الجاهزة بعد build
app.use(express.static(path.join(__dirname, 'build')));

// 5. إذا لم يتم إيجاد أي مسار، أعد إرسال index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 6. تشغيل السيرفر
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur exécuté sur le port ${PORT}`);
});
