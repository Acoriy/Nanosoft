const express = require('express');
const path = require('path');
const prerender = require('prerender-node');

const app = express();

// ضع هنا رمز API الخاص بـ Prerender.io
prerender.set('prerenderToken', 'ZCXAq5d0p66eW5eaSO3J');

// استخدم Middleware الخاص بـ Prerender
app.use(prerender);

// استضافة ملفات React المبنية
app.use(express.static(path.join(__dirname, 'build')));

// كل الطلبات الأخرى ترسل index.html ليتم التعامل معها بواسطة React Router مثلاً
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// تشغيل السيرفر
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
