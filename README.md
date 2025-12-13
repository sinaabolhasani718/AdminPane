
# 🛒 Admin Panel – Product Management Dashboard  
پنل مدیریت محصولات با React + Redux Toolkit
## 📸 Project Preview

### Login Page
![Login Page](https://github.com/sinaabolhasani718/AdminPane/tree/main/frontend/public/preview/login.png?raw=true)

### Dashboard
![Dashboard](https://github.com/sinaabolhasani718/AdminPane/tree/main/frontend/public/preview/dashboard.png?raw=true)

### Products Management
![Products](https://github.com/sinaabolhasani718/AdminPane/tree/main/frontend/public/preview/products.png?raw=true)




## 📌 درباره پروژه
این پروژه یک **پنل مدیریت محصولات** است که برای تمرین مفاهیم توسعه فرانت‌اند با **React** و مدیریت وضعیت با **Redux Toolkit** طراحی شده است.  
هدف پروژه ساخت یک داشبورد کامل با قابلیت‌های استاندارد یک سیستم واقعی است.



## 🚀 امکانات پروژه (Features)

### 🔐 احراز هویت
- ثبت‌نام کاربر  
- ورود کاربر  
- ذخیره توکن کاربر  
- محافظت از صفحات (Protected Routes)  

### 📦 مدیریت محصولات
- نمایش لیست محصولات  
- صفحه‌بندی (Pagination)  
- جستجو (Search)  
- افزودن محصول جدید (Modal)  
- ویرایش محصول (Modal)  
- حذف محصول  

### 🎛️ مدیریت State با Redux Toolkit
- slices منظم و تفکیک‌شده  
- ساخت async thunk برای درخواست‌های API  
- مدیریت loading و error ها  
- ذخیره داده‌های کاربر و محصولات در استور  

### 🧪 اعتبارسنجی فرم
- اعتبارسنجی ورود/ثبت‌نام  
- اعتبارسنجی فرم محصول  
- نمایش خطاهای فرم در رابط کاربری  

### 🔄 ارتباط کامل با API
- مدیریت خطاهای سرور  
- نمایش لودینگ  
- پیاده‌سازی درخواست‌های CRUD  



## 🛠️ تکنولوژی‌ها (Technologies)

| تکنولوژی | کاربرد |
|---------|--------|
| React | ساخت رابط کاربری |
| Redux Toolkit | مدیریت وضعیت |
| React Router | مدیریت صفحات |
| Axios | ارتباط با API |
| Formik / Yup | اعتبارسنجی فرم‌ها |
| TailwindCSS / MUI | استایل‌دهی (اختیاری) |



## 📂 ساختار پوشه‌ها (Folder Structure)


public/
├── fonts/
└── img/

src/
├── components/
│   ├── context/
│   │   └── UserContext.jsx
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.module.css
│   ├── Modals/
│   │   ├── AddProductModal.jsx
│   │   ├── EditProductModal.jsx
│   │   └── DeleteProductModal.jsx
│   └── ProductTable/
│       ├── ProductTable.jsx
│       └── ProductTable.module.css
│
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   └── Dashboard.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
├── main.jsx
└── global.css





## ⚙️ نحوه اجرا (Installation & Run)

### 1️⃣ کلون کردن پروژه 
git clone https://github.com/your-username/admin-panel.git
cd admin-panel


### 2️⃣ نصب پکیج‌ها  

npm install


### 3️⃣ اجرای پروژه  

npm run dev




## 🔧 تنظیمات API
فایل `.env` را ایجاد کنید:


VITE_API_BASE_URL=https://your-backend-api.com




## 🤝 مشارکت (Contributing)
Pull Request ها پذیرفته می‌شوند.  
برای هر فیچر یک Branch جدا ایجاد کنید.



## 📜 لایسنس
این پروژه تحت لایسنس MIT منتشر شده است.



## ✨ ساخته شده توسط:  
**Sina Abolhasani**

